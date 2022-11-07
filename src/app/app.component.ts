import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public reactiveForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required)
  });
  public log: string[] = [];


  constructor(private recaptchaV3Service: ReCaptchaV3Service) {
  }

  public executeRecaptchaV3() {
    if (!this.reactiveForm.valid) {
      return;
    }
    this.log.push(`Recaptcha v3 execution requested...`);
    this.recaptchaV3Service.execute('myAction').subscribe(
      (token) => {
        console.log('Recaptcha v3 token', token);
      },
      (error) => {
        this.log.push(`Recaptcha v3 error: see console`);
        console.log(`Recaptcha v3 error:`, error);
      }
    );
  }

  title = 're-captcha';
}
