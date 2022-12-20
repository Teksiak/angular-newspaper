import { Component } from '@angular/core';
import { NewspaperService } from './newspaper.service';
import { HttpClient } from '@angular/common/http';
import * as txml from 'txml/dist/txml';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public currentNewspaper: string = '';
  public names: { src: string; klik: string }[] = [];

  constructor(
    private _newspaperService: NewspaperService,
    private http: HttpClient
  ) {
    // const params = new HttpParams().set('zmienna', 'wartosc')
    this.http.get('./assets/data.xml', { responseType: 'text' }).subscribe(
      (data) => {
        const temp = txml.parse(data);
        // @ts-ignore
        this._newspaperService.setData(txml.simplify(temp));
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

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
