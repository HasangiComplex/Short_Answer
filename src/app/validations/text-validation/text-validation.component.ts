import { Component } from '@angular/core';

@Component({
  selector: 'app-text-validation',
  templateUrl: './text-validation.component.html',
  styleUrls: ['./text-validation.component.css']
})
export class TextValidationComponent {
  selectedOption3: any;
  constructor() {
    this.selectedOption3 = 'IsStringValidationComponent'; // Set the initial value of the selected option
  }


}
