import { test,expect } from "@playwright/test";
test.skip('buttons',async({page})=>{
    await page.goto ("https://demoapps.qspiders.com/ui/button?sublist=0")
    await page.waitForTimeout(2000)
    await page.locator("#btn").click()
})
test.skip('rightclick',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/button/buttonRight?sublist=1&scenario=2')
    await page.locator('//button[text()="Right Click"]').click({button:'right'})
    
});
test.skip('double click',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2')
    await page.locator('//button[text()="Yes"]').dblclick()
    await expect(await page.locator('//span[@class="text-green-600 p-1 px-2 ms-2 rounded-md"]')).toContainText('You selected "Yes"')
 //console.log(await page.locator('//span[@class="text-green-600 p-1 px-2 ms-2 rounded-md"]').textContent());

})
test.skip('submit click',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/button/buttonSubmit?sublist=3')
    await page.waitForTimeout(2000)
    await page.locator("#sat_a").check()
    await page.waitForTimeout(2000)
    await page.locator("#btn_abh").click()
    await page.waitForTimeout(2000)
    await expect(page.locator('//span[@class="text-green-600 p-1 px-2 rounded-md"]')).toContainText('You Selected "Yes"')

})
test.only('disabled',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4')
    await page.locator("#btn_abc").click()
   log(await expect(page.locator("#submit")).toBeDisabled())
})
