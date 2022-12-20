import { Component, Input, SimpleChange, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { NewspaperService } from '../newspaper.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.css']
})
export class DescComponent {
  @Input() public name: string = "";
  @Output() currentNewspaper = new EventEmitter()
  public years: string[] = []
  public year: string = ""

  constructor(private _newspaperService: NewspaperService, private route: ActivatedRoute, private router: Router) {
    const name = this.route.snapshot.paramMap.get("name")
    const year = this.route.snapshot.paramMap.get("year")
    if(name != null) {
      this.name = name

      setTimeout(() => {
        if(!this._newspaperService.checkName(this.name)) {
          this.router.navigateByUrl(`/`)
        }
        else {
          this.years = this._newspaperService.getYear(this.name)
          if(year != null) {
            this.year = year
            const newspapers = this._newspaperService.getNewspapers(this.name, this.year)
            if(newspapers.length == 0) {
              this.router.navigateByUrl(`/${this.name}`)
            }
          }
        }
      }, 100)
    }
  }

  public goBack() {
    this.router.navigateByUrl(`/`)
    this.currentNewspaper.emit("")
  }

  ngOnChanges(changes: SimpleChanges) {
    let prop: SimpleChange = changes['name']
    if(prop.currentValue != '') {
      this.years = this._newspaperService.getYear(this.name)
    }
  }

}
