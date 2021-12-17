import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KennedyComponent } from './kennedy.component';

describe('KennedyComponent', () => {
  let component: KennedyComponent;
  let fixture: ComponentFixture<KennedyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KennedyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KennedyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
