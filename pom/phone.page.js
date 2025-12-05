import { test,expect } from "@playwright/test";
export class Phonepage{
/**
 * @param {import ('playwright').Page} page
 */
  constructor(page){
    this.page = page
    this.phone = page.locator('//div[text()="Apple iPhone 14 (Starlight, 128 GB)"]')
    
  }}
