export class RespuestaBase 
{
    codigoRespuesta: number;
    descripcionRespuesta : string;

    constructor(codigoRespuesta: number, descripcionRespuesta: string) {
    this.codigoRespuesta = codigoRespuesta;
    this.descripcionRespuesta = descripcionRespuesta;
  }
}