import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthapiService } from '../../services/authapi.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:  AuthapiService, private router:Router) { }

  // message;

  ngOnInit(): void {
  }

  loginUser(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.service.loginUser(email, password).subscribe(
      (response)=>{
        console.log(response);

        this.router.navigateByUrl('/home');
      },

      (error) => {
        console.log(error);
      }
    );
  }

}