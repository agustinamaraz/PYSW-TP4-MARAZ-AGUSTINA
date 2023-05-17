import { Component } from '@angular/core';
import { Track } from 'src/app/models/track';
import { TrackService } from 'src/app/services/track.service';

@Component({
  selector: 'app-portal-musica',
  templateUrl: './portal-musica.component.html',
  styleUrls: ['./portal-musica.component.css']
})
export class PortalMusicaComponent {
  track!: Track;
  ids: Array<number>;
  tracks: Array<Track>;

  constructor(private trackService: TrackService) { //inyeccion2

    this.ids = [1109739, 1915471137, 2248693817, 1741494317, 1765692557, 72544949];

    this.tracks = new Array<Track>();

    this.getTrack();
  }

  ngOnInit(): void {

  }

  getTrack() {

    this.ids.forEach(id => {

      this.trackService.getTrack(id).subscribe(
        (result) => {

          this.track = new Track();

          this.track.title = result.title;
          this.track.artist = result.artist.name;
          this.track.preview = result.preview;
          this.track.picture = result.artist.picture_medium;

          this.tracks.push(this.track);

          //console.log(this.track);
        },
        () => console.log("error")
      );

    });
  }

}
