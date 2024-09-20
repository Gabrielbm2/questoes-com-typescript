export const proximoElementoA = (): number => {
  const sequenceA = [1, 3, 5, 7];
  return sequenceA[sequenceA.length - 1] + 2;
};

export const proximoElementoB = (): number => {
  const sequenceB = [2, 4, 8, 16, 32, 64];
  return sequenceB[sequenceB.length - 1] * 2;
};

export const proximoElementoC = (): number => {
  const sequenceC = [0, 1, 4, 9, 16, 25, 36];
  return Math.pow(sequenceC.length, 2);
};

export const proximoElementoD = (): number => {
  const sequenceD = [4, 16, 36, 64];
  return Math.pow(Math.sqrt(sequenceD.length + 2), 2) * 4;
};

export const proximoElementoE = (): number => {
  const sequenceE = [1, 1, 2, 3, 5, 8];
  return sequenceE[sequenceE.length - 1] + sequenceE[sequenceE.length - 2];
};

export const proximoElementoF = (): number => {
  const sequenceF = [2, 10, 12, 16, 17, 18, 19];
  return sequenceF[sequenceF.length - 1] + 1;
};

console.log(`a) Próximo elemento: ${proximoElementoA()}`);
console.log(`b) Próximo elemento: ${proximoElementoB()}`);
console.log(`c) Próximo elemento: ${proximoElementoC()}`);
console.log(`d) Próximo elemento: ${proximoElementoD()}`);
console.log(`e) Próximo elemento: ${proximoElementoE()}`);
console.log(`f) Próximo elemento: ${proximoElementoF()}`);
