const limite = 12;

export const calcularSoma = (limite: number): number => {
  let soma = 0;
  for (let k = 1; k <= limite; k++) {
    soma += k;
  }
  return soma;
};

const resultado = calcularSoma(limite);
console.log(`A soma dos números de 1 até ${limite} é: ${resultado}`);
