import { test,expect } from "@playwright/test";
test('redbus',async({page})=>{
    await page.goto('https://www.abhibus.com/')
    //await page.getByRole('textbox',{name:"Leaving From"}).fill('Hyderabad')
    await page.locator()
    await page.keyboard.type('Banglore')
    let sugg = await page.locator('.autoFill autosuggest-ul rdc-src').allInnerTexts()
    console.log(sugg)
    
})