import { Mascota } from "./mascota";

export interface Cliente {
    id: number | null;
    cedula: string;
    nombre: string;
    apellido: string;
    correo: string;
    celular: string;
    mascotas?: Mascota[];
}