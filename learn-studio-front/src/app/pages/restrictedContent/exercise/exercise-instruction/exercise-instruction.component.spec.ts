import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseInstructionComponent } from './exercise-instruction.component';

describe('ExerciseInstructionComponent', () => {
  let component: ExerciseInstructionComponent;
  let fixture: ComponentFixture<ExerciseInstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseInstructionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
