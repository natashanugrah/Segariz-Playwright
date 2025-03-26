// npx playwright test e2e/monkey_testing.spec.js --headed --project=webkit 
// npx playwright test e2e/monkey_testing.spec.js --headedless
// npx playwright codegen

import {test, expect} from '@playwright/test';
import { LoginWithAccountNonCreatedOrder } from './login';

test('Monkey Testing Click Homepage', async ({page}) => {
    await LoginWithAccountNonCreatedOrder(page);
    await page.click('#root > div > div.AccountPage_page__2cKCW > div.footer_footer__1lZIc.width-control > div > div:nth-child(1) > div > a');
    await expect(page.locator('#searchbox > input')).toBeVisible();
})

test('Monkey Testing Click Kategori', async ({page}) => {
    await LoginWithAccountNonCreatedOrder(page);
    await page.click('#root > div > div.AccountPage_page__2cKCW > div.footer_footer__1lZIc.width-control > div > div:nth-child(2) > div > a');
    await expect(page.locator('#searchbox > input')).toBeVisible();
    await page.click('#root > div > div.CategoriesDrawer_categoriesDrawer__3CV5C.CategoriesDrawer_showDrawer__1suXE > div.CategoriesDrawer_closeBtn__31wfZ');
   
    await page.getByRole('button', { name: 'Unggas' }).nth(1).click();

    // L1 Kategori Sayuran
    await page.click('#root > div > div.CategoriesPage_categories-page__S2XNF.CategoriesPage_showedBottomNav__1BKP- > div:nth-child(2) > div.CategoriesPage_subcategoryColumn__1iyDe.CategoriesPage_offsetByFooter__1uXWZ > button:nth-child(2) > span > span');
    await page.click ('#root > div > div.CategoriesPage_categories-page__S2XNF.CategoriesPage_showedBottomNav__1BKP- > div:nth-child(2) > div.CategoriesPage_subcategoryColumn__1iyDe.CategoriesPage_offsetByFooter__1uXWZ > button.CategoriesPage_activeSubcategoryItem__1mMUQ > span > span');
    await page.click('#root > div > div.CategoriesPage_categories-page__S2XNF.CategoriesPage_showedBottomNav__1BKP- > div:nth-child(2) > div.CategoriesPage_subcategoryColumn__1iyDe.CategoriesPage_offsetByFooter__1uXWZ > button:nth-child(4) > span > span');
    await page.click('#root > div > div.CategoriesPage_categories-page__S2XNF.CategoriesPage_showedBottomNav__1BKP- > div:nth-child(2) > div.CategoriesPage_subcategoryColumn__1iyDe.CategoriesPage_offsetByFooter__1uXWZ > button:nth-child(5) > span > span');
    await page.click('#root > div > div.CategoriesPage_categories-page__S2XNF.CategoriesPage_showedBottomNav__1BKP- > div:nth-child(2) > div.CategoriesPage_subcategoryColumn__1iyDe.CategoriesPage_offsetByFooter__1uXWZ > button.CategoriesPage_activeSubcategoryItem__1mMUQ > span > span');
    await page.click('#root > div > div.CategoriesPage_categories-page__S2XNF.CategoriesPage_showedBottomNav__1BKP- > div:nth-child(2) > div.CategoriesPage_subcategoryColumn__1iyDe.CategoriesPage_offsetByFooter__1uXWZ > button:nth-child(7) > span > span');

    await page.click('#root > div > div.CategoriesPage_categories-page__S2XNF.CategoriesPage_showedBottomNav__1BKP- > div.CategoriesPage_categoriesGroup__-ESCm.width-control > div > div.CategoriesCarousel_allCatBtn__HDVX1 > div > div.CategoriesCarousel_allCatBtnLabel__huhVN', {timeout: 6000});
    await page.click('#root > div > div.CategoriesDrawer_categoriesDrawer__3CV5C.CategoriesDrawer_showDrawer__1suXE > div.CategoriesDrawer_categoriesGroup__2A-e7.CategoriesDrawer_navbarShowed__3hPRc > button:nth-child(6) > div.CategoryItem_catBtnLabel__2XCgf > div > span');
   
})

test('Monkey Testing Click Keranjang', async ({page}) => {
    await LoginWithAccountNonCreatedOrder (page);
    await page.click('#root > div > div.AccountPage_page__2cKCW > div.footer_footer__1lZIc.width-control > div > div:nth-child(4) > div > a');
    await expect(page.locator('#root > div > form > div:nth-child(1) > div > div > div > div:nth-child(1) > div')).toHaveText('Keranjang');
});

test('Monkey Testing Click Produk Favorite From Cart', async ({page}) => {
    await LoginWithAccountNonCreatedOrder (page);
    await page.click('#root > div > div.AccountPage_page__2cKCW > div.footer_footer__1lZIc.width-control > div > div:nth-child(4) > div > a');
    await page.click('#root > div > form > div:nth-child(1) > div > div > div > div.Header_rightHeader__1MC_L > div > a');
    await expect(page.locator('#root > div > div:nth-child(2) > div.DetailsHeader_detailsHdr__3QWBZ.DetailsHeader_detailsHdrStyleV2__2LUe4.width-control > div.DetailsHeader_detailsHdrTitleV2__1eB-H > span')).toHaveText('Produk Favorit');
});

