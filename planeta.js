"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planeta = exports.Recurso = void 0;
var Recurso;
(function (Recurso) {
    Recurso[Recurso["Mineral"] = 0] = "Mineral";
    Recurso[Recurso["Gas"] = 1] = "Gas";
    Recurso[Recurso["Agua"] = 2] = "Agua";
    Recurso[Recurso["Atmosfera"] = 3] = "Atmosfera";
})(Recurso || (exports.Recurso = Recurso = {}));
var Planeta = /** @class */ (function () {
    function Planeta(recurso, peligros) {
        this.recurso = recurso;
        this.peligros = peligros;
    }
    return Planeta;
}());
exports.Planeta = Planeta;
