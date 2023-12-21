import { test, expect } from '@playwright/test';

test('components', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page.getByTestId('accordion')).toHaveCount(1);
  await expect(page.getByTestId('accordion')).toHaveScreenshot();

  await expect(page.getByTestId('alert')).toHaveCount(1);
  await expect(page.getByTestId('alert')).toHaveScreenshot();

  await expect(page.getByTestId('badge')).toHaveCount(1);
  await expect(page.getByTestId('badge')).toHaveScreenshot();

  await expect(page.getByTestId('breadcrumb')).toHaveCount(1);
  await expect(page.getByTestId('breadcrumb')).toHaveScreenshot();

  await expect(page.getByTestId('button')).toHaveCount(1);
  await expect(page.getByTestId('button')).toHaveScreenshot();

  await expect(page.getByTestId('button-group')).toHaveCount(1);
  await expect(page.getByTestId('button-group')).toHaveScreenshot();

  await expect(page.getByTestId('button-toolbar')).toHaveCount(1);
  await expect(page.getByTestId('button-toolbar')).toHaveScreenshot();

  await expect(page.getByTestId('card')).toHaveCount(1);
  await expect(page.getByTestId('card')).toHaveScreenshot();

  await expect(page.getByTestId('dropdown')).toHaveCount(1);
  await expect(page.getByTestId('dropdown')).toHaveScreenshot();
});
