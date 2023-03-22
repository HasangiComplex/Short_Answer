import { Component } from '@angular/core';

@Component({
  selector: 'app-validation-body',
  templateUrl: './validation-body.component.html',
  styleUrls: ['./validation-body.component.css']
})
export class ValidationBodyComponent {
  selectedOption2: any;
  constructor() {
    this.selectedOption2 = 'TextValidationComponent'; // Set the initial value of the selected option
  }


}
