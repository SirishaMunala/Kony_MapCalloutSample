//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "MapCustomCallout",
    appName: "MapCustomCallout",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.49",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "middleware",
    url: "http://10.10.12.49:80/middleware/MWServlet",
    secureurl: "https://10.10.12.49:443/middleware/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeuserCallout();
    frmiPadMapGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false
    })
};

function themeCallBack() {
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmiPadMap.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;