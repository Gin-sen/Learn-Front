import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import exercise1 from '../../../assets/exercices/exercice1.json';
import {ExerciseInstructionComponent} from "../../pages/restrictedContent/exercise/exercise-instruction/exercise-instruction.component";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {TimeInterval} from "rxjs";

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
  player = new Audio("../../../assets/sound/ambiance-sonore-rues-de-paris-binaural.mp3");
  selectFormControl = new FormControl('', Validators.required);

  //calcul du score
  openedDialog : boolean;
  // @ts-ignore
  situations = exercise1[0].cas[0].situations;
  // @ts-ignore
  contexte = exercise1[0].cas[0].contexte;
  exoPoint : any[] = [];
  totalPoint = 0;
  responses: Response[] = [
    {value: '0', viewValue: 'La plus efficace'},
    {value: '1', viewValue: 'La deuxième plus efficace'},
    {value: '2', viewValue: 'La troisième plus efficace'},
    {value: '3', viewValue: 'La moins efficace'}
  ];
  choice: number[] = [
      0, 1, 2, 3
    ];
  startTime : Date | undefined;
  printDate: boolean;
  level: number;
  timerMin: number;
  timerSec: number;
  chrono: any;

  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    this.openedDialog = true;
    this.printDate = false;
    this.timerMin = 0;
    this.timerSec = 0;
    this.level = 1;
  }

  startChrono() {
    this.chrono = setInterval(()=> {
      this.timerMin = this.timerSec == 59 ? this.timerMin + 1 : this.timerMin;
      this.timerSec = this.timerSec == 59 ? 0 : this.timerSec + 1;
    }, 1000)
  }

  endChrono() {
    clearInterval(this.chrono);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.choice, event.previousIndex, event.currentIndex);
    console.log(this.choice);
  }

  openDialog() {
    this.player.pause();
    const dialogRef = this.dialog.open(ExerciseInstructionComponent,
      {
        data: {
          title: exercise1[0].title,
          consigne: exercise1[0].instruction,
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      this.openedDialog = false;
      if (result) {
        this.dealWithLevel(this.level);
      } else {
        this.router.navigate(['learn/exercises']);
      }
    });
  }

  dealWithLevel(level: any) {
    this.startTime = new Date();
    switch (level) {
      case 2:
        this.printDate = true;
        this.startChrono();
        break;
      case 3:
        this.player.play();
        break;
      case 4:
        this.player.play();
        this.printDate = true;
        this.startChrono();
        break;
      default:
        break;
    }
  }


  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.level = params.level !== undefined ? Number(params.level) : 1; // same as :username in route
    });
    console.log(this.level);
    this.openDialog();
  }

  ngOnDestroy(): void {
    console.log("quit");
    if (this.printDate) {
      this.endChrono();
    }
    this.player.pause();
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
