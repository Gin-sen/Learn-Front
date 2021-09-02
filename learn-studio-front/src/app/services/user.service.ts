import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  userRegister(userName: string, firstName: string, lastName: string, email: string, password: string): void {
    const body = {
      username : userName,
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password
    };
    console.log(body);
    this.http.post( '/api/users', body, this.optionRequete).subscribe(
      (data) => {
        console.log(data);
      }, (error) => {
        console.log(error);
      }
    );
  }
}
