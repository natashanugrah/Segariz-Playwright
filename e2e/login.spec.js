// Run on all driver (firefox, chrome, and webkit): npx playwright test e2e/login.spec.js --headed

import {test, expect} from '@playwright/test';
import { LoginWithAccountNonCreatedOrder } from './login';

test.only('Login to Your Account - Non Ordered Yet', async ({page}) => {
    await LoginWithAccountNonCreatedOrder(page);
});