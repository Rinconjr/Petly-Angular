import { Cliente } from "./cliente";
import { Tratamiento } from "./tratamiento";

export interface Mascota {
    id: number;
    nombre: string;
    raza: string;
    edad: number | null;
    peso: number | null;
    enfermedad: string | null;
    foto: string;
    estado: string;
    cliente: Cliente;
    tratamientos?: Tratamiento[];
}