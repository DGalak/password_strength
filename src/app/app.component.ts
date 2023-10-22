import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fb: FormBuilder){}

  form: FormGroup = this.fb.group({
    form_password: ['',[Validators.required]]
  });

  section1 = 'gray';
  section2 = 'gray';
  section3 = 'gray';

  checkPassword(password: string) {
    if (password.length === 0) {
      this.section1 = 'gray';
      this.section2 = 'gray';
      this.section3 = 'gray';
    } else if (password.length < 8) {
      this.section1 = 'red';
      this.section2 = 'red';
      this.section3 = 'red';
    } else {
      const hasLetters = /[a-zA-Z]/.test(password);
      const hasDigits = /\d/.test(password);
      const hasSymbols = /[!@#$%^&*]/.test(password);

      if (hasLetters && hasDigits && hasSymbols) {
        this.section1 = 'green';
        this.section2 = 'green';
        this.section3 = 'green';
      } else if ((hasLetters && hasSymbols) || (hasLetters && hasDigits) || (hasDigits && hasSymbols)) {
        this.section1 = 'yellow';
        this.section2 = 'yellow';
        this.section3 = 'gray';
      } else {
        this.section1 = 'red';
        this.section2 = 'gray';
        this.section3 = 'gray';
      }
    }
  }
}
