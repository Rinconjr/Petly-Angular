import { Mascota } from "./mascota";

export interface Cliente {
    // Revisar si es necesario incluir lo del id aqui
    // id: number;

    cedula: string;
    nombre: string;
    apellido: string;
    correo: string;
    celular: string;

    // Atributo mascotas que es una lista de tipo Mascota
    //TODO: por ahora dejar asi
    //mascotas: Mascota[];
}