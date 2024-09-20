"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularSoma = void 0;
const limite = 12;
const calcularSoma = (limite) => {
    let soma = 0;
    for (let k = 1; k <= limite; k++) {
        soma += k;
    }
    return soma;
};
exports.calcularSoma = calcularSoma;
const resultado = (0, exports.calcularSoma)(limite);
console.log(`A soma dos números de 1 até ${limite} é: ${resultado}`);
