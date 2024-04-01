import { Tratamiento } from "../tratamiento/tratamiento";

export interface Veterinario {
    // Revisar si es necesario incluir lo del id aqui
    // id: number;

    cedula: string;
    nombre: string;
    apellido: string;
    contrasena: string;
    foto: string;
    especialidad: string;
    numAtenciones: number;
    estado: string;

    // Atributo tratamientos que es una lista de tipo Tratamiento
    tratamientos: Tratamiento[];
}