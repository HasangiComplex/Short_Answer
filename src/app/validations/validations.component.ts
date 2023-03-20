
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent {
  @Input() data: any;

  selectedOption2: any;
  constructor() {
    this.selectedOption2 = 'NumberValidationComponent'; // Set the initial value of the selected option
  }




}
