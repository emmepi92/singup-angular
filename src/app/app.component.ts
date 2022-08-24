import { Component, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() pass: string = '';

  public passwordInput: string = 'password';

  //helper pass
  public passIsWriting: boolean = false;
  public is8Chars: boolean = false;
  public is1CharUp: boolean = false;
  public is1CharDown: boolean = false;
  public is1Num: boolean = false;
  public is1SpecialDigit: boolean = false;
  public passComplete: boolean = false;

  //passwordInput is the input's type, it can be only 'password' or 'text'
  toggleShowPass = () =>
    this.passwordInput == 'password'
      ? (this.passwordInput = 'text')
      : (this.passwordInput = 'password');


  passWriting(pass: NgModel) {
    this.passIsWriting = true;
    this.pass = pass.value;
    const has8Chars = new RegExp('^.{8,32}$');
    const has1CharUp = new RegExp('.*[A-Z].*');
    const ha1CharDown = new RegExp('.*[a-z].*');
    const has1Num = new RegExp('.*[0-9].*');
    const has1SpecialDigit = new RegExp('.*[\\*\\!@#$%^&+=].*');
    this.is8Chars = has8Chars.test(this.pass);
    this.is1CharUp = has1CharUp.test(this.pass);
    this.is1CharDown = ha1CharDown.test(this.pass);
    this.is1Num = has1Num.test(this.pass);
    this.is1SpecialDigit = has1SpecialDigit.test(this.pass);

    this.passComplete = [this.is8Chars, this.is1CharUp, this.is1CharDown, this.is1Num, this.is1SpecialDigit].every(x => x == true);
  }

  signup(form: NgForm): void {
    //here you have your inputs' value
    console.log(form.value)
  }
}
