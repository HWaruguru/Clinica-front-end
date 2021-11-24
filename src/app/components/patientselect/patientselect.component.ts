import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthapiService } from 'src/app/services/authapi.service';

@Component({
  selector: 'app-patientselect',
  templateUrl: './patientselect.component.html',
  styleUrls: ['./patientselect.component.css']
})
export class PatientselectComponent implements OnInit {
  patients: any
  selectedPatient: any
  constructor(private service: AuthapiService, private router: Router) { }

  fetchPatients() {
    this.service.getAllPatients().subscribe(
      (response: any) => {
        console.log(`fetchPatients: ${response}`)
        this.patients = response;
      }
    );
  }

  fetchPatient(form: NgForm) {
    const user = form.value.user_id;
    this.service.getPatient(user.id).subscribe(
      (response: any) => {
        console.log(`fetchPatient: ${response}`)
        this.selectedPatient = response;
        localStorage.setItem('currentUser', JSON.stringify(response));
      }
    );
  }

  ngOnInit(): void {
    if (!this.selectedPatient) {
      this.fetchPatients()
    }
  }

}
