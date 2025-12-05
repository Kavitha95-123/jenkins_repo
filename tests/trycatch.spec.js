import { test,expect} from "@playwright/test";
test('try and catch',async({page})=>{
    try {
        await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=CBA684A1FAE34412F757FC05A04E7B20')
        //console.log("browser launched succesfully")
        await page.locator('//input[@name="use"]').fill('john')
        await page.locator('//input[@name="password"]').fill('demo')
        await page.getByRole('button', { name: 'Log In' }).click();
    
        //console.log("login button is clicked")
    } catch (error) {
         console.log("❌ Error occurred:" + error);
         //
    }

});