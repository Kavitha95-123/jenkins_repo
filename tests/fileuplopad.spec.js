import { test,expect } from "@playwright/test";
test('file upload',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/fileUpload?sublist=0')
    await page.getByPlaceholder('What is your name?').fill('kavitha')
    await page.getByPlaceholder('Tell us your email id').fill('kavitha123@gmail.com')
    await page.getByPlaceholder('Minimum 6 characters').fill('kavitha@123456')
    await page.getByPlaceholder('Enter Your Mobile Number').fill('9743265728')
    await page.locator("#city").selectOption("Bangalore")
    await page.waitForTimeout(2000)
    await page.locator("#resume").setInputFiles("C:/Users/Kavitha/Desktop/RESUME/Kavitha GS Updated.pdf")

})