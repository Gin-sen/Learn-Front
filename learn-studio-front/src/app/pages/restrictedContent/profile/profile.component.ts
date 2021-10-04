import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profil: any;
  error: string | null;

  constructor(private userService: UserService, private router: Router) {
    this.error = null;
  }

  ngOnInit(): void {
    this.error = null;
    let resp = this.userService.userProfil();
    if (resp)
    {
      resp.subscribe(
        (data) => {
          console.log(data);
          this.profil = data;
        }, (error) => {
          console.log(error);
          this.error = "Lack token"
        }
      );
    } else {
      console.log("Lack token");
      this.error = "Lack token"
    }
  }

}
