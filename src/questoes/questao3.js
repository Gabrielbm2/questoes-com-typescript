"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularFaturamento = calcularFaturamento;
const faturamentoDiario = [100, 200, 0, 150, 0, 300, 250];
function calcularFaturamento(faturamento) {
    let menor = Infinity;
    let maior = -Infinity;
    let total = 0;
    let diasComFaturamento = 0;
    for (const valor of faturamento) {
        if (valor > 0) {
            if (valor < menor)
                menor = valor;
            if (valor > maior)
                maior = valor;
            total += valor;
            diasComFaturamento++;
        }
    }
    if (diasComFaturamento === 0) {
        return { menor: 0, maior: 0, diasAcimaMedia: 0 };
    }
    const media = total / diasComFaturamento;
    let diasAcimaMedia = 0;
    for (const valor of faturamento) {
        if (valor > media) {
            diasAcimaMedia++;
        }
    }
    return {
        menor: menor === Infinity ? 0 : menor,
        maior: maior === -Infinity ? 0 : maior,
        diasAcimaMedia,
    };
}
const resultados = calcularFaturamento(faturamentoDiario);
console.log(`Menor faturamento: ${resultados.menor}`);
console.log(`Maior faturamento: ${resultados.maior}`);
console.log(`Dias acima da média: ${resultados.diasAcimaMedia}`);
