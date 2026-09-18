import { chromium } from '@playwright/test'
import { pathToFileURL } from 'node:url'
import { resolve } from 'node:path'

const browser = await chromium.launch(process.env.CHROMIUM_PATH != null ? { executablePath: process.env.CHROMIUM_PATH } : {})
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } })
await page.goto(pathToFileURL(resolve('scripts/og-template.html')).href)
await page.evaluate(async () => { await document.fonts.ready })
await page.screenshot({ path: 'public/og.jpg', type: 'jpeg', quality: 85 })
await browser.close()
