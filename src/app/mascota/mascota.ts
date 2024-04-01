import { Cliente } from "../cliente/cliente";
import { Tratamiento } from "../tratamiento/tratamiento";

export interface Mascota {
    // Revisar si es necesario incluir lo del id aqui
    // id: number;

    nombre: string;
    raza: string;
    edad: number;
    peso: number;
    enfermedad: string; // Revisar si es opcional o no para especidfiacarlo aqui
    foto: string;
    estado: string;

    // Atributo cliente que es de tipo Cliente
    cliente: Cliente;

    // Atributo tratamientos que es una lista de tipo Tratamiento
    tratamientos: Tratamiento[];
}