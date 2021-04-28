import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPetComponent } from './form-pet.component';

describe('FormPet1Component', () => {
  let component: FormPetComponent;
  let fixture: ComponentFixture<FormPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
