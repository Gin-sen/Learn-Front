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
    this.exercises = [];
  }

  // constructor(public router: Router) { }

  ngOnInit(): void {
    this.exercises.push(new ExercisePreview(-1, 'Test sonore', 4.5, 'Un test qui permet de définir les possibilités de concentration', '', '', []));
    this.exercises.push(new ExercisePreview(0, 'Présentation', 4.5, 'Et Epigonus quidem amictu tenus philosophus, ut apparuit, prece frustra temptata, sulcatis lateribus mortisque metu admoto turpi confessione cogitatorum socium, quae nulla erant, fuisse firmavit cum nec vidisset quicquam nec audisset penitus expers forensium rerum; Eusebius vero obiecta fidentius negans, suspensus in eodem gradu constantiae stetit latrocinium illud esse, non iudicium clamans. ', '', '', []));
    this.exercises.push(new ExercisePreview(1, 'test', 3, 'description', '', '', []));
    this.exercises.push(new ExercisePreview(2, 'test', 1, 'description', '', '', []));
    this.exercises.push(new ExercisePreview(3, 'test', 2, 'description', '', '', []));
    this.exercises.push(new ExercisePreview(4, 'test', 5, 'description', '', '', []));
    this.exercises.push(new ExercisePreview(5, 'test', 0, 'description', '', '', []));
    this.exercises.push(new ExercisePreview(6, 'test', 0, 'description', '', '', []));
    this.exercises.push(new ExercisePreview(7, 'test', 0, 'description', '', '', []));
    this.exercises.push(new ExercisePreview(8, 'test', 0, 'description', '', '', []));
    this.exercises.push(new ExercisePreview(9, 'test', 0, 'description', '', '', []));
    this.exercises.push(new ExercisePreview(10, 'test', 0, 'description', '', '', []));
    this.exercises.push(new ExercisePreview(11, 'test', 0, 'description', '', '', []));
  }

  openDialog(index: number): void {
    this.dialog.open(ExerciseDetailComponent, {
      data: {
        id: this.exercises[index].id,
        name: this.exercises[index].name,
        description: this.exercises[index].description,
      }
    });
  }

}
