
import { Component } from '@angular/core';

interface Set {
  dropdownValue: string;
  textboxValue: string;
  disableOptions: string[];
}

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent {
sets: Set[] = [];

  addSet() {
    const previousSet = this.sets[this.sets.length - 1];
    let disableOptions: string[] = [];
    if (previousSet) {
      disableOptions = previousSet.disableOptions.concat(previousSet.dropdownValue);
      // check if all options in previous dropdowns are disabled
      const allOptionsDisabled = disableOptions.length === 3;
      if (allOptionsDisabled) {
        return; // exit the method without adding a new set
      }
    }

    const newSet: Set = {
      dropdownValue: 'option1',
      textboxValue: '',
      disableOptions: disableOptions
    };

    this.sets.push(newSet);
  }


////////////////////////////////////////////////////////////


  removeSet(index: number) {
    this.sets.splice(index, 1);
  }

  onChange(set: Set) {
    const disableOptions: string[] = [];
    for (let i = 0; i < this.sets.length; i++) {
      if (i !== this.sets.indexOf(set)) {
        const previousSet = this.sets[i];
        disableOptions.push(previousSet.dropdownValue);
      }
    }

    set.disableOptions = disableOptions;
  }


}
