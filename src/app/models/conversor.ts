export class Conversor {
    cantidad:number;
    monedaFrom:string;
    monedaTo:string;
    resultado:string;

    constructor(cantidad:number=0,monedaAConvertir:string="", monedaTo:string="",resultado:string=""){
        this.cantidad = cantidad;
        this.monedaFrom = monedaAConvertir;
        this.monedaTo = monedaTo;
        this.resultado = resultado;
    }
}
