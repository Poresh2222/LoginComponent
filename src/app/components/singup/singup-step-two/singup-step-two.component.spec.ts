import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupStepTwoComponent } from './singup-step-two.component';

describe('SingupStepTwoComponent', () => {
  let component: SingupStepTwoComponent;
  let fixture: ComponentFixture<SingupStepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingupStepTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingupStepTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
