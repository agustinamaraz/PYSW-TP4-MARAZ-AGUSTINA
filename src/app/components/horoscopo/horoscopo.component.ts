import { Component } from '@angular/core';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent {
  signos!:Array<any>;

  constructor() { 

  }

  ngOnInit(): void {
  }
}
