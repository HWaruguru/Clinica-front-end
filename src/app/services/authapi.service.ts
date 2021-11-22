import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthapiService {
  // add api url here
  
  

  APIUrl = 'https://clinicacci-k.herokuapp.com';

  token = '60585863b8b3fe17772390cd1aa03064701e8195';

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

  // immunization=================>
  getImmunizations() {
    return this.http.get(this.APIUrl + '/app/api/vaccine/', {
      headers: {
        "Authorization": `Token ${localStorage.getItem('currentUser')}`,
      }
    });
  }

  // growth================>>
  getGrowth() {
    return this.http.get(this.APIUrl + '/app/api/growth/', {
      headers: {
        "Authorization": `Token ${localStorage.getItem('currentUser')}`,
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

  
}
