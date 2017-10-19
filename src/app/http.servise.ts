import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IResult} from './IResult';
import {IBody} from "./IBody";


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
}
