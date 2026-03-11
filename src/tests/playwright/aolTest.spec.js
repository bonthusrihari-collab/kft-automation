import { test, expect } from '@playwright/test';
import { createLead } from '../../utils/generateAOLUrl.js';

test.use({ launchOptions: { slowMo: 2000 } });

test('test', async ({ page }) => {
    test.setTimeout(180000); // Increase overall test timeout since we are adding 2 seconds per step

    page.on('request', request => {
        if (request.url().includes('/api/')) {
            console.log(`\n>[Req] ${request.method()} ${request.url()}`);
            if (request.postData()) console.log(`  Payload: ${request.postData()}`);
        }
    });

    page.on('response', async response => {
        if (response.url().includes('/api/')) {
            console.log(`<[Res] ${response.status()} ${response.url()}`);
            try {
                const body = await response.text();
                if (body) console.log(`  Body: ${body.substring(0, 2000)}`);
            } catch (e) {
                // Ignore if we can't read body
            }
        }
    });
    const url = await createLead();
    await page.goto(url);
    await page.locator('div').filter({ hasText: /^VIEW LOAN DETAILS$/ }).first().click();
    await page.getByText('Loan Details').click();
    await page.getByText('Interest Payment Date4th of').click();
    await page.getByText('Eligible Loan Amount₹').click();
    await page.getByText('How is loan amount calculated').click();
    await page.getByText('View 5 eligible funds').click();
    await page.getByText('Loan Details').click();
    await page.locator('div').filter({ hasText: 'Loan DetailsEligible Loan' }).nth(5).click();
    await page.locator('div').filter({ hasText: /^PROCEED TO KYC$/ }).first().click();
    await page.getByText('CONTINUE TO PLEDGE').click();
    await page.getByRole('textbox').first().click();
    await page.getByRole('textbox').first().fill('1');
    await page.getByRole('textbox').nth(1).fill('2');
    await page.getByRole('textbox').nth(2).fill('3');
    await page.getByRole('textbox').nth(3).fill('4');
    await page.getByRole('textbox').nth(4).fill('5');
    await page.getByRole('textbox').nth(5).fill('6');
    await page.locator('div').filter({ hasText: /^SUBMIT OTP$/ }).nth(1).click();
    await page.locator('div').filter({ hasText: /^CONFIRM BANK ACCOUNT$/ }).first().click();
    const page1Promise = page.waitForEvent('popup');
    await page.locator('div').filter({ hasText: /^SET UP AUTOPAY$/ }).nth(1).click();
});