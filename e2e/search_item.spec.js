// npx playwright test e2e/search_item.spec.js --headed --project=webkit 
// add test.only for run single test cases 
// Run with specific pattern (e.g npx playwright test e2e/search_item.spec.js --grep "Ikan")


import {test, expect} from '@playwright/test';
import { LoginWithAccountNonCreatedOrder } from './login';

test('Search Item Ikan on Homepage', async ({page}) => {
    await LoginWithAccountNonCreatedOrder(page);
    await page.click('#root > div > div.AccountPage_page__2cKCW > div.footer_footer__1lZIc.width-control > div > div:nth-child(1) > div > a');
    await expect(page.locator('#searchbox > input')).toBeVisible();

    await page.click('#searchbox > input');
    await page.fill('#searchbox > input', 'Ikan');
    await expect(page.locator('#root > div > div.products-page > div.products_hasilPencarianText__1iZWq > b')).toHaveText('Ikan');
   // await page.getByTestId('#root > div > div.products-page > div:nth-child(6) > div > div > div').evaluate(e => e.scrollTo +=100);
   // await expect(page.locator('#root > div > div.products-page > div.JumpToTopPage_jumpToTop__1G1ut.JumpToTopPage_withStickyVoucherGap__W5Fbg.JumpToTopPage_withoutBottomNav__3k_nO')).toBeInViewport();

});


test('Search Item Bumbu Ayam Bali on Category Landing Page', async ({page}) => {
    await LoginWithAccountNonCreatedOrder(page);
    await page.click('#root > div > div.AccountPage_page__2cKCW > div.footer_footer__1lZIc.width-control > div > div:nth-child(2) > div > a');
    await expect(page.locator('#searchbox > input')).toBeVisible();

    await page.click('#searchbox > input');
    await page.fill('#searchbox > input', 'Bumbu Ayam Bali');
    await expect(page.locator('#root > div > div.products-page > div.products_hasilPencarianText__1iZWq > b')).toHaveText('Bumbu Ayam Bali');
});

