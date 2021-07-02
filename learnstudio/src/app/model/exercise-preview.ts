import {Skill} from './skill';

export class ExercisePreview {
  id: number;
  title: string;
  description: string;
  imageLink: string;
  imageAlt: string;
  durationMin: number;
  durationMax: number;
  category: string;
  maitrise: number;


  constructor(
    id: number,
    name: string,
    category: string,
    description: string,
    imageLink: string,
    imageAlt: string,
    durationMin: number,
    durationMax: number,
    maitrise: number,
  ) {
    this.id = id;
    this.title = name;
    this.category = category;
    this.description = description;
    this.imageLink = imageLink;
    this.imageAlt = imageAlt;
    this.durationMax = durationMax;
    this.durationMin = durationMin;
    this.maitrise = maitrise;
  }
}
