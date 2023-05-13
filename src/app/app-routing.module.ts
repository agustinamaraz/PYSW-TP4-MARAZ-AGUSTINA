import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizacionDivisasComponent } from './components/cotizacion-divisas/cotizacion-divisas.component';
import { PortalMusicaComponent } from './components/portal-musica/portal-musica.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { ConversionTextoAudioComponent } from './components/conversion-texto-audio/conversion-texto-audio.component';

const routes: Routes = [
  {
    path:'cotizacion-divisas',
    component: CotizacionDivisasComponent
  },
  {
    path:'portal-musica',
    component:PortalMusicaComponent
  },
  {
    path:'horoscopo',
    component: HoroscopoComponent
  },
  {
    path:'text-to-speech',
    component: ConversionTextoAudioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
