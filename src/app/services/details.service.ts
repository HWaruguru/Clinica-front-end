import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DetailsService {

    // add api url here
    // APIUrl='https://clinicaappcci.herokuapp.com/app/api/';

    APIUrl='https://clinicaappcci.herokuapp.com/app/api/auth/login/';


    token="60585863b8b3fe17772390cd1aa03064701e8195"
  


  constructor(private http:HttpClient) { }

    // create new user==============>
    createUser(username: string,email: string, password: string) {
      return this.http.post(
        this.APIUrl + 'users/create/',
        {
          username: username,
          password: password,
          email: email,
          
        },
        
        // {
        //   headers: {
        //     Authorization: 'Token ' + this.token,
        //   },
        // }
      );
    }
 
        //  login user ==================>
    loginUser(username: string, password: string) {
      return this.http.post(
        this.APIUrl,
        {
          username: username,
          password: password,
        },
        // {
        //   headers: {
        //     Authorization: 'Token ' + this.token,
        //   },
        // }
      );
    }
}
