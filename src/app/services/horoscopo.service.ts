import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  private urlEndPoint:string = "https://horoscopes-ai.p.rapidapi.com/get_horoscope/%7Bsign%7D/%7Bperiod%7D/general/es/";

  constructor(private http:HttpClient) { }

  public getSignos():Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders(
        {
          'X-RapidAPI-Key': '48ec8965ecmshcdeb63d234df753p1ed300jsn308b4592f6ec',
          'X-RapidAPI-Host': 'horoscopes-ai.p.rapidapi.com'
        }
      )
    }

    return this.http.get(this.urlEndPoint,httpOptions);
  }
  
  public getHoroscopo(signo:string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'X-RapidAPI-Key': '48ec8965ecmshcdeb63d234df753p1ed300jsn308b4592f6ec',
          'X-RapidAPI-Host': 'horoscopes-ai.p.rapidapi.com'
        }
      )
    };
    return this.http.get(this.urlEndPoint+signo,httpOptions);
  }

  
}
