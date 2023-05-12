export class Horoscopo {
    signo:string;
    periodo:string;
    descripcion:string;
    
    constructor(signo:string="",periodo:string="",descripcion:string=""){
        this.signo = signo;
        this.periodo = periodo;
        this.descripcion = descripcion;
    }
}
