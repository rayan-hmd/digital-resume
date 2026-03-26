// @ts-check
import { test, expect } from '@playwright/test';
const SITE_URL = process.env.SITE_URL || 'https://www.rayanhameed.com';

test('website displays visitor count', async ({ page }) => {
  await page.goto(SITE_URL);

  await page.waitForTimeout(1000);
  const counter = page.locator('#visitor-count');
  const visitorCount = await counter.textContent();

  await expect(counter).toBeVisible();
  await expect(visitorCount).toMatch(/Visitor Count: \d+/);
});
