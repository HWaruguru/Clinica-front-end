import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { DetailsService } from '../services/details.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
