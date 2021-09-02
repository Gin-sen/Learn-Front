import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiseEnSituationComponent } from './mise-en-situation.component';

describe('MiseEnSituationComponent', () => {
  let component: MiseEnSituationComponent;
  let fixture: ComponentFixture<MiseEnSituationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiseEnSituationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiseEnSituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
