import { test, expect } from '@playwright/test';

const TARGET_URL = 'http://127.0.0.1:5500/index.html';

test.describe('Negative & UI Tests – Singlish to Sinhala', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(TARGET_URL);
    });

    test('Neg_Fun_001 - Missing Spaces', async ({ page }) => {
        await page.fill('#inputField', 'mamagedharaya');
        await expect(page.locator('#output')).toHaveText('mamagedharaya');
    });

    test('Neg_Fun_002 - Typos with Numbers', async ({ page }) => {
        await page.fill('#inputField', 'mma g 4 ynwa.');
        await expect(page.locator('#output')).toHaveText('mma g 4 ynwa.');
    });

    test('Neg_Fun_003 - HTML Injection', async ({ page }) => {
        await page.fill('#inputField', '<b>mama</b>');
        await expect(page.locator('#output')).toHaveText('<b>mama</b>');
    });

    test('Neg_Fun_004 - URL Handling', async ({ page }) => {
        await page.fill('#inputField', 'www.google.com');
        await expect(page.locator('#output')).toHaveText('www.google.com');
    });

    test('Neg_Fun_005 - Special Symbols', async ({ page }) => {
        await page.fill('#inputField', 'm@m@');
        await expect(page.locator('#output')).toHaveText('m@m@');
    });

    test('Neg_Fun_006 - Unknown Words', async ({ page }) => {
        await page.fill('#inputField', 'xxyyzz');
        await expect(page.locator('#output')).toHaveText('xxyyzz');
    });

    test('Neg_Fun_007 - Special Char Start', async ({ page }) => {
        await page.fill('#inputField', '*api');
        await expect(page.locator('#output')).toHaveText('*api');
    });

    test('Neg_Fun_008 - Multiple Spaces', async ({ page }) => {
        await page.fill('#inputField', 'mama    gedhara');
        await expect(page.locator('#output')).toHaveText('මම ගෙදර');
    });

    test('Neg_Fun_009 - Ambiguous Input', async ({ page }) => {
        await page.fill('#inputField', 'eka vahi');
        await expect(page.locator('#output')).toHaveText('ඒක වහින');
    });

    test('Neg_Fun_010 - Long Paragraph Error', async ({ page }) => {
        await page.fill('#inputField', 'dnnabariunaaerrorekaknisaa.');
        await expect(page.locator('#output')).toHaveText('dnnabariunaaerrorekaknisaa.');
    });

    // --- UI Test Case ---
    test('Pos_UI_01 - Real-time Update & Clear', async ({ page }) => {
        const input = page.locator('#inputField');
        const output = page.locator('#output');

        await input.fill('mama');
        await expect(output).toHaveText('මම');

        await input.fill('');
        await expect(output).toBeEmpty();
    });
});