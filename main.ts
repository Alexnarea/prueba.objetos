import * as readline from 'readline';
import { NaveEspacial } from './nave-espacial';
import { Evento } from './eventos';
import { explorar } from './exploracion';
import { recolectarRecursos } from './recolecion-recursos';
import { manejarEvento } from './menejo-evento';
import { Planeta, Recurso } from './planeta';

export async function ejecutarSimulador() {
    console.log('Bienvenido al simulador de exploración espacial');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    function capturarEntradaUsuario(): Promise<string> {
        return new Promise((resolve) => {
            rl.question('Por favor, ingresa tu acción: ', (answer) => {
                resolve(answer);
            });
        });
    }

    const accionUsuario = await capturarEntradaUsuario();
    console.log('Acción del usuario:', accionUsuario);

    switch (accionUsuario.toLowerCase()) {
        case 'explorar':
            explorar('Sur');
            break;
        case 'recolectar':
            const planeta = new Planeta(Recurso.Agua, 'Agua recolectada');
            const recursosPlaneta = recolectarRecursos(planeta);
            console.log('Recursos recolectados:', recursosPlaneta);
            break;
        case 'evento':
            const eventoAleatorio = new Evento('Tormenta espacial', 'La nave sufre daños menores por la tormenta');
            manejarEvento({ salud: 100, capacidadCarga: 50, velocidad: 200 }, eventoAleatorio);
            break;
        default:
            console.log('Acción no reconocida');
    }

    rl.close();
}

ejecutarSimulador();
