import { Component, OnInit } from '@angular/core';
import { User } from "./../../models/user";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  value = 'Clear me'

  user = new User(99999, "User123", "password")
  submitted = false

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user); }

}
