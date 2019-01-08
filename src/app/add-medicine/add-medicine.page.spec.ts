import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedicinePage } from './add-medicine.page';

describe('AddMedicinePage', () => {
  let component: AddMedicinePage;
  let fixture: ComponentFixture<AddMedicinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedicinePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedicinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
