import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPet1Component } from './form-pet1.component';

describe('FormPet1Component', () => {
  let component: FormPet1Component;
  let fixture: ComponentFixture<FormPet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPet1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
