import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { NewspaperService } from '../newspaper.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newspapers',
  templateUrl: './newspapers.component.html',
  styleUrls: ['./newspapers.component.css']
})
export class NewspapersComponent {
  @Input() public name: string = "";
  @Input() public year: string = "";
  public newspapers: any = []

  constructor(private _newspaperService: NewspaperService) {
   }

  ngOnChanges(changes: SimpleChanges) {
    let prop: SimpleChange = changes['year']
    if(prop.currentValue != '') {
      this.newspapers = this._newspaperService.getNewspapers(this.name, this.year)
    }
  }
}
