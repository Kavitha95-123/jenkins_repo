import { test,expect } from "@playwright/test";
test('sigup form',async({page})=>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=844E2A4BED840E7BC7DC1B687B928FD6')
    await page.waitForTimeout(3000)
});