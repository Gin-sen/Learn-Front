import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {
  exerciseId: number;

  constructor(private route: ActivatedRoute) {
    this.exerciseId = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.exerciseId = params.exercise; // same as :username in route
    });
  }

}
