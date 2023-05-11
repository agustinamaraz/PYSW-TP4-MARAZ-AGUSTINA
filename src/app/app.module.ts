import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CotizacionDivisasComponent } from './components/cotizacion-divisas/cotizacion-divisas.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortalMusicaComponent } from './components/portal-musica/portal-musica.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { HttpClientModule } from '@angular/common/http'
import { TrackService } from './services/track.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CotizacionDivisasComponent,
    FooterComponent,
    PortalMusicaComponent,
    HoroscopoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TrackService], //agregado
  bootstrap: [AppComponent]
})
export class AppModule { }
