import { Component } from '@angular/core';
import { Signo } from 'src/app/models/signo';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent {
  signos!:Array<any>;
  signo!:Signo;

  constructor(private horosocopoService:HoroscopoService) {



    //this.cargarSignos();
  }

  ngOnInit(): void {
  }
  
  cargarSignos(){
    this.horosocopoService.getSignos().subscribe(
      (result) => {
        this.signos = new Array<Signo>();
        result.forEach((signo: string) => {
          this.signo = new Signo();
          this.signo.nombre = signo;
          this.signos.push(this.signo)
;        });
          console.log(this.signos);
      },
      error => {alert("error en la peticion");}
    )
  }

}
