import os
import yaml
import pathlib
from pprint import pprint

import requests
import lxml.html
from lxml.html import Element
from mitmproxy import ctx


class MaskHeadless:
    domain_includes = [

    ]

    def response(self, flow):
        if not flow.response.status_code == 200:
            return

        if self.domain_match(flow):
            if self.is_html(flow.response.headers):
                flow.response.text = self.inject_script_tag(flow.response.text)
                ctx.log.info('Successfully injected the content script.')

    def domain_match(self, flow):
        for domain in self.domain_includes:
            if domain in flow.request.pretty_host:
                return True
        return False

    def is_html(self, headers):
        for key, value in headers.items():
            if 'content-type' == key.lower():
                if 'html' in str(value):
                    return True
        return False

    def inject_script_tag(self, html):
        root = lxml.html.fromstring(html)
        if root is None:
            # Sometimes non-html sneaks through the header check
            return html
        with open('mask_headless.js') as f:
            content_js = f.read()
        script = Element("script")
        script.text = content_js

        root.insert(0, script)
        html = lxml.html.tostring(root, method="html").decode('utf-8')
        return html


addons = [
    MaskHeadless(),
]
