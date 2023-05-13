import { Component } from '@angular/core';
import { ConversorTextoAudioService } from 'src/app/services/conversor-texto-audio.service';

@Component({
  selector: 'app-conversion-texto-audio',
  templateUrl: './conversion-texto-audio.component.html',
  styleUrls: ['./conversion-texto-audio.component.css']
})
export class ConversionTextoAudioComponent {
  idioma:string="";
  texto:string="";
  resultado!:any;

  constructor(private conversorService:ConversorTextoAudioService){}


  public convertir(){
    this.conversorService.convertir(this.texto,this.idioma).subscribe(
      (resultado)=>{
        //alert(result.result.audio_url);
        this.resultado = resultado.result.audio_url;
      },
      () => console.log("error")
    )
  }

}
