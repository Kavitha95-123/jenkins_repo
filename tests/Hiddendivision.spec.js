import { test,expect } from "@playwright/test";
test('authentication',async({browser})=>{
    const context = await browser.newContext({
        httpCredentials:{
            username:'admin',
            password:'admin'
        }
    });
    const page = await context.newPage();
    await page.goto('https://demoapps.qspiders.com/ui/auth?sublist=0')
    await page.getByRole('link',{name:'Login'}).click()
    await page.screenshot({path:'screenshot/123.png',fullPage:true})
    await page.screenshot({path:'screenshot/viewport.png'})
})