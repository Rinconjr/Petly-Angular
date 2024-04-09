import { Droga } from "./droga";
import { Mascota } from "./mascota";
import { Veterinario } from "./veterinario";

export interface Tratamiento {
    id: number;
    fecha: string;
    veterinario: Veterinario;
    mascota: Mascota;
    drogaT: Droga;
}