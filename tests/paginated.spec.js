import {test,expect} from "@playwright/test";
test('paginated webtable',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    let rows = await page.locator('//h2[.="Pagination Web Table"]/..//table/tbody/tr').all()
    let num = 1;
    while(num<=4){
    await page.locator(`//ul[@class="pagination"]//a[.=${num}]`).click()
    await page.waitForTimeout(3000)
  for(let r of rows){
     console.log(await r.textContent());
    }
   num++;
}
});

 



