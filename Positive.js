import { test, expect } from '@playwright/test';

const TARGET_URL = 'http://127.0.0.1:5500/index.html'; 

test.describe('Positive Functional Tests – Singlish to Sinhala', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(TARGET_URL);
    });

    test('Pos_Fun_001 - Compound Sentence', async ({ page }) => {
        await page.fill('#inputField', 'api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.');
        await expect(page.locator('#output')).toHaveText('අපි කෑම කන්න යනවා සහ පස්සේ චිත්‍රපටයකුත් බලනවා.');
    });

    test('Pos_Fun_002 - Complex Sentence', async ({ page }) => {
        await page.fill('#inputField', 'oya enavaanam mama balan innavaa.');
        await expect(page.locator('#output')).toHaveText('ඔයා එනවානම් මම බලන් ඉන්නවා.');
    });

    test('Pos_Fun_003 - Simple Sentence', async ({ page }) => {
        await page.fill('#inputField', 'mama gedhara yanavaa.');
        await expect(page.locator('#output')).toHaveText('මම ගෙදර යනවා.');
    });

    test('Pos_Fun_004 - Interrogative Form 1', async ({ page }) => {
        await page.fill('#inputField', 'Oyaa nidhidha?');
        await expect(page.locator('#output')).toHaveText('ඔයා නිදිද?');
    });

    test('Pos_Fun_005 - Interrogative Form 2', async ({ page }) => {
        await page.fill('#inputField', 'oyaata kohomadha?');
        await expect(page.locator('#output')).toHaveText('ඔයාට කොහොමද?');
    });

    test('Pos_Fun_006 - Greeting', async ({ page }) => {
        await page.fill('#inputField', 'aayuboovan! suba udhaeesanak');
        await expect(page.locator('#output')).toHaveText('ආයුබෝවන්! සුබ උදෑසනක්');
    });

    test('Pos_Fun_007 - Request', async ({ page }) => {
        await page.fill('#inputField', 'mata udhavvak karanna puLuvandha?');
        await expect(page.locator('#output')).toHaveText('මට උදව්වක් කරන්න පුළුවන්ද?');
    });

    test('Pos_Fun_008 - Polite Phrasing', async ({ page }) => {
        await page.fill('#inputField', 'karuNaakaralaa poddak inna');
        await expect(page.locator('#output')).toHaveText('කරුණාකරලා පොඩ්ඩක් ඉන්න');
    });

    test('Pos_Fun_009 - Informal Phrasing', async ({ page }) => {
        await page.fill('#inputField', 'eeyi, ooka dhiyan');
        await expect(page.locator('#output')).toHaveText('ඒයි, ඕක දියන්');
    });

    test('Pos_Fun_010 - Repeated Words', async ({ page }) => {
        await page.fill('#inputField', 'gihin gihin');
        await expect(page.locator('#output')).toHaveText('ගිහින් ගිහින්');
    });

    test('Pos_Fun_011 - Past Tense', async ({ page }) => {
        await page.fill('#inputField', 'iiyee gedhara giya');
        await expect(page.locator('#output')).toHaveText('ඊයේ ගෙදර ගියා');
    });

    test('Pos_Fun_012 - Future Tense', async ({ page }) => {
        await page.fill('#inputField', 'api heta enavaa');
        await expect(page.locator('#output')).toHaveText('අපි හෙට එනවා');
    });

    test('Pos_Fun_013 - Plural Usage', async ({ page }) => {
        await page.fill('#inputField', 'iiLaGa Lamayi schoo');
        await expect(page.locator('#output')).toHaveText('ඊළඟ ළමයි ස්කූල්');
    });

    test('Pos_Fun_014 - Brand Terms', async ({ page }) => {
        await page.fill('#inputField', 'Zoom mIt8 ekak thiyennee!');
        await expect(page.locator('#output')).toHaveText('Zoom මීටින් එකක් තියෙන්නේ!');
    });

    test('Pos_Fun_015 - Place Names', async ({ page }) => {
        await page.fill('#inputField', 'api trip Kandy valata yamAw');
        await expect(page.locator('#output')).toHaveText('අපි ට්‍රිප් නුවර වලට යමු');
    });

    test('Pos_Fun_016 - Currency Format', async ({ page }) => {
        await page.fill('#inputField', 'Rs. 5000 k dhenna');
        await expect(page.locator('#output')).toHaveText('රුපියල් 5000 ක් දෙන්න');
    });

    test('Pos_Fun_017 - Date Format', async ({ page }) => {
        await page.fill('#inputField', 'heta 2026-01-29');
        await expect(page.locator('#output')).toHaveText('හෙට 2026-01-29');
    });

    test('Pos_Fun_018 - Slang', async ({ page }) => {
        await page.fill('#inputField', 'Adoo patta bng siraavatama');
        await expect(page.locator('#output')).toHaveText('අඩෝ පට්ට බං සිරාවටම');
    });

    test('Pos_Fun_019 - Day-to-day Expression', async ({ page }) => {
        await page.fill('#inputField', 'mata nidhimathayi poddak inna');
        await expect(page.locator('#output')).toHaveText('මට නිදිමතයි පොඩ්ඩක් ඉන්න');
    });

    test('Pos_Fun_020 - Technical Sentence', async ({ page }) => {
        await page.fill('#inputField', 'nimaali office late ee Colombo trip');
        await expect(page.locator('#output')).toHaveText('නිමාලි ඔෆිස් ලේට් ඒ කොළඹ ට්‍රිප්');
    });

    test('Pos_Fun_021 - Heavy Punctuation', async ({ page }) => {
        await page.fill('#inputField', '??? !!! ... ((( )))');
        await expect(page.locator('#output')).toHaveText('??? !!! ... ((( )))');
    });

    test('Pos_Fun_022 - Pronoun Variation', async ({ page }) => {
        await page.fill('#inputField', 'eyae Henavaa.');
        await expect(page.locator('#output')).toHaveText('එයා එනවා.');
    });

    test('Pos_Fun_023 - Paragraph Style', async ({ page }) => {
        await page.fill('#inputField', 'dhitvaa suLi kuNaatuva.');
        await expect(page.locator('#output')).toHaveText('දිට්ඨ සුළි කුණාටුව.');
    });

    test('Pos_Fun_024 - Mixed Singlish + English', async ({ page }) => {
        await page.fill('#inputField', 'Zoom WiFi Email WhatsApp');
        await expect(page.locator('#output')).toHaveText('Zoom WiFi Email WhatsApp');
    });
});