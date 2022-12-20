import { Component } from '@angular/core';
import { NewspaperService } from '../newspaper.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css'],
})
export class ChoiceComponent {
  public currentNewspaper: string = '';
  public names: { src: string; klik: string }[] = [];

  constructor(private _newspaperService: NewspaperService) {}

  public goBack() {
    this.currentNewspaper = '';
  }

  ngOnInit() {
    setTimeout(() => {
      this.names = this._newspaperService.getNames();
    }, 100)
  }

  public setCurrent(name: string) {
    this.currentNewspaper = name;
  }
}
