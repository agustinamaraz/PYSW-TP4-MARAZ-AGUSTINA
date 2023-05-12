import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

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

    return this.http.get("https://horoscopes-ai.p.rapidapi.com/get_signs",httpOptions);
  }
  
  public getHoroscopo(signo:string,periodo:string): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'X-RapidAPI-Key': '48ec8965ecmshcdeb63d234df753p1ed300jsn308b4592f6ec',
          'X-RapidAPI-Host': 'horoscopes-ai.p.rapidapi.com'
        }
      )
    };
    return this.http.get("https://horoscopes-ai.p.rapidapi.com/get_horoscope/"+signo+"/"+periodo+"/general/es",httpOptions);
  }

  
}
