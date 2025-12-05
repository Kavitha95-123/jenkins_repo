import { test,expect } from "@playwright/test";
let url ='https://demoapps.qspiders.com/ui?scenario=4'


test('register page',async({page})=>{
    await page.goto(url)
    await page.getByPlaceholder("Enter your name").fill('kavitha')
    await page.getByPlaceholder("Enter Your Email").fill('kavithasriram590@gmail.com')
    await page.getByPlaceholder("Enter your password").fill('Taksh@12340')
    //await page.getByRole('button',{name:'Submit'}).click()
    await page.getByText('Register').nth(1).click()
})
test('register page1',async({page})=>{
    await page.goto(url)
    await page.waitForTimeout(3000)
    await page.locator('//li[text()="Without placeholder"]').click()
    await page.waitForTimeout(3000)
    await page.locator("#name").fill("Taksh")
    await page.locator("#email").fill("kavithasriram12345@gmail.com")
    await page.locator("#password").fill("kavitha@123")
    // await page.getByRole('button',{name: 'Submit' }).click()
    await page.getByText('Register').nth(1).click()
    
})
test('Disabled elements',async({page})=>{
    await page.goto(url)
     await page.waitForTimeout(3000)
    await page.locator('//li[text()="Disabled"]').click();
    console.log(await page.locator("#name").isEnabled());
    await page.waitForTimeout(3000)
})
