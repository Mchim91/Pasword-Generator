import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password ='';


  onChangeLength(value: any) {
    console.log(value.target.value)
    const parsedValue = parseInt(value.target.value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }

  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseLetters() {
     this.includeLetters = !this.includeLetters;
  }


  onButtonClick() {
    const numbers = '123456790';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
  }

  let generatedPassword = '';
  for (let i = 0; i < this.length; i++) {
    const index = Math.floor(Math.random() * validChars.length);
    generatedPassword += validChars[index];
  }
  this.password = generatedPassword;
 }
}
