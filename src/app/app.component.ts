import { Component } from '@angular/core';
import * as txml from 'txml/dist/txml';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = "WOjtrek"
  public images: string[]
  constructor() {
    this.images = []
  }
  async ngOnInit() {
    const data: any = await this.getJSON()
    console.log(data)

    for(const el of Object.keys(data.czasopisma.zmienne)) {
      this.images.push(data.czasopisma.zmienne[el].src)
    }
  }
  async getJSON() {
    return fetch("./assets/data.xml")
    .then(response => response.text())
    .then(data => {
      const temp = txml.parse(data)
      // @ts-ignore
      return txml.simplify(temp)
    })
}
}
