import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityFormResultComponent } from './personality-form-result.component';

describe('PersonalityFormResultComponent', () => {
  let component: PersonalityFormResultComponent;
  let fixture: ComponentFixture<PersonalityFormResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalityFormResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityFormResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
