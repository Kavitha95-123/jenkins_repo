import { test,expect } from "@playwright/test";
export class Signupage{
/**
 * @param {import ('playwright').Page} page
 */
  constructor(page){
    this.page = page
    this.Fname = page.locator("#username")
    this.Email = page.locator("#email")
    this.Phno  = page.locator("#tel")
    //this.fax = page.locator("#fax")

  }

}