import { RespuestaBase } from "./RespuestaBase";

export interface LoginOutModel extends RespuestaBase
{
    detalle:{
        rol: number, 
        correo: string
    }
    

    
}