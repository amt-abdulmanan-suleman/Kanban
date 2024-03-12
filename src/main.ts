// /// <reference types="@angular/localize" />
// import '@angular/localize/init'
// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

import { createCustomElement } from "@angular/elements";
import { createApplication } from "@angular/platform-browser"
import { InputComponent } from "./app/input/input.component";

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

(
  async() => {
    const app = await createApplication({
      providers: []
    });
    const inputElement = createCustomElement(InputComponent, {
      injector: app.injector
    });
    customElements.define('dbs-input', inputElement)
  }
)()