import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import jsonForm from '../../../assets/personnaliteV2.json'

@Component({
  selector: 'app-personality-form',
  templateUrl: './personality-form.component.html',
  styleUrls: ['./personality-form.component.scss']
})
export class PersonalityFormComponent implements OnInit {
  @Output() close = new EventEmitter<boolean>();

  questionListByFive: number[];
  questionList = jsonForm.questions;
  userAnswer: number[];
  type: any;
  result: boolean;

  constructor() {
    this.userAnswer = [];
    this.questionListByFive = [];
    this.type = {};
    this.result = false;
  }

  ngOnInit(): void {
    jsonForm.questions.forEach(question => {
      this.userAnswer.push(3);
    });
    for(let i = 0; i < 10; i++) {
      this.questionListByFive.push(i*5);
    }
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
    this.result = true;
  }

  closeResult(){
    this.result = false;
    this.close.emit();
  }

}
