import { test,expect } from "@playwright/test";
export class Homepage{
/**
 * @param {import ('playwright').Page} page
 */
  constructor(page){
    this.page = page
    this.search = page.getByPlaceholder("Search for products, brands and more")
  }
  async home(name){
    await expect(this.search).toBeEditable()
   await this.search.fill(name)
   await this.page.keyboard.press("Enter")
  }
}