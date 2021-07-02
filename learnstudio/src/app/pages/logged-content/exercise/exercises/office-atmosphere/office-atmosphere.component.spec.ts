import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeAtmosphereComponent } from './office-atmosphere.component';

describe('OfficeAtmosphereComponent', () => {
  let component: OfficeAtmosphereComponent;
  let fixture: ComponentFixture<OfficeAtmosphereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeAtmosphereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeAtmosphereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
