import { Mascota } from "../mascota/mascota";

export interface Cliente {
    // Revisar si es necesario incluir lo del id aqui
    // id: number;

    cedula: string;
    nombre: string;
    apellido: string;
    correo: string;
    celular: string;

    // Atributo mascotas que es una lista de tipo Mascota
    mascotas: Mascota[];
}