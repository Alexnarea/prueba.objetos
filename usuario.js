"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capturarEntradaUsuario = void 0;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function capturarEntradaUsuario() {
    return new Promise(function (resolve) {
        rl.question('Por favor, ingresa tu acción: ', function (answer) {
            resolve(answer);
        });
    });
}
exports.capturarEntradaUsuario = capturarEntradaUsuario;