import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthapiService {
  APIUrl = 'https://clinicacci-k.herokuapp.com';
  // APIUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}
  loginUser(username: string, password: string) {
    return this.http.post(this.APIUrl + '/app/api/auth/login/', {
      username: username,
      password: password,
    });
  }

  getToken(username: string, password: string) {
    return this.http.post(this.APIUrl + '/api-auth/', {
      username: username,
      password: password,
    });
  }

  getImmunizations(user_id: number) {
    return this.http.get(`${this.APIUrl}/app/api/vaccine/?user_id=${user_id}`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem('token')}`,
      }
    });
  }

  getGrowth(user_id: number) {
    return this.http.get(`${this.APIUrl}/app/api/growth/?user_id=${user_id}`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem('token')}`,
      }
    });
  }

  getHistory(user_id: number) {
    return this.http.get(`${this.APIUrl}/app/api/medicalhistory/?user_id=${user_id}`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem('token')}`,
      }
    });
  }

  getAllPatients() {
    return this.http.get(this.APIUrl + '/app/api/users/', {
      headers: {
        "Authorization": `Token ${localStorage.getItem('token')}`,
      }
    });
  }

  getPatient(user_id: number) {
    return this.http.get(`${this.APIUrl}/app/api/users/?user_id=${user_id}`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem('token')}`,
      }
    });
  }

  saveImmunization(vaccine: string, brand: string, batch: string, expiry: string, dateGiven: string, appointmentDate: string, user_id: number) {
    return this.http.post(`${this.APIUrl}/app/api/vaccine/`,
    {"patient": user_id, "vaccine": vaccine,
      "brand_name": brand, "batch_number": batch,
      "drug_expiry": expiry, "next_appointment": appointmentDate,
      "date_given": dateGiven},
    {
      headers: {
        "Authorization": `Token ${localStorage.getItem('token')}`,
      }
    });
  }

  saveGrowth(age: number, weight: number, height: number, HO: number, date: string, user_id: number) {
    return this.http.post(`${this.APIUrl}/app/api/growth/`,
    {"patient": user_id, "age": age,
      "weight": weight, "height": height,
      "HO": HO, "date": date,},
    {
      headers: {
        "Authorization": `Token ${localStorage.getItem('token')}`,
      }
    });
  }

  saveHistory(history: string, medication: string, date: string, user_id: number) {
    return this.http.post(`${this.APIUrl}/app/api/medicalhistory/`,
    {"patient": user_id, "disease_history": history, "doctor_recommendation": medication, "date": date,},
    {
      headers: {
        "Authorization": `Token ${localStorage.getItem('token')}`,
      }
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  currentUserValue() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  registerUser(
    username: string,
    password: string,
    email: string,
    first_name: string,
    last_name: string
  ) {
    return this.http.post(this.APIUrl + '/app/api/users/create/', {
      username: username,
      password: password,
      email: email,
      first_name: first_name,
      last_name: last_name,
    });
  }

  getMessage(phone: string,) {
    return this.http.post(this.APIUrl + '/app/api/send-message/', {
      phone: phone
    });
  }

}
