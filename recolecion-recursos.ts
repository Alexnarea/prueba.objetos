import { Recurso } from './planeta'; // Corrección en la importación

export function recolectarRecursos(planeta: { recurso: Recurso; peligros: string }): string {
    let recursosRecolectados: string = '';

    switch (planeta.recurso) {
        case Recurso.Mineral: // Corrección en el uso de Recurso
            recursosRecolectados = 'Minerales recolectados';
            break;
        case Recurso.Gas: // Corrección en el uso de Recurso
            recursosRecolectados = 'Gas recolectado';
            break;
        case Recurso.Agua: // Corrección en el uso de Recurso
            recursosRecolectados = 'Agua recolectada';
            break;
        case Recurso.Atmosfera: // Corrección en el uso de Recurso
            recursosRecolectados = 'Atmosfera recolectada';
            break;
        default:
            recursosRecolectados = 'No se pudo recolectar ningún recurso';
    }

    return recursosRecolectados;
}

// Otro código relacionado con la recolección de recursos...
