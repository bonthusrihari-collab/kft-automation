import { test, expect } from '@playwright/test';

// Simple login test converted from standalone script

test('agent login flow', async ({ page }) => {
  await page.goto('https://rf-embed-dsa-app.knightfintech.com/');

  await page.getByRole('textbox', { name: 'Please Enter Agent ID' }).click();
  await page.getByRole('textbox', { name: 'Please Enter Agent ID' }).fill('bonthu.srihari@dev.knightfintech.com');
  await page.getByRole('textbox', { name: 'Please Enter Password' }).click();
  await page.getByRole('textbox', { name: 'Please Enter Password' }).fill('welcome@1234');
  await page.locator('i').click();
  await page.getByRole('button', { name: 'Sign in' }).click();

  // optional assertion to verify successful login
//   await expect(page).toHaveURL(/dashboard/);
});