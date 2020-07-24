import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JokeCardComponent, JokeParentComponent } from './components/';
import { JokeApiService } from './services/joke-api.service';

@NgModule({
  declarations: [
    AppComponent,
    JokeCardComponent,
    JokeParentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [JokeApiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
