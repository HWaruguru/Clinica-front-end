import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Immunisation } from 'src/app/classes/immunisation';
import { AuthapiService } from 'src/app/services/authapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  immunizations: Immunisation[] = []
  constructor(private service: AuthapiService, private router: Router) { }

  fetchImmunizations() {
    this.service.getImmunizations().subscribe(
      (response: any) => {
        console.log(response)
        response.forEach((item: any) => {
          this.immunizations.push(
            new Immunisation(
              item.vaccine, item.brand_name, item.batch_number, item.drug_expiry,
              item.date_given)
          )
        });
      }
    );
  }

  ngOnInit(): void {
    this.fetchImmunizations()
  }

}
