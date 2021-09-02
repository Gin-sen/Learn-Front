import { Component, OnInit } from '@angular/core';
import exercice1 from '../../../../../assets/exercices/exercice1.json';

@Component({
  selector: 'app-exercise-instruction',
  templateUrl: './exercise-instruction.component.html',
  styleUrls: ['./exercise-instruction.component.scss']
})
export class ExerciseInstructionComponent implements OnInit {
  consigne = exercice1[0].instruction;
  title = exercice1[0].title;

  constructor() { }

  ngOnInit(): void {
  }

}
