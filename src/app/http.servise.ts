import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IResult} from './IResult';
import {ICategory} from './ICategory';


@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getData(url: string): Observable<IResult[]> {
    return this.http.get(url)
      .map(response => {
        return <IResult[]>(response.json());
      });
  }

  getCategory(url: string): Observable<ICategory[]> {
    return this.http.get(url)
      .map(response => {
        return <ICategory[]>(response.json());
      });
  }
}
