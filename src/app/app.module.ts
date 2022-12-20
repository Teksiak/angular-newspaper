import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DescComponent } from './desc/desc.component';
import { NewspaperService } from './newspaper.service';
import { NewspapersComponent } from './newspapers/newspapers.component';
import { ChoiceComponent } from './choice/choice.component';

@NgModule({
  declarations: [
    AppComponent,
    DescComponent,
    NewspapersComponent,
    ChoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: APP_INITIALIZER, useFactory: () => () => null, deps: [NewspaperService], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
