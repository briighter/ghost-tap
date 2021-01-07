import { Injectable } from '@angular/core';
import { Builder } from "selenium-webdriver";
@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(public builder: Builder) {

  }

}



