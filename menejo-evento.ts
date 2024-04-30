import { NaveEspacial } from './nave-espacial';
import { Evento } from './eventos';

export function manejarEvento(nave: NaveEspacial, evento: Evento) {
    console.log(`Evento recibido: ${evento.evento}`);
    console.log(`Efecto: ${evento.efecto}`);
   
    nave.salud = 10; 

    console.log(`Salud de la nave: ${nave.salud}`);
    console.log(`Capacidad de carga de la nave: ${nave.capacidadCarga}`);
    console.log(`Velocidad de la nave: ${nave.velocidad}`);
}
