"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarCalculo = executarCalculo;
const DISTANCIA_TOTAL = 125;
const VELOCIDADE_CARRO = 90;
const VELOCIDADE_CAMINHAO = 80;
const TEMPO_EXTRA_PEDAGIO_MINUTOS = 5;
const NUM_PEDAGIOS = 3;
function calcularTempoCruzamento(distancia, velocidadeCarro, velocidadeCaminhao) {
    const tempoCarro = distancia / (velocidadeCarro + velocidadeCaminhao);
    return tempoCarro;
}
function calcularTempoTotalCarro(tempoCruzamento) {
    const tempoExtra = (TEMPO_EXTRA_PEDAGIO_MINUTOS * NUM_PEDAGIOS) / 60;
    return tempoCruzamento + tempoExtra;
}
function calcularDistancias(tempoCruzamento, tempoTotalCarro) {
    const distanciaCarro = VELOCIDADE_CARRO * tempoTotalCarro;
    const distanciaCaminhao = VELOCIDADE_CAMINHAO * tempoCruzamento;
    return { distanciaCarro, distanciaCaminhao };
}
function executarCalculo() {
    const tempoCruzamento = calcularTempoCruzamento(DISTANCIA_TOTAL, VELOCIDADE_CARRO, VELOCIDADE_CAMINHAO);
    const tempoTotalCarro = calcularTempoTotalCarro(tempoCruzamento);
    const { distanciaCarro, distanciaCaminhao } = calcularDistancias(tempoCruzamento, tempoTotalCarro);
    const distanciaAtéRibeiraoCarro = DISTANCIA_TOTAL - distanciaCarro;
    const distanciaAtéRibeiraoCaminhao = DISTANCIA_TOTAL - distanciaCaminhao;
    console.log(`Distância do carro até Ribeirão Preto: ${distanciaAtéRibeiraoCarro.toFixed(2)} km`);
    console.log(`Distância do caminhão até Ribeirão Preto: ${distanciaAtéRibeiraoCaminhao.toFixed(2)} km`);
    if (distanciaAtéRibeiraoCarro < distanciaAtéRibeiraoCaminhao) {
        console.log("O carro está mais próximo de Ribeirão Preto.");
    }
    else {
        console.log("O caminhão está mais próximo de Ribeirão Preto.");
    }
}
executarCalculo();
