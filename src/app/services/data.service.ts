import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apUrl = 'https://api.nbp.pl/api/exchangerates/tables/a/last/5/?format=json';

  constructor(private _http: HttpClient) { }

  getExchanges() {

    return this._http.get(this.apUrl);
  }
}
