import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupStepOneComponent } from './singup-step-one.component';

describe('SingupStepOneComponent', () => {
  let component: SingupStepOneComponent;
  let fixture: ComponentFixture<SingupStepOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingupStepOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingupStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
