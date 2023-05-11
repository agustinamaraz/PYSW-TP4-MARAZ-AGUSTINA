import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track } from '../models/track';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private urlEndPoint: string = "https://deezerdevs-deezer.p.rapidapi.com/track/";

  constructor(private http:HttpClient) { //inyeccion
  }

  // public getTracks():Observable<any>{
  //   const httpOptions = {
  //   headers: new HttpHeaders({
  //     'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com', 
  //     'X-RapidAPI-Key': '48ec8965ecmshcdeb63d234df753p1ed300jsn308b4592f6ec'
  //     })
  //   };
  //   return this.http.get(this.urlEndPoint, httpOptions);
  // }

  public getTrack(id:number):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com', 
        'X-RapidAPI-Key': '48ec8965ecmshcdeb63d234df753p1ed300jsn308b4592f6ec'
        })
      };
      return this.http.get(this.urlEndPoint+id,httpOptions);
  }
   

}
