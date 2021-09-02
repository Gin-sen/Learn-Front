import { Component, OnInit } from '@angular/core';
import fexo1 from '../../../../assets/exercices/exercice-1.json';
import {MatDialog} from '@angular/material/dialog';
import { ExerciseInstructionComponent } from './exercise-instruction/exercise-instruction.component';
import { FormControl, Validators } from '@angular/forms';

interface Response {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-exercice',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})

export class ExerciseComponent implements OnInit {

  selectFormControl = new FormControl('', Validators.required);
  
  //calcul du score
  situations = fexo1[0].exercice.cas[0].situations;
  contexte = fexo1[0].exercice.cas[0].contexte;
  exoPoint : any[] = [];
  totalPoint = 0;
  responses: Response[] = [
    {value: '0', viewValue: 'La plus efficace'},
    {value: '1', viewValue: 'La deuxième plus efficace'},
    {value: '2', viewValue: 'La troisième plus efficace'},
    {value: '3', viewValue: 'La moins efficace'}
  ];
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ExerciseInstructionComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  
  
  ngOnInit() {
  }

  checkResponse = (qNumber: Number, point: Number) => {
    var existing = 0;
    this.totalPoint = 0;

    for (var i = 0; i < this.exoPoint.length; i += 1) {
      if (qNumber == this.exoPoint[i][0]) {
        existing = 1;
        this.exoPoint[i][1] = point;
      }
    }
    if (existing == 0) {
      this.exoPoint.push([qNumber, point]);
    }
    for (var i = 0; i < this.exoPoint.length; i += 1) {
      this.totalPoint += this.exoPoint[i][1];
    }    
  }

}