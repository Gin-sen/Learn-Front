import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import jsonForm from '../../../assets/personnaliteV2.json'

@Component({
  selector: 'app-personality-form',
  templateUrl: './personality-form.component.html',
  styleUrls: ['./personality-form.component.scss']
})
export class PersonalityFormComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();

  questionList = jsonForm.questions;
  userAnswer: number[];
  type: any;

  constructor() {
    this.userAnswer = [];
    this.type = {};
  }

  ngOnInit(): void {
    jsonForm.questions.forEach(question => {
      this.userAnswer.push(3);
    })
  }



  printResult(): void {
    jsonForm.questions.forEach((question, index) => {
      if (!this.type[question.type]) {
        this.type[question.type] = question.answer[this.userAnswer[index]].point;
      } else {
        this.type[question.type] += question.answer[this.userAnswer[index]].point;
      }
    });
    console.log(this.type);
  }

}
