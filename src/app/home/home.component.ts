import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { Exchange, Rate } from '../models/exchange.model';
import { DataService } from '../services/data.service';

@Component({ 
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
   
        exchanges$: Exchange;
        rates$: Rate
        title = 'Exchange-Rates-Application';
        constructor( private dataService: DataService) { 
         
        }

    ngOnInit() {
        return this.dataService.getExchanges().subscribe(data => this.exchanges$ = data)
    
    }
}