export enum Recurso {
    Mineral,
    Gas,
    Agua,
    Atmosfera
}

export class Planeta {
    constructor(public recurso: Recurso, public peligros: string) {}
}
