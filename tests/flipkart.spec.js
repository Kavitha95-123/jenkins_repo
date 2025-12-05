import { test,expect } from '@playwright/test'
import { Homepage } from "../pom/home.page";
import { Phonepage } from "../pom/phone.page";
import { Addctarpage } from "../pom/addtocar.page";
import data  from '../testdata/data.json';
test('flipkart',async({browser})=>{
    //const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(data.url)
    await expect(page).toHaveURL('https://www.flipkart.com/')
    let Hpage = new Homepage(page)
    //await page.waitForTimeout(2000)
    await Hpage.home(data.name)
    //await page.waitForTimeout(3000)
     let Ppage = new Phonepage(page)
    const [newPage] = await Promise.all([
    context.waitForEvent('page'), 
    Ppage.phone.click()
  ]);
   //await page.waitForLoadState();
   //console.log('New tab title:', await newPage.title());
   let Apage = new Addctarpage(newPage)
   await Apage.add()
   await expect(page.getByText('Apple iPhone 16 (Black, 128 GB)')).toContainText('Apple iPhone 16 (Black, 128 GB)')
});
