import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Growth } from 'src/app/classes/growth';
import { Immunisation } from 'src/app/classes/immunisation';
import { AuthapiService } from 'src/app/services/authapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 isDoctor: boolean =  true;
  
  ngOnInit(): void {
  }

}
