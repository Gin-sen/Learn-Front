import {Skill} from './skill';

export class ExercisePreview {
  id: number;
  name: string;
  maitrise: number;
  description: string;
  imageLink: string;
  imageAlt: string;
  skills: Skill[];

  constructor(
    id: number,
    name: string,
    maitrise: number,
    description: string,
    imageLink: string,
    imageAlt: string,
    skills: Skill[]
  ) {
    this.id = id;
    this.name = name;
    this.maitrise = maitrise;
    this.description = description;
    this.imageLink = imageLink;
    this.imageAlt = imageAlt;
    this.skills = skills;
  }
}
