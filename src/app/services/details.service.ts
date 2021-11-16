import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DetailsService {

    // add api url here
    APIUrl='https://kitchen2030.herokuapp.com/api/latest-products/';

   

  constructor(private http:HttpClient) { }

    // create new user==============>
    createUser(username: string,email: string, password: string) {
      return this.http.post(
        this.APIUrl + 'users/create/',
        {
          username: username,
          password: password,
          email: email,
          
        }
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
        this.APIUrl + 'login/',
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
