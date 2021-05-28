import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClickOutsideModule } from 'ng-click-outside';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RegisterComponent } from './pages/auth-component/register/register.component';
import { LoginComponent } from './pages/auth-component/login/login.component';
import { NavigationBarComponent } from './pages/logged-content/navigation-bar/navigation-bar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { ProfileComponent } from './pages/logged-content/profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExercisesListComponent } from './pages/logged-content/exercises-list/exercises-list.component';





@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ErrorPageComponent,
    RegisterComponent,
    LoginComponent,
    NavigationBarComponent,
    ProfileComponent,
    ExercisesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClickOutsideModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
