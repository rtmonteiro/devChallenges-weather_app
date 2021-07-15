import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardShowStatusComponent } from './components/card-show-status/card-show-status.component';

@NgModule({
  declarations: [
    AppComponent,
    CardShowStatusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
