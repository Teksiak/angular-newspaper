import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewspaperService {
  private data: any = {};

  constructor() { }

  public setData(data: any) {
    this.data = data.czasopisma
    console.log(this.data)
  }

  public getNewspapers(name: string, year: string) {
    let category = this.data[name]
    let newspapers = []
    for(const el of Object.keys(category)) {
      if(category[el] != "") {
        if(category[el]._attributes.rok == year) {
          newspapers.push(category[el])
        }
      }
    }
    console.log(newspapers)
    
    return newspapers
  }

  public getYear(name: string) {
    let arr: string[] = []

    arr = this.data.lata[name].split(",")
    return arr
  }

  public getNames() {
    const arr: {src: string, klik: string}[] = []

    for (const el of Object.keys(this.data.zmienne)) {
      arr.push(this.data.zmienne[el]);
    }
    return arr
  }

  // async getJSON() {
  //   return fetch('./assets/data.xml')
  //     .then((response) => response.text())
  //     .then((data) => {
  //       const temp = txml.parse(data);
  //       // @ts-ignore
  //       return txml.simplify(temp);
  //     });
  // }
}
