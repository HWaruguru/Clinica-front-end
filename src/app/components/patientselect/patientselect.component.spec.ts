import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientselectComponent } from './patientselect.component';

describe('PatientselectComponent', () => {
  let component: PatientselectComponent;
  let fixture: ComponentFixture<PatientselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
