import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Growth } from 'src/app/classes/growth';
import { Immunisation } from 'src/app/classes/immunisation';
import { AuthapiService } from 'src/app/services/authapi.service';

@Component({
  selector: 'app-patientprofile',
  templateUrl: './patientprofile.component.html',
  styleUrls: ['./patientprofile.component.css']
})
export class PatientprofileComponent implements OnInit {

  immunizations: Immunisation[] = []
  growth: Growth[] = []
  currentUser: any
  historys: any
  constructor(private service: AuthapiService, private router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser)
  }

  fetchImmunizations() {
    this.service.getImmunizations(this.currentUser.user_id).subscribe(
      (response: any) => {
        console.log(`fetchImmunizations: ${response}`)
        response.forEach((item: any) => {
          this.immunizations.push(
            new Immunisation(
              item.vaccine, item.brand_name, item.batch_number, item.drug_expiry,
              item.date_given, item.next_appointment)
          )
        });
      }
    );
  }

  fetchgrowth() {
    this.service.getGrowth(this.currentUser.user_id).subscribe(
      (response: any) => {
        console.log(`fetchgrowth: ${response}`)
        response.forEach((item: any) => {
          this.growth.push(
            new Growth(item.age, item.height, item.weight, item.HO, item.date)
          )
        });
      }
    );
  }

  fetchHistory() {
    this.service.getHistory(this.currentUser.user_id).subscribe(
      (response: any) => {
        console.log(`fetchHistory: ${response}`)
        this.historys= response;
      }
    );
  }

  ngOnInit(): void {
    this.fetchImmunizations()
    this.fetchgrowth()
  }

}
