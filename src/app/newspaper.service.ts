import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as txml from 'txml/dist/txml';

@Injectable({
  providedIn: 'root'
})
export class NewspaperService {
  private data: any = {};

  constructor(
    private http: HttpClient
  ) {
    // const params = new HttpParams().set('zmienna', 'wartosc')
    this.http.get('./assets/data.xml', { responseType: 'text' }).subscribe(
      (data) => {
        const temp = txml.parse(data);
        // @ts-ignore
        this.setData(txml.simplify(temp));
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
  public checkName(name: string) {
    const names = this.getNames()
    for(const el of names) {
      if(el.klik == name) {
        return true;
      }
    }
    return false;
  }

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
}
