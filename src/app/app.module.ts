import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DriverComponent } from './driver/driver.component';
import { DriverService } from "./services/driver.service";

@NgModule({
  declarations: [
    AppComponent,
    DriverComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [DriverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
