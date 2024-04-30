"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.manejarEvento = void 0;
function manejarEvento(nave, evento) {
    console.log("Evento recibido: ".concat(evento.evento));
    console.log("Efecto: ".concat(evento.efecto));
    nave.salud = 10;
    console.log("Salud de la nave: ".concat(nave.salud));
    console.log("Capacidad de carga de la nave: ".concat(nave.capacidadCarga));
    console.log("Velocidad de la nave: ".concat(nave.velocidad));
}
exports.manejarEvento = manejarEvento;
