import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppRoutingModule} from '../../app-routing.module';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  register: boolean;
  login: boolean;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.register = false;
    this.login = false;
    this.route.queryParams.subscribe(params => {
      this.register = params.register !== undefined && params.register === 'true';
      this.login = params.login !== undefined && params.login === 'true';
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.register = params.register !== undefined && params.register === 'true';
      this.login = params.login !== undefined && params.login === 'true';
    });
  }

  openRegisterLogin(registerInput: boolean, loginInput: boolean): void {
    if (registerInput) {
      this.router.navigate(['/'], {queryParams: { register: !this.register }});
    } else if (loginInput) {
      this.router.navigate(['/'], {queryParams: { login: !this.login }});
    } else {
      this.router.navigate(['/']);
    }
  }





}
