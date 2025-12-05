import { test,expect} from "@playwright/test";
test.skip('javascript popup',async({page})=>{
    await page.goto('https://demoapps.qspiders.com/ui/alert?sublist=0')
   page.on('dialog',async dialog=>{
   console.log(await dialog.type());
   console.log(await dialog.message());
   await page.waitForTimeout(3000)
   await dialog.dismiss()

   });
    await page.locator('//tbody/tr[1]/td/input').check()
    await page.getByRole('button',{name:'Delete'}).click()
});