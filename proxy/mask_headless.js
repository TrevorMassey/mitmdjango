// Chrome Test
window.chrome = {
    app: {
        isInstalled: false,
        InstallState: {"DISABLED": "disabled", "INSTALLED": "installed", "NOT_INSTALLED": "not_installed"},
        RunningState: {"CANNOT_RUN": "cannot_run", "READY_TO_RUN": "ready_to_run", "RUNNING": "running"}
    },
    webstore: {
        onInstallStageChanged: {},
        onDownloadProgress: {},
    },
    runtime: {
        PlatformOs: {
            MAC: 'mac',
            WIN: 'win',
            ANDROID: 'android',
            CROS: 'cros',
            LINUX: 'linux',
            OPENBSD: 'openbsd',
        },
        PlatformArch: {
            ARM: 'arm',
            X86_32: 'x86-32',
            X86_64: 'x86-64',
        },
        PlatformNaclArch: {
            ARM: 'arm',
            X86_32: 'x86-32',
            X86_64: 'x86-64',
        },
        RequestUpdateCheckStatus: {
            THROTTLED: 'throttled',
            NO_UPDATE: 'no_update',
            UPDATE_AVAILABLE: 'update_available',
        },
        OnInstalledReason: {
            INSTALL: 'install',
            UPDATE: 'update',
            CHROME_UPDATE: 'chrome_update',
            SHARED_MODULE_UPDATE: 'shared_module_update',
        },
        OnRestartRequiredReason: {
            APP_UPDATE: 'app_update',
            OS_UPDATE: 'os_update',
            PERIODIC: 'periodic',
        }
    }
};

// Webdriver Test
const newProto = navigator.__proto__;
delete newProto.webdriver;
navigator.__proto__ = newProto;

// Permissions Test
const originalQuery = window.navigator.permissions.query;
window.navigator.permissions.query = (parameters) => (
    parameters.name === 'notifications' ? Promise.resolve({
        state: Notification.permission
    }) : originalQuery(parameters));

//