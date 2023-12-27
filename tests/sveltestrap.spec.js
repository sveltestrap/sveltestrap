import { test, expect } from '@playwright/test';

// disabling snapshots until https://github.com/microsoft/playwright/pull/28453

test('components', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page.getByTestId('accordion')).toHaveCount(1);
  // expect(await page.getByTestId('accordion').screenshot()).toMatchSnapshot('accordion.png');

  await expect(page.getByTestId('alert')).toHaveCount(1);
  // expect(await page.getByTestId('alert').screenshot()).toMatchSnapshot('alert.png');

  await expect(page.getByTestId('badge')).toHaveCount(1);
  // expect(await page.getByTestId('badge').screenshot()).toMatchSnapshot('badge.png');

  await expect(page.getByTestId('breadcrumb')).toHaveCount(1);
  // expect(await page.getByTestId('breadcrumb').screenshot()).toMatchSnapshot('breadcrumb.png');

  await expect(page.getByTestId('button')).toHaveCount(1);
  // expect(await page.getByTestId('button').screenshot()).toMatchSnapshot('button.png');

  await expect(page.getByTestId('button-group')).toHaveCount(1);
  // expect(await page.getByTestId('button-group').screenshot()).toMatchSnapshot('button-group.png');

  await expect(page.getByTestId('button-toolbar')).toHaveCount(1);
  // expect(await page.getByTestId('button-toolbar').screenshot()).toMatchSnapshot('button-toolbar.png');

  await expect(page.getByTestId('card')).toHaveCount(1);
  // expect(await page.getByTestId('card').screenshot()).toMatchSnapshot('card.png');

  await expect(page.getByTestId('dropdown')).toHaveCount(1);
  // expect(await page.getByTestId('dropdown').screenshot()).toMatchSnapshot('dropdown.png');
});
