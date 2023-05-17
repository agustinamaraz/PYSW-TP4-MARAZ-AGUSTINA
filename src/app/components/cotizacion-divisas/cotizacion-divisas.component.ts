import { Component } from '@angular/core';
import { Conversor } from 'src/app/models/conversor';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-cotizacion-divisas',
  templateUrl: './cotizacion-divisas.component.html',
  styleUrls: ['./cotizacion-divisas.component.css']
})
export class CotizacionDivisasComponent {
  conversor!: Conversor;
  currencies: Array<any>;
  monedas!: Array<any>;

  constructor(private conversorService: ConversorService) {
    this.conversor = new Conversor();
    this.monedas = new Array<any>();
    this.currencies = [
      { name: 'USD', img: 'USD.png' },
      { name: 'EUR', img: 'eur.png' },
      { name: 'GBP', img: 'gb.png' }
    ]
  }

  ngOnInit(): void {
  }

  public obtenerMonedas(){
    this.conversorService.getMonedas().subscribe(
      (result)=>{
        result.forEach((element:any) => {
          
        });
      },
      error => {
        alert("Error");
      }
    )
  }

  public convertir() {
    this.conversorService.convertir(this.conversor.cantidad, this.conversor.monedaFrom, this.conversor.monedaTo).subscribe(
      (result) => {
        this.conversor.resultado = result.result;
        //alert(result.result);
      },
      () => console.log("error")
    )
  }

}
