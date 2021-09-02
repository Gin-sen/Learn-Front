import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import exercice1 from '../../../assets/exercices/exercice1.json';
import {ExerciseInstructionComponent} from "../../pages/restrictedContent/exercise/exercise-instruction/exercise-instruction.component";

interface Response {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-mise-en-situation',
  templateUrl: './mise-en-situation.component.html',
  styleUrls: ['./mise-en-situation.component.scss']
})
export class MiseEnSituationComponent implements OnInit {

  selectFormControl = new FormControl('', Validators.required);

  //calcul du score
  // @ts-ignore
  situations = exercice1[0].cas[0].situations;
  // @ts-ignore
  contexte = exercice1[0].cas[0].contexte;
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
