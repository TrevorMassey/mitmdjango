FROM mitmproxy/mitmproxy:4.0.4
RUN mkdir -p /project & mkdir -p /data
WORKDIR /project
# Library requirements for lxml
RUN apk add --update --no-cache g++ gcc libxslt-dev libxml2-dev python3-dev
COPY requirements.txt .
RUN pip3 install --upgrade pip
RUN pip3 install -r requirements.txt

