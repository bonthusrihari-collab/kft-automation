console.log("Script starting... Importing dependencies.");
import { createMobileDriver } from "../../utils/mobileDriver.js";
import { androidCaps, iosCaps } from "../../config/mobileCaps.js";
import { mail, pan, dob } from "../../payloads/userData.js";
import { LoginPage } from "../../pages/embeded/loginPage.js";
import { KYCPage } from "../../pages/embeded/kycPage.js";

console.log("Dependencies imported. Defining test functions.");

async function runTest(platform) {
    console.log(`Starting ${platform.toUpperCase()} E2E Flow...`);
    let driver;
    try {
        const caps = platform === 'ios' ? iosCaps : androidCaps;
        console.log(`Attempting to connect to Appium server for ${platform}...`);
        driver = await createMobileDriver(caps);

        const loginPage = new LoginPage(driver);
        const kycPage = new KYCPage(driver);

        // 1. Perform Login
        await loginPage.login(mail, "Welcome@1234");
        console.log("Login successful.");

        // 2. Dashboard Navigation (Optional check)
        // const isLoaded = await kycPage.isDashboardLoaded().catch(() => false);
        // if (isLoaded) console.log("Dashboard loaded.");

        // Example: Wait for 5 seconds to observe the result
        await new Promise((resolve) => setTimeout(resolve, 5000));

    } catch (e) {
        console.error(`${platform.toUpperCase()} E2E Flow Failed:`, e.message);
        if (driver) {
            console.log("Capturing Page Source...");
            const source = await driver.getPageSource();
            const fs = await import('fs');
            fs.writeFileSync(`/tmp/${platform}_page_source.xml`, source);
        }
    } finally {
        if (driver) {
            await driver.deleteSession();
        }
    }
}

await runTest('android');
