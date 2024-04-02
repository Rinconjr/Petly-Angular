import { Droga } from "./droga";
import { Veterinario } from "./veterinario";

export interface Tratamiento {
    // Revisar si es necesario incluir lo del id aqui
    // id: number;

    fecha: string; // revisar si es mejor string o date o number

    // atributo veterinario de tipo Veterinario
    veterinario: Veterinario;

    // atributo drogaT de tipo Droga
    drogaT: Droga;
}