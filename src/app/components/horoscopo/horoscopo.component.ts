import { Component } from '@angular/core';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent {
  signos!:Array<any>;

  constructor(private horosocopoService:HoroscopoService) { 

  }

  ngOnInit(): void {
  }

  
}
