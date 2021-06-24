import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetClinicComponent } from './pet-clinic.component';

describe('PetClinicComponent', () => {
  let component: PetClinicComponent;
  let fixture: ComponentFixture<PetClinicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetClinicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetClinicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
