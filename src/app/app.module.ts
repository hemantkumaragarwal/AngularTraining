import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {WelcomeComponent} from './welcome.component';
import {AppHeaderComponent} from './app-header.component';
import {HomeComponent} from './home.component';


@NgModule({
  imports:      [
    BrowserModule
  ],
  declarations: [
    AppHeaderComponent,
    WelcomeComponent,
    HomeComponent
  ],
  bootstrap:    [
    HomeComponent
    ]
})
export class AppModule { }
