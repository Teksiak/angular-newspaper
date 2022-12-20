import { Component } from '@angular/core';
import { NewspaperService } from './newspaper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private _newspaperService: NewspaperService) {}
}
