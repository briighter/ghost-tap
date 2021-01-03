import { Component, OnInit } from '@angular/core';
import { DriverService } from "./../driver.service";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {

  }

  buildDriver(): void {
  }

}
