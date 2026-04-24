import { test, expect } from '@playwright/test';

test('home page loads with title and summary', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Luka Živanović/);
  await expect(page.locator('#summary')).toBeVisible();
});
