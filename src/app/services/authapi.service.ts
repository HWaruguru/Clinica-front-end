import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthapiService {
  // add api url here
  // APIUrl='https://clinicaappcci.herokuapp.com/app/api/';

  APIUrl = 'http://127.0.0.1:8000';

  token = '60585863b8b3fe17772390cd1aa03064701e8195';

  constructor(private http: HttpClient) {}
  loginUser(username: string, password: string) {
    return this.http.post(this.APIUrl + '/app/api/auth/login/', {
      username: username,
      password: password,
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
}
