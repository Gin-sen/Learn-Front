import {Component, Inject, Input, OnInit} from '@angular/core';
import exercice1 from '../../../../../assets/exercices/exercice1.json';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

export interface DialogData {
  title: string;
  consigne: string;
}

@Component({
  selector: 'app-exercise-instruction',
  templateUrl: './exercise-instruction.component.html',
  styleUrls: ['./exercise-instruction.component.scss']
})
export class ExerciseInstructionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
