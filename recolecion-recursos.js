"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recolectarRecursos = void 0;
var planeta_1 = require("./planeta"); // Corrección en la importación
function recolectarRecursos(planeta) {
    var recursosRecolectados = '';
    switch (planeta.recurso) {
        case planeta_1.Recurso.Mineral: // Corrección en el uso de Recurso
            recursosRecolectados = 'Minerales recolectados';
            break;
        case planeta_1.Recurso.Gas: // Corrección en el uso de Recurso
            recursosRecolectados = 'Gas recolectado';
            break;
        case planeta_1.Recurso.Agua: // Corrección en el uso de Recurso
            recursosRecolectados = 'Agua recolectada';
            break;
        case planeta_1.Recurso.Atmosfera: // Corrección en el uso de Recurso
            recursosRecolectados = 'Atmosfera recolectada';
            break;
        default:
            recursosRecolectados = 'No se pudo recolectar ningún recurso';
    }
    return recursosRecolectados;
}
exports.recolectarRecursos = recolectarRecursos;
// Otro código relacionado con la recolección de recursos...
