import { Tratamiento } from "./tratamiento";

export interface Droga {
    // Revisar si es necesario incluir lo del id aqui
    // id: number;

    nombre: string;
    precioCompra: number;
    precioVenta: number;
    unidadesDisponibles: number;
    unidadesVendidas: number;

    //Atributo tratamientos que es una lista de tipo Tratamiento
    tratamientos: Tratamiento[];
}