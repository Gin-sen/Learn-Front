import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingPageComponent} from './pages/landing-page/landing-page.component';
import {ErrorPageComponent} from './pages/error-page/error-page.component';
import {NavigationBarComponent} from './pages/logged-content/navigation-bar/navigation-bar.component';
import {ProfileComponent} from './pages/logged-content/profile/profile.component';
import {ExercisesListComponent} from './pages/logged-content/exercises-list/exercises-list.component';
import {ExerciseComponent} from './pages/logged-content/exercise/exercise.component';


const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: 'learn', component: NavigationBarComponent},
  {path: 'learn/exercises', component: ExercisesListComponent},
  {path: 'learn/exercise/:exercise', component: ExerciseComponent},
  {path: 'learn/profile', component: ProfileComponent},
  {path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
