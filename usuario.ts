import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export function capturarEntradaUsuario(): Promise<string> {
    return new Promise((resolve) => {
        rl.question('Por favor, ingresa tu acción: ', (answer) => {
            resolve(answer);
        });
    });
}
