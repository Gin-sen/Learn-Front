import { Component, OnInit } from '@angular/core';
import fexo1 from '../../../../../assets/exercices/exercice-1.json';
import {MatDialog} from '@angular/material/dialog';




@Component({
  selector: 'app-exercise-instruction',
  templateUrl: './exercise-instruction.component.html',
  styleUrls: ['./exercise-instruction.component.scss']
})
export class ExerciseInstructionComponent implements OnInit {
  consigne = fexo1[0].exercice.instruction;
  title = fexo1[0].exercice.title;
  constructor() { }

  

  ngOnInit(): void {
  }

}
