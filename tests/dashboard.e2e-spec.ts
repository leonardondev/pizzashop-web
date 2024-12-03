import { expect, test } from '@playwright/test'

test('display month revenue orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('R$ 200,00')).toBeVisible()
  await expect(page.getByText('+10% em relação ao mês passado')).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('200', { exact: true })).toBeVisible()
  await expect(page.getByText('+7% em relação ao mês passado')).toBeVisible()
})

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('21', { exact: true })).toBeVisible()
  await expect(page.getByText('-6% em relação a ontem')).toBeVisible()
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await expect(page.getByText('4', { exact: true })).toBeVisible()
  await expect(page.getByText('-8% em relação ao mês passado')).toBeVisible()
})
