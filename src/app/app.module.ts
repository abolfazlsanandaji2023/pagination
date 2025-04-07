import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetClassDirective } from './test/set-class.directive';
import { TimeRefDirective } from './time-ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    SetClassDirective,
    TimeRefDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
