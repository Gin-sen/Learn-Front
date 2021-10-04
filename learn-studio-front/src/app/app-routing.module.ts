import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";
import {NavigationBarComponent} from "./pages/restrictedContent/navigation-bar/navigation-bar.component";
import {ProfileComponent} from "./pages/restrictedContent/profile/profile.component";
import {ExercisesListComponent} from "./pages/restrictedContent/exercises-list/exercises-list.component";
import {ExerciseComponent} from "./pages/restrictedContent/exercise/exercise.component";
import {PersonalityFormComponent} from "./pages/personality-form/personality-form.component";
import {PersonalityFormResultComponent} from "./pages/personality-form/personality-form-result/personality-form-result.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'personality_form', component: PersonalityFormComponent},
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
