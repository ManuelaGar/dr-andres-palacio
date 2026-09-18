import { expect, test } from '@playwright/test'

const WA_ES = 'https://wa.me/573206816213?text=Hola%20Dr.%20Andr%C3%A9s%20Palacio%2C%20quisiera%20solicitar%20una%20consulta.'

test('the Spanish home books through WhatsApp with the prefilled message', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
  const cta = page.getByRole('link', { name: 'Agendar por WhatsApp' }).first()
  await expect(cta).toHaveAttribute('href', WA_ES)
  await expect(cta).toHaveAttribute('target', '_blank')
})

test('every in-page link points at a section that exists', async ({ page }) => {
  for (const path of ['/', '/en']) {
    await page.goto(path)
    const hrefs = await page.locator('a[href^="#"]').evaluateAll((links) => links.map((a) => a.getAttribute('href') ?? ''))
    expect(hrefs.length).toBeGreaterThan(0)
    for (const href of hrefs) {
      await expect(page.locator(href), `${path} ${href}`).toHaveCount(1)
    }
  }
})

test('the language switch keeps the reader on the same page', async ({ page }) => {
  await page.goto('/preguntas-frecuentes')
  await page.getByRole('link', { name: 'English' }).click()
  await expect(page).toHaveURL(/\/en\/faq$/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await page.getByRole('link', { name: 'Español' }).click()
  await expect(page).toHaveURL(/\/preguntas-frecuentes$/)
})

test('the mobile menu opens, and closes after choosing a section', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'mobile only')
  await page.goto('/')
  const burger = page.getByRole('button', { name: 'Abrir menú' })
  const panelId = await burger.getAttribute('aria-controls')
  await burger.click()
  const services = page.locator(`[id="${panelId ?? ''}"]`).getByRole('link', { name: 'Servicios', exact: true })
  await expect(services).toBeVisible()
  await services.click()
  await expect(page.getByRole('button', { name: 'Abrir menú' })).toHaveAttribute('aria-expanded', 'false')
  await expect(page).toHaveURL(/#servicios$/)
})

test('the floating WhatsApp button appears once the hero is out of view', async ({ page }) => {
  await page.goto('/')
  const fab = page.locator('a[data-visible]')
  await expect(fab).toHaveAttribute('data-visible', 'false')
  await page.locator('#servicios').scrollIntoViewIfNeeded()
  await expect(fab).toHaveAttribute('data-visible', 'true')
})

test('publication links only go to doi.org', async ({ page }) => {
  await page.goto('/investigacion')
  const links = page.getByRole('link', { name: 'Ver publicación →' })
  await expect(links).toHaveCount(3)
  for (const href of await links.evaluateAll((a) => a.map((el) => el.getAttribute('href') ?? ''))) {
    expect(href).toMatch(/^https:\/\/doi\.org\/10\./)
  }
})

test('the FAQ opens one answer at a time', async ({ page }) => {
  await page.goto('/preguntas-frecuentes')
  const items = page.locator('details')
  await expect(items.first()).toHaveAttribute('open', '')
  await items.nth(2).locator('summary').click()
  await expect(items.nth(2)).toHaveAttribute('open', '')
  await expect(items.first()).not.toHaveAttribute('open', '')
})
