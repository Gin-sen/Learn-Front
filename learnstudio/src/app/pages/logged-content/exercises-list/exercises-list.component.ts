import { Component, OnInit } from '@angular/core';
import {ExercisePreview} from '../../../model/exercise-preview';
import {newArray} from '@angular/compiler/src/util';
import {MatDialog} from '@angular/material/dialog';
import {ExerciseDetailComponent} from './exercise-detail/exercise-detail.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrls: ['./exercises-list.component.scss']
})
export class ExercisesListComponent implements OnInit {

  exercises: ExercisePreview[];

  constructor(public dialog: MatDialog, public router: Router) {
    // @ts-ignore
    this.exercises = [
      {
        id: 1,
        title: 'Un bureau bruyant',
        description: 'Dans cet exercice, vous vous abituerez à travailler dans un contexte de travail en bureau. En effet, vous serez peut-être ammmené à devoir travailler dans le bruit, et cet exercice vous permet de vous y abituer progressivement tout en mesurant votre progression.',
        category: 'Sensibilité sensorielle',
        durationMin: 5,
        durationMax: 120,
        imageLink: 'exercice-0.jpg',
        imageAlt: '',
        maitrise: 1,
      },
      {
        id: 2,
        title: 'Un sous-entendu agaçant',
        description: 'Dans cet exercice, vous allez devoir faire face à des sous-entendus, et réussir à en saisir au mieux le sens. En effet, peu importe votre contexte au travail, vous serez ammené a avoir des sous-entendus de la part de vos collègues, managers, ou employés. IL faut savoir y faire face.',
        category: 'Habiletés sociales',
        durationMin: 0,
        durationMax: 0,
        imageLink: 'exercice-1.jpg',
        imageAlt: '',
        maitrise: 1,
      },
      {
        id: 3,
        title: 'Oui, très cher.e ?',
        description: 'Dans cet exercice, vous habituerez aux expressions soutenues qui sont parfois alambiquées. Dans un contexte professionnel avec une chaine hierarchique, il est important d\'être à l\'aise avec ces formulations.',
        category: 'Communication et langage',
        durationMin: 0,
        durationMax: 0,
        imageLink: 'exercice-2.jpg',
        imageAlt: '',
        maitrise: 1,
      },
      {
        id: 4,
        title: 'Que dites-vous ?',
        description: 'Dans cet exercice, vous écouterez plusieurs messages vocaux, chacuns donnés avec des intonnations différentes. L\'objectif sera de comprendre quels sont les intentions de l\'interlocuteur en fonction de son ton.',
        category: 'Communication et langage',
        durationMin: 0,
        durationMax: 0,
        imageLink: 'exercice-3.jpg',
        imageAlt: '',
        maitrise: 1,
      },
      {
        id: 5,
        title: 'C\'est de l\'art abstrait ?',
        description: 'Dans cet exercice, vous allez devoir interpréter des expressions figurées quotidiennement utilisées par de nombreuses personnes. Parce qu\'il ne faut pas manger quelqu\'un qui est chocolat !',
        category: 'Communication et langage',
        durationMin: 0,
        durationMax: 0,
        imageLink: 'exercice-4.jpg',
        imageAlt: '',
        maitrise: 1,
      }
    ];
  }

  // constructor(public router: Router) { }

  ngOnInit(): void {

  }

  openDialog(index: number): void {
    this.dialog.open(ExerciseDetailComponent, {
      data: {
        id: this.exercises[index].id,
        name: this.exercises[index].title,
        description: this.exercises[index].description,
      }
    });
  }

}
