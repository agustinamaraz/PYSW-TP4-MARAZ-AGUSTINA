export class Track {
    idTrack:number;
    title:string;
    artist!:string;
    preview!:string;
    picture:string;

    constructor(idTrack:number=0,title:string="",artist:string="",preview:string="",picture:string=""){
        this.idTrack = idTrack;
        this.title = title;
        this.artist = artist;
        this.preview = preview;
        this.picture = picture;
    }
    
}
