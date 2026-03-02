export const androidCaps = {
    platformName: "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": "Medium_Phone_API_36.0",
    "appium:avd": "Medium_Phone_API_36.0",
    "appium:avdLaunchTimeout": 180000, // Wait up to 3 minutes for AVD to boot
    "appium:uiautomator2ServerLaunchTimeout": 60000,
    "appium:autoGrantPermissions": true,
    "appium:app": process.cwd() + "/src/apk/rds.apk",
    "appium:appPackage": "com.knightfintech.embeddedfinance",
    "appium:appWaitActivity": "*",
    "appium:automationName": "UiAutomator2"
};

export const iosCaps = {
    platformName: "iOS",
    "appium:automationName": "XCUITest",
    "appium:deviceName": "iPhone 15", // Placeholder: User should update this
    "appium:platformVersion": "17.0", // Placeholder: User should update this
    "appium:app": process.cwd() + "/src/apps/rds.app", // Placeholder: Assuming a similar structure to Android
    "appium:autoAcceptAlerts": true,
};

export const appiumOptions = (caps) => ({
    hostname: 'localhost',
    port: 4723,
    path: '/',
    capabilities: caps,
    logLevel: 'info',
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1
});
