import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.actionForm.value)
    console.log(this.actionForm.controls['numLikes'].value)
    console.warn(this.actionForm)
  }

}
