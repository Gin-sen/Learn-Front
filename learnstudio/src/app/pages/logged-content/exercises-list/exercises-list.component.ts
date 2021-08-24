import { Component, OnInit } from '@angular/core';
import {ExercisePreview} from '../../../model/exercise-preview';
import {newArray} from '@angular/compiler/src/util';
import {MatDialog} from '@angular/material/dialog';
import {ExerciseDetailComponent} from './exercise-detail/exercise-detail.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrls: ['./exercises-list.component.scss']
})
export class ExercisesListComponent implements OnInit {

  exercises: ExercisePreview[];

  constructor(public dialog: MatDialog, public router: Router) {
    // @ts-ignore
    this.exercises = [
      {
        id: 1,
        title: 'Mise en situation',
        description: 'Dans cet exercice, vous allez devoir vous projeter dans différentes situations afin de déterminer quelle est a meilleure et la moin bonne attitude possible face à une situation qui peut vous arriver dans un contexte professionnel. C\'est à vous de faire preuve de discernement pour coisir la proposition.',
        category: 'Sensibilité sensorielle',
        durationMin: 5,
        durationMax: 120,
        imageLink: './assets/exercices/exercice-1.jpg',
        imageAlt: '',
        maitrise: 1,
      }
    ];
  }

  // constructor(public router: Router) { }

  ngOnInit(): void {

  }

  openDialog(index: number): void {
    this.dialog.open(ExerciseDetailComponent, {
      data: {
        id: this.exercises[index].id,
        name: this.exercises[index].title,
        description: this.exercises[index].description,
      }
    });
  }

}
