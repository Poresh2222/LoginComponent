import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  constructor() { }

  _stepNumber: number = 0;
  @Input()
  set stepNumber(value: number){
    this._stepNumber = value;
  }

  get stepNumber(){
    return this._stepNumber;
  }

  ngOnInit(): void {
  }

}
