import * as readline from 'readline';
import { NaveEspacial } from './nave-espacial';
import { Evento } from './eventos';
import { capturarEntradaUsuario } from './usuario';

export async function ejecutarSimulador() {
    console.log('Bienvenido al simulador de exploración espacial');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const accionUsuario = await capturarEntradaUsuario();
    console.log('Acción del usuario:', accionUsuario);

}

