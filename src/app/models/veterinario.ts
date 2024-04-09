import { Tratamiento } from "./tratamiento";

export interface Veterinario {
    id: number;
    cedula: string;
    nombre: string;
    apellido: string;
    contrasena: string;
    foto: string;
    especialidad: string;
    numAtenciones: number;
    estado: string;
    tratamientos?: Tratamiento[];
}