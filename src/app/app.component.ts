import { Component, OnInit } from '@angular/core';
import { Exchange, Rate } from './exchange.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  exchanges$: Exchange;
  rates$: Rate;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    return this.dataService.getExchanges().subscribe(data => this.exchanges$ = data)

  }

}
