import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title= 'Clinica'

  constructor(private router: Router) { }

  currentUserValue() {
    return localStorage.getItem('currentUser') || false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/login');
  }

  ngOnInit(): void {
  }

}
