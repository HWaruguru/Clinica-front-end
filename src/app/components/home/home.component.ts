import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 isDoctor: boolean =  false;
  
  checkIfIsDoctor() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser.isDoctor) {
      this.isDoctor = true
    }
  }
  ngOnInit(): void {
    this.checkIfIsDoctor();
  }

}
