import { chromium, test } from "@playwright/test"


test("Login test demo", async () => {

    const browser = await chromium.launch({
        headless: false
        });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
    // await page.click("text=Login");
    await page.click("'Login'");
    await page.fill("input[name='email']", "fredrikkihlman@gmail.com");
    await page.fill("input[name='password']", "fredrik123!");
    await page.click("input[value='Login']");

    await page.close();
    await context.close();
    await browser.close();

    // await page.waitForTimeout(5000);


})