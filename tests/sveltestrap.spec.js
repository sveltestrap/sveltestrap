import { test, expect } from '@playwright/test';

test('components', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page.getByTestId('accordion')).toHaveCount(1);
  await expect(page.getByTestId('accordion')).toHaveScreenshot(['accordion.png']);

  await expect(page.getByTestId('alert')).toHaveCount(1);
  await expect(page.getByTestId('alert')).toHaveScreenshot(['alert.png']);

  await expect(page.getByTestId('badge')).toHaveCount(1);
  await expect(page.getByTestId('badge')).toHaveScreenshot(['badge.png']);

  await expect(page.getByTestId('breadcrumb')).toHaveCount(1);
  await expect(page.getByTestId('breadcrumb')).toHaveScreenshot(['breadcrumb.png']);

  await expect(page.getByTestId('button')).toHaveCount(1);
  await expect(page.getByTestId('button')).toHaveScreenshot(['button.png']);

  await expect(page.getByTestId('button-group')).toHaveCount(1);
  await expect(page.getByTestId('button-group')).toHaveScreenshot(['button-group.png']);

  await expect(page.getByTestId('button-toolbar')).toHaveCount(1);
  await expect(page.getByTestId('button-toolbar')).toHaveScreenshot(['button-toolbar.png']);

  await expect(page.getByTestId('card')).toHaveCount(1);
  await expect(page.getByTestId('card')).toHaveScreenshot(['card.png']);

  await expect(page.getByTestId('dropdown')).toHaveCount(1);
  await expect(page.getByTestId('dropdown')).toHaveScreenshot(['dropdown.png']);
});
