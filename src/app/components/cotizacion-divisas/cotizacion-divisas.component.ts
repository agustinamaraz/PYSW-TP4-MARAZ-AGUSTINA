import { Component } from '@angular/core';

@Component({
  selector: 'app-cotizacion-divisas',
  templateUrl: './cotizacion-divisas.component.html',
  styleUrls: ['./cotizacion-divisas.component.css']
})
export class CotizacionDivisasComponent {
  currencies:Array<any>;
  constructor() {
    this.currencies = [
      {name:'USD',img:'USD.png'},
      {name:'EUR',img:'eur.png'},
      {name:'GBP',img:'gb.png'}
    ]
   }

  ngOnInit(): void {
  }
}
