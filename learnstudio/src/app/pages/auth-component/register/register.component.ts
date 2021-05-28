import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  lastNameFormControl = new FormControl('', [
    Validators.required
  ]);

  firstNameFormControl = new FormControl('', [
    Validators.required
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  public hide: boolean;


  constructor(private router: Router, private userService: UserService) {
    this.hide = true;
  }

  ngOnInit(): void {
  }

  register(): void {
    // tslint:disable-next-line:max-line-length
    if (!this.lastNameFormControl.invalid && !this.firstNameFormControl.invalid && !this.emailFormControl.invalid && !this.passwordFormControl.invalid) {
      this.userService.userRegister(
        this.firstNameFormControl.value,
        this.lastNameFormControl.value,
        this.emailFormControl.value,
        this.passwordFormControl.value);

      // this.router.navigate(['/'], {queryParams: { login: true }});
    }
  }

}
