import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { NewspaperService } from '../newspaper.service';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css']
})
export class DescComponent {
  @Input() public name: string = "";
  public years: string[] = []
  public year: string = ""
  constructor(private _newspaperService: NewspaperService) {

  }

  ngOnChanges(changes: SimpleChanges) {
    let prop: SimpleChange = changes['name']
    if(prop.currentValue != '') {
      this.years = this._newspaperService.getYear(this.name)
    }
  }

}
