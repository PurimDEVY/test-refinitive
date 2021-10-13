import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public numForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.numForm = this.formBuilder.group({
      num: null
    });
  }

  onKeyAnswer(event: any) {

    var element = document.getElementById("num") as HTMLInputElement;
    if (element.value) {
      element.value = this.validateinput(element.value);
      console.log(element.value);
    }

  }
  validateinput(num: string) {
    console.log(num);
    var numRound = Math.round(parseFloat(num));
    return numRound.toString();

  }
}
