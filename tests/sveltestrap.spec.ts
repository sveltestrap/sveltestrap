import { test, expect, type Page } from '@playwright/test';

test('components', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page.getByTestId('example-accordion')).toHaveCount(1);
  // await expect(page.getByTestId('example-accordion')).toHaveScreenshot({ maxDiffPixels: 100 });

  await expect(page.getByTestId('example-alert')).toHaveCount(1);
  // await expect(page.getByTestId('example-alert')).toHaveScreenshot();

  await expect(page.getByTestId('example-badge')).toHaveCount(1);
  await expect(page.getByTestId('example-badge')).toHaveScreenshot();

  await expect(page.getByTestId('example-breadcrumb')).toHaveCount(1);
  await expect(page.getByTestId('example-breadcrumb')).toHaveScreenshot();

  await expect(page.getByTestId('example-button')).toHaveCount(1);
  await expect(page.getByTestId('example-button')).toHaveScreenshot();

  await expect(page.getByTestId('example-button-group')).toHaveCount(1);
  await expect(page.getByTestId('example-button-group')).toHaveScreenshot();

  await expect(page.getByTestId('example-button-toolbar')).toHaveCount(1);
  await expect(page.getByTestId('example-button-toolbar')).toHaveScreenshot();

  await expect(page.getByTestId('example-card')).toHaveCount(1);
  await expect(page.getByTestId('example-card')).toHaveScreenshot();

  await expect(page.getByTestId('example-dropdown')).toHaveCount(1);
  await expect(page.getByTestId('example-dropdown')).toHaveScreenshot();
});
