// @ts-check
import { test, expect } from '@playwright/test';

test('website displays visitor count', async ({ page }) => {
  await page.route('**://player.vimeo.com/**', async (route) => {
    await route.abort();
  });

  await page.route('**://fonts.googleapis.com/**', async (route) => {
    await route.abort();
  });

  await page.route('**://fonts.gstatic.com/**', async (route) => {
    await route.abort();
  });

  await page.route('**/incrementVisitorCount', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ visitor_count: 4242 }),
    });
  });

  await page.goto('/', { waitUntil: 'domcontentloaded' });

  const counter = page.locator('#visitor-count');

  await expect(counter).toBeVisible();
  await expect(counter).toHaveText('Visitor Count: 4242');
});
