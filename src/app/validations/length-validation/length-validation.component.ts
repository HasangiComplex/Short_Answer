import { Component } from '@angular/core';

@Component({
  selector: 'app-length-validation',
  templateUrl: './length-validation.component.html',
  styleUrls: ['./length-validation.component.css']
})
export class LengthValidationComponent {
  selectedOption5: any;
  constructor() {
    this.selectedOption5 = 'MaxLengthValidationComponent'; // Set the initial value of the selected option
  }

  option2Disabled = false;

  onOptionClick(event: Event) {
    const optionElement = event.target as HTMLOptionElement;
    if (optionElement.value === 'MaxLengthValidationComponent') {
      this.option2Disabled = true;
    }
   else if (optionElement.value === 'MinLengthValidationComponent') {
      this.option2Disabled = true;
    }
   else if (optionElement.value === 'BetweenLengthValidationComponent') {
      this.option2Disabled = true;
    }
  }
}
