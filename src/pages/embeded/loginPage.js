export class LoginPage {
    constructor(driver) {
        this.driver = driver;
    }

    get userNameField() {
        return this.driver.isAndroid
            ? this.driver.$('//*[@resource-id="UserName"]')
            : this.driver.$('~UserName'); // Assuming accessibility id is 'UserName'
    }
    get passwordField() {
        return this.driver.isAndroid
            ? this.driver.$('//*[@resource-id="Password"]')
            : this.driver.$('~Password');
    }
    get loginButton() {
        return this.driver.isAndroid
            ? this.driver.$('//android.widget.Button[@text="Sign in"]')
            : this.driver.$('~Sign in');
    }

    async login(username, password) {
        console.log(`Logging in as: ${username}`);
        const userEl = await this.userNameField;
        await userEl.waitForExist({ timeout: 30000 });
        await userEl.setValue(username);

        const passEl = await this.passwordField;
        await passEl.waitForExist({ timeout: 30000 });
        await passEl.setValue(password);

        const btnEl = await this.loginButton;
        await btnEl.waitForExist({ timeout: 30000 });
        console.log("Clicking Sign in button...");
        await btnEl.click();

        console.log("Login submitted. Waiting for transition to complete...");
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
}
