import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DescComponent } from './desc/desc.component';
import { NewspaperService } from './newspaper.service';
import { NewspapersComponent } from './newspapers/newspapers.component';

@NgModule({
  declarations: [
    AppComponent,
    DescComponent,
    NewspapersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewspaperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
