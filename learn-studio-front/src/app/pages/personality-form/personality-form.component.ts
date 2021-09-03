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

  constructor() { }

  ngOnInit(): void {
  }

}
