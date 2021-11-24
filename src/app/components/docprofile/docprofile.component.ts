import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Growth } from 'src/app/classes/growth';
import { Immunisation } from 'src/app/classes/immunisation';
import { AuthapiService } from 'src/app/services/authapi.service';

@Component({
  selector: 'app-docprofile',
  templateUrl: './docprofile.component.html',
  styleUrls: ['./docprofile.component.css']
})
export class DocprofileComponent implements OnInit {
  immunizations: Immunisation[] = []
  growth: Growth[] = []
  currentUser: any
  showMessage: boolean = false
  constructor(private service: AuthapiService, private router: Router) { }

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

  saveImmunization(form: NgForm) {
    this.showMessage = false;
    const vaccine = form.value.vaccine;
    const brand = form.value.brand;
    const batch = form.value.batch;
    const expiry = form.value.expiry;
    const dateGiven = form.value.dateGiven;
    const appointmentDate = form.value.appointmentDate;
    this.service.saveImmunization(vaccine, brand, batch, expiry, dateGiven, appointmentDate, this.currentUser.user_id).subscribe(
      (response: any) => {
        this.showMessage = true;
        console.log(`fetchPatient: ${response}`)
      }
    );
  }

  saveGrowth(form: NgForm) {
    this.showMessage = false;
    const age = form.value.age;
    const weight = form.value.weight;
    const height = form.value.height;
    const HO = form.value.HO;
    const date = form.value.date;
    this.service.saveGrowth(age, weight, height, HO, date, this.currentUser.user_id).subscribe(
      (response: any) => {
        this.showMessage = true;
        console.log(`fetchPatient: ${response}`)
      }
    );
  }

  saveHistory(form: NgForm) {
    this.showMessage = false;
    const history = form.value.history;
    const medication = form.value.medication;
    const date = form.value.date;
    this.service.saveHistory(history, medication, date, this.currentUser.user_id).subscribe(
      (response: any) => {
        this.showMessage = true;
        console.log(`fetchPatient: ${response}`)
      }
    );
  }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.fetchImmunizations()
    this.fetchgrowth()
  }

}
