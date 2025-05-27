import { RespuestaBase } from "./RespuestaBase";

export class LoginOutModel extends RespuestaBase{
    rol : number = 0;
    usuario: string = "";

    constructor(rol: number, usuario: string, codigoRespuesta: number, descripcionRespuesta: string)
    {
        super(codigoRespuesta, descripcionRespuesta);
        this.rol = rol;
        this.usuario = usuario;
    }
}