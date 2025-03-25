// npx playwright test e2e/referral.spec.js --headed --project=webkit 

import {test, expect} from '@playwright/test';
import { LoginWithAccountNonCreatedOrder } from './login.spec';
import { setTimeout } from 'timers/promises';


test.only('Check Referral From Account Non Order - Back', async ({page}) => {
    await LoginWithAccountNonCreatedOrder(page);
    await page.click('#root > div > div.AccountPage_page__2cKCW > div.AccountPage_accountBody__1kRVg > div:nth-child(7) > div > div.AccountPage_buttonTextDetails__2e8bW > span:nth-child(2)');
    await expect(page.locator('#root > div > div:nth-child(2) > div.DetailsHeader_detailsHdrBody__1bVwZ.ReferralPage_body__h1dsu > div.ReferralPage_cardFull__1ekTh.ReferralPage_footerButtonGap__ix-N2 > div:nth-child(1) > div.ReferralPage_headerContainer__1BjY4'), setTimeout(10000)).toBeVisible();
    await page.click('#root > div > div:nth-child(2) > div.DetailsHeader_detailsHdr__3QWBZ.DetailsHeader_detailsHdrStyleV1__At3G2.width-control > div.DetailsHeader_hdrSide__2J8oy.DetailsHeader_leftDiv__UiUzT > a');
    await expect(page.locator('#root > div > div.AccountPage_page__2cKCW > div.AccountPage_accountBody__1kRVg > div.AccountPage_accountHead__1mxPm > div.AccountPage_customerDetailPaddingLogin__2TnAC.d-flex.flex-column.flex-grow-1.justify-content-end > div.AccountPage_textTitleUserName__xzCvQ')).toHaveText('testingAccountz');
});


test('Check Referral From Account Non Order - Tutup', async ({page}) => {
    await LoginWithAccountNonCreatedOrder(page);
    await page.click('#root > div > div.AccountPage_page__2cKCW > div.AccountPage_accountBody__1kRVg > div:nth-child(7) > div > div.AccountPage_buttonTextDetails__2e8bW > span:nth-child(2)');
    await expect(page.locator('#root > div > div:nth-child(2) > div.DetailsHeader_detailsHdrBody__1bVwZ.ReferralPage_body__h1dsu > div.ReferralPage_cardFull__1ekTh.ReferralPage_footerButtonGap__ix-N2 > div:nth-child(1) > div.ReferralPage_headerContainer__1BjY4'), setTimeout(20000)).toBeVisible();
    await page.click('#root > div > div:nth-child(2) > div.DetailsHeader_detailsHdrBody__1bVwZ.ReferralPage_body__h1dsu > div.FooterButtons_two-btn-footer-row__2GM9v.width-control > button');
    await expect(page.locator('#root > div > div.AccountPage_page__2cKCW > div.DetailsHeader_detailsHdr__3QWBZ.DetailsHeader_detailsHdrStyleV2__2LUe4.width-control > div.DetailsHeader_detailsHdrTitleV2__1eB-H > span')).toHaveText('Akun');
});