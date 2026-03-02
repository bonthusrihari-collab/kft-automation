export class KYCPage {
    constructor(driver) {
        this.driver = driver;
    }

    // These selectors are speculative based on the project structure and common patterns
    // We will verify/update them using page source if they fail.
    get dashboardTitle() {
        return this.driver.isAndroid
            ? this.driver.$('//*[@content-desc="Dashboard"] | //*[contains(@text, "Dashboard")] | //*[contains(@text, "Home")]')
            : this.driver.$('~Dashboard');
    }
    get startKYCBtn() {
        return this.driver.isAndroid
            ? this.driver.$('//android.widget.Button[@text="Start KYC"] | //android.widget.Button[contains(@text, "KYC")] | //android.view.View[contains(@content-desc, "KYC")]')
            : this.driver.$('~Start KYC');
    }
    get panField() {
        return this.driver.isAndroid
            ? this.driver.$('//*[@resource-id="PAN"] | //android.widget.EditText[contains(@hint, "PAN")]')
            : this.driver.$('~PAN');
    }
    get dobField() {
        return this.driver.isAndroid
            ? this.driver.$('//*[@resource-id="DOB"] | //android.widget.EditText[contains(@hint, "DOB")]')
            : this.driver.$('~DOB');
    }
    get submitKYCBtn() {
        return this.driver.isAndroid
            ? this.driver.$('//android.widget.Button[@resource-id="submitKYC"] | //android.widget.Button[@text="Submit"]')
            : this.driver.$('~Submit');
    }

    async isDashboardLoaded() {
        const el = await this.dashboardTitle;
        return await el.waitForExist({ timeout: 30000 });
    }

    async startKYC() {
        console.log("Starting KYC flow...");
        const el = await this.startKYCBtn;
        await el.waitForExist({ timeout: 30000 });
        await el.click();
    }

    async fillKYCDetails(pan, dob) {
        console.log(`Filling KYC details for PAN: ${pan}`);
        const panEl = await this.panField;
        await panEl.waitForExist({ timeout: 30000 });
        await panEl.setValue(pan);

        const dobEl = await this.dobField;
        await dobEl.waitForExist({ timeout: 30000 });
        await dobEl.setValue(dob);

        const submitEl = await this.submitKYCBtn;
        await submitEl.click();
    }
}
