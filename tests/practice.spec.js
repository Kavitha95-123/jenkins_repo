import { test,expect } from "@playwright/test";
test('amazon',async({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.getByRole('link',{name:"Today's Deals"}).click()
    await page.locator('//img[@class="a-amazon-image ProductCardImage-module__image_SU6C7KYJpko3vQ2fK7Kf"]').first().click()
    await page.locator("#buy-now-button").click()
    //await page.waitForEvent(2000)
    await page.locator("#ap_email_login").fill('kavithasriram59@gmail.com')
})




