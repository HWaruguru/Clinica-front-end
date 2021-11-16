import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DetailsService } from '../services/details.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private service: DetailsService) { }


  ngOnInit(): void {
  }

  showSuccessMessage = false;

    // create a new user
    onSubmit(form: NgForm) {
      const username = form.value.username;
      const email = form.value.email;
      const password = form.value.password;
      const c_password = form.value.c_password;

       // check if passwords match
   if (password !== c_password) {
    alert('Passwords do not match');
    return;
  }


}
