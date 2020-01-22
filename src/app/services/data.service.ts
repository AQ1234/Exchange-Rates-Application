import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exchange } from '../models/exchange.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apUrl = 'http://api.nbp.pl/api/exchangerates/tables/a/last/5/?format=json';

  constructor(private _http: HttpClient) { }

  getExchanges() {

    return this._http.get<Exchange>(this.apUrl);
  }
}
