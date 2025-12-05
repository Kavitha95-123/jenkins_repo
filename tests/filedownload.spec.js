import { test,expect } from "@playwright/test";
test('download',async({page})=>{
    const fullpath = "C:\Users\Kavitha\Desktop\RESUME\Kavitha GS Updated.pdf"
    await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    await page.getByPlaceholder('Enter text here').fill('the downloaded file')
    const [downloadfile]=await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button',{name:'Download'}).click()

    ]);
    console.log(fullpath);
    await downloadfile.saveAs(fullpath)
});