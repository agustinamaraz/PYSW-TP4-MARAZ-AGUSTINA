import { Component } from '@angular/core';
import { Horoscopo } from 'src/app/models/horoscopo';
import { Signo } from 'src/app/models/signo';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent {
  signos:Array<Signo>;
  //signo!:Signo;
  horoscopo!:Horoscopo;

  constructor(private horosocopoService:HoroscopoService) {
    this.horoscopo = new Horoscopo();
    this.signos=[
      {nombre:'aries',img:'tauro.jpg'},
      {nombre:'taurus',img:'tauro.jpg'},
      {nombre:'gemini',img:'leo.jpg'},
      {nombre:'cancer',img:'capri.jpg'},
      {nombre:'leo',img:'leo.jpg'},
      {nombre:'virgo',img:'virgo.jpg'},
      {nombre:'libra',img:'aries.jpg'},
      {nombre:'scorpio',img:'tauro.jpg'},
      {nombre:'sagittarius',img:'virgo.jpg'},
      {nombre:'capricorn',img:'capri.jpg'},
      {nombre:'aquarius',img:'virgo.jpg'},
      {nombre:'pisces',img:'leo.jpg'}
    ]

    //this.cargarSignos();
  }

  ngOnInit(): void {
  }
  
  // cargarSignos(){
  //   this.horosocopoService.getSignos().subscribe(
  //     (result) => {
  //       //this.signos = new Array<Signo>();
  //       result.forEach((signo: string) => {
  //         this.signo = new Signo();
  //         this.signo.nombre = signo;
  //         this.signos.push(this.signo)
  //       });
  //         console.log(this.signos);
  //     },
  //     error => {alert("error en la peticion");}
  //   )
  // }


  public mostrarHoroscopo(signo:string, periodo:string){
    this.horosocopoService.getHoroscopo(signo,periodo).subscribe(
      (result) => {
        
        this.horoscopo = new Horoscopo();

        this.horoscopo.signo = result.sign;

        if(result.period == "monthly"){
          this.horoscopo.periodo = "MES";
        }else{
          this.horoscopo.periodo = "HOY";
        }
        
        this.horoscopo.descripcion = result.general;

        
      },
      error => {
        alert("Error en la petición");
      }
    )

  }

}
