// @ts-check
import { test, expect } from '@playwright/test';
const API_URL = 'https://73nhe22wt4.execute-api.ap-southeast-4.amazonaws.com/default/incrementVisitorCount';

test('website displays visitor count', async ({ page }) => {
    await page.goto('https://www.rayanhameed.com');

    await page.waitForTimeout(1000); // Wait for the API call to complete and the page to update
    const visitorCount = await page.locator('#visitor-count').textContent();
    const counter = page.locator("#visitor-count");
    
    await expect(counter).toBeVisible();
    await expect(visitorCount).toMatch(/Visitor Count: \d+/);
}
);