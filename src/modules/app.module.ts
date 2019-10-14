import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {TimeAgoPipe} from 'time-ago-pipe';
import {DatePipe} from '../utils/pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../components/root/app.component';
import NewsContentComponent from '../components/news-content/news-content.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsContentComponent,
    TimeAgoPipe,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
