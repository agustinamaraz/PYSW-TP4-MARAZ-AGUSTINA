import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorTextoAudioService {

  constructor(private http: HttpClient) { }

  public convertir(texto: string, idioma: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'd3d45d6a62msh0f8eacf6653a9f7p13a6a4jsn03d1499e1701',
          'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
        }
      )
    }

    const body = new HttpParams()
      .set('text', texto)
      .set('voice_code', idioma)
      .set('speed', '1.00')
      .set('pitch', '1.00')
      .set('output_type', 'audio_url');

    return this.http.post("https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize", body, httpOptions);
  }

}
