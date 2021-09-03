import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  register: boolean;
  login: boolean;
  personality_form: boolean;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.register = false;
    this.login = false;
    this.personality_form = false;
    this.route.queryParams.subscribe(params => {
      this.register = params.register !== undefined && params.register === 'true';
      this.login = params.login !== undefined && params.login === 'true';
      this.personality_form = params.personality_form !== undefined && params.personality_form === 'true';
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.register = params.register !== undefined && params.register === 'true';
      this.login = params.login !== undefined && params.login === 'true';
    });
  }

  click_login(): void {
    !this.login ? this.router.navigate(['/'], {queryParams: { login: true }}) : this.router.navigate(['/']);
  }

  click_register(): void {
    !this.register ? this.router.navigate(['/'], {queryParams: { register: true }}) : this.router.navigate(['/']);
  }

  click_personality_form(): void {
    !this.personality_form ? this.router.navigate(['/'], {queryParams: { personality_form: true }}) : this.router.navigate(['/']);

  }

}
