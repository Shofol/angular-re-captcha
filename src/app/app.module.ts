import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule, RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module, RecaptchaFormsModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RecaptchaModule,
    ReactiveFormsModule,
    RecaptchaV3Module,
    RecaptchaFormsModule
  ],
  providers: [{
    provide: RECAPTCHA_V3_SITE_KEY,
    useValue: environment.recaptcha.siteKey,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
