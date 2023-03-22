import { Component } from '@angular/core';

@Component({
  selector: 'app-number-validation',
  templateUrl: './number-validation.component.html',
  styleUrls: ['./number-validation.component.css']
})
export class NumberValidationComponent {
  selectedOption4: any;
  constructor() {
    this.selectedOption4 = 'IsNumberValidationComponent'; // Set the initial value of the selected option
  }

}
