import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { nodeName } from 'jquery';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  actionForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    numLikes: new FormControl('')
  })

  // Cleaning
  formNumLikes = this.actionForm.controls['numLikes'].value

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Run: protractor conf.js
    console.log(this.actionForm.value)
    console.log(this.actionForm.controls['username'].value)
    console.log(this.actionForm.controls['password'].value)
    console.log(this.actionForm.controls['numLikes'].value)
    
  }

}
