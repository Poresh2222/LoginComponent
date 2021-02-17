import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongPasswordComponent } from './wrong-password.component';

describe('WrongPasswordComponent', () => {
  let component: WrongPasswordComponent;
  let fixture: ComponentFixture<WrongPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrongPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrongPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
