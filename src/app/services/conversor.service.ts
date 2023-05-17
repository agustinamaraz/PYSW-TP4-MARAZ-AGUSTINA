import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {
  private urlEndPoint = "https://community-neutrino-currency-conversion.p.rapidapi.com/convert";

  constructor(private http: HttpClient) { }

  public convertir(cantidad: number, monedaFrom: string, monedaTo: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'd3d45d6a62msh0f8eacf6653a9f7p13a6a4jsn03d1499e1701',
          'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
        }
      )
    }
    const body = new HttpParams()
      .set('from-value', cantidad)
      .set('from-type', monedaFrom)
      .set('to-type', monedaTo);

    return this.http.post(this.urlEndPoint, body, httpOptions);
  }

  public getMonedas(): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders(
        {
          'X-RapidAPI-Key': '5ce7d3c811msh8789ac159f40c3ap14a059jsn879800f49f89',
          'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
        }
      )
    }

    return this.http.get("https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies",httpOptions);
  }

}
