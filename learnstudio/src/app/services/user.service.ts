import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public APIEndpoint = environment.APIEndpoint;

  constructor(private http: HttpClient) { }

  userRegister(firstName: string, lastName: string, email: string, password: string): void {
    const body = {
      username : firstName + ' ' + lastName,
      email,
      password
    };
    console.log(body);
    this.http.post( this.APIEndpoint + '/users', body).subscribe(
      (data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      }
    );
  }
}
