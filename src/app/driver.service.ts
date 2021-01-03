import { Injectable } from '@angular/core';
import { Builder } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor() {
    (async function buildDriver() {
      let driver = await new Builder().forBrowser('chrome').build();
      //your code inside this block
      console.log(driver)
    })();
  }

}
