import { Program } from './program';

describe('Program', () => {
  it('should create an instance', () => {
    expect(new Program()).toBeTruthy();
  });
});
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './app.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});