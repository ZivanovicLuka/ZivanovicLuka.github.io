import { test } from '@playwright/test';

test('desktop header preview', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/');
  await page.locator('#site-header').waitFor();
  await page.screenshot({ path: 'test-results/preview-desktop-full.png', fullPage: true });
  await page.locator('#site-header').screenshot({ path: 'test-results/preview-desktop-header.png' });
});

test('mobile header preview', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.locator('#site-header').waitFor();
  await page.locator('#site-header').screenshot({ path: 'test-results/preview-mobile-header.png' });
});

test('experience section preview', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto('/');
  await page.locator('#experience').scrollIntoViewIfNeeded();
  await page.locator('#experience').screenshot({ path: 'test-results/preview-experience.png' });
});
