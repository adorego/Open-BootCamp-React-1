import { CONNECTION } from "./Connection.enum";

export class Contacto{
    nombre = '';
    apellido = '';
    email = '';
    conectado = CONNECTION.disconnected;
    constructor(nombre, apellido, email, conectado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }   
}