"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proximoElementoF = exports.proximoElementoE = exports.proximoElementoD = exports.proximoElementoC = exports.proximoElementoB = exports.proximoElementoA = void 0;
const proximoElementoA = () => {
    const sequenceA = [1, 3, 5, 7];
    return sequenceA[sequenceA.length - 1] + 2;
};
exports.proximoElementoA = proximoElementoA;
const proximoElementoB = () => {
    const sequenceB = [2, 4, 8, 16, 32, 64];
    return sequenceB[sequenceB.length - 1] * 2;
};
exports.proximoElementoB = proximoElementoB;
const proximoElementoC = () => {
    const sequenceC = [0, 1, 4, 9, 16, 25, 36];
    return Math.pow(sequenceC.length, 2);
};
exports.proximoElementoC = proximoElementoC;
const proximoElementoD = () => {
    const sequenceD = [4, 16, 36, 64];
    return Math.pow(Math.sqrt(sequenceD.length + 2), 2) * 4;
};
exports.proximoElementoD = proximoElementoD;
const proximoElementoE = () => {
    const sequenceE = [1, 1, 2, 3, 5, 8];
    return sequenceE[sequenceE.length - 1] + sequenceE[sequenceE.length - 2];
};
exports.proximoElementoE = proximoElementoE;
const proximoElementoF = () => {
    const sequenceF = [2, 10, 12, 16, 17, 18, 19];
    return sequenceF[sequenceF.length - 1] + 1;
};
exports.proximoElementoF = proximoElementoF;
console.log(`a) Próximo elemento: ${(0, exports.proximoElementoA)()}`);
console.log(`b) Próximo elemento: ${(0, exports.proximoElementoB)()}`);
console.log(`c) Próximo elemento: ${(0, exports.proximoElementoC)()}`);
console.log(`d) Próximo elemento: ${(0, exports.proximoElementoD)()}`);
console.log(`e) Próximo elemento: ${(0, exports.proximoElementoE)()}`);
console.log(`f) Próximo elemento: ${(0, exports.proximoElementoF)()}`);
