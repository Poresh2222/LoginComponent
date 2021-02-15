import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupStepThreeComponent } from './singup-step-three.component';

describe('SingupStepThreeComponent', () => {
  let component: SingupStepThreeComponent;
  let fixture: ComponentFixture<SingupStepThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingupStepThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingupStepThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
