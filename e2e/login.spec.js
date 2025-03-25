// Playwright actually run on headless mode as default
// Run from Playwright UI mode: npx playwright test --ui
// Run on all driver (firefox, chrome, and webkit): npx playwright test e2e/login.spec.js --headed
// Run on Chrome: npx playwright test e2e/login.spec.js --headed --project=webkit 



import {test, expect} from '@playwright/test';


export const LoginWithAccountNonCreatedOrder  = async (page) => {
    await page.goto('https://segari.id/products/Wsk7', {timeout: 100000});
    // await page.waitForTimeout(30000);
    await page.click(':nth-child(5) > .footer_menuNavItemV2__1AsRd > .footer_menuNavLink__2cd6X');
    await page.click('.AccountPage_buttonLogin__wVbKk');
    await page.fill('.LoginForm_phone__1L-vR', '081371611913');
    await page.click('.LoginForm_submitDiv__3-DdM > .btn');
    
    await page.fill('#root > div > div.LoginPage_page__29eS2.height-control.overflow-hidden > div.animated.slideInRight.LoginPage_formBody__tw6cN > div > div.LoginPage_formInput___bnhn > form > div > div.PinForm_pinInputDiv__WHD8y > div.pincode-input-container > input:nth-child(1)', '5');
    await page.fill('#root > div > div.LoginPage_page__29eS2.height-control.overflow-hidden > div.animated.slideInRight.LoginPage_formBody__tw6cN > div > div.LoginPage_formInput___bnhn > form > div > div.PinForm_pinInputDiv__WHD8y > div.pincode-input-container > input:nth-child(2)', '5');
    await page.fill('#root > div > div.LoginPage_page__29eS2.height-control.overflow-hidden > div.animated.slideInRight.LoginPage_formBody__tw6cN > div > div.LoginPage_formInput___bnhn > form > div > div.PinForm_pinInputDiv__WHD8y > div.pincode-input-container > input:nth-child(3)', '5');
    await page.fill('#root > div > div.LoginPage_page__29eS2.height-control.overflow-hidden > div.animated.slideInRight.LoginPage_formBody__tw6cN > div > div.LoginPage_formInput___bnhn > form > div > div.PinForm_pinInputDiv__WHD8y > div.pincode-input-container > input:nth-child(4)', '5');
    await page.fill('#root > div > div.LoginPage_page__29eS2.height-control.overflow-hidden > div.animated.slideInRight.LoginPage_formBody__tw6cN > div > div.LoginPage_formInput___bnhn > form > div > div.PinForm_pinInputDiv__WHD8y > div.pincode-input-container > input:nth-child(5)', '5');
    await page.fill('#root > div > div.LoginPage_page__29eS2.height-control.overflow-hidden > div.animated.slideInRight.LoginPage_formBody__tw6cN > div > div.LoginPage_formInput___bnhn > form > div > div.PinForm_pinInputDiv__WHD8y > div.pincode-input-container > input:nth-child(6)', '5');

    await page.click('#root > div > div.LoginPage_page__29eS2.height-control.overflow-hidden > div.animated.slideInRight.LoginPage_formBody__tw6cN > div > div.LoginPage_formInput___bnhn > form > div > div.PinForm_btnDiv__27DcF > button');
    await expect(page.locator('#root > div > div.AccountPage_page__2cKCW > div.AccountPage_accountBody__1kRVg > div.AccountPage_accountHead__1mxPm > div.AccountPage_customerDetailPaddingLogin__2TnAC.d-flex.flex-column.flex-grow-1.justify-content-end > div.AccountPage_textTitleUserName__xzCvQ')).toHaveText('testingAccountz');


};

test.only('Login to Your Account - Non Ordered Yet', async ({page}) => {
    await LoginWithAccountNonCreatedOrder(page);
});