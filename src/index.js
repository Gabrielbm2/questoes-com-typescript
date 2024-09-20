"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const questao1_1 = require("./questoes/questao1");
const questao2_1 = require("./questoes/questao2");
const questao3_1 = require("./questoes/questao3");
const questao4_1 = require("./questoes/questao4");
const questao5_1 = require("./questoes/questao5");
const main = () => {
    console.log("Iniciando a execução das questões...\n");
    const resultadoSoma = (0, questao1_1.calcularSoma)(12);
    console.log(`Questão 1: Resultado da soma = ${resultadoSoma}\n`);
    console.log("Questão 2: Próximo elemento em sequência:");
    console.log(`a) ${(0, questao2_1.proximoElementoA)()}`);
    console.log(`b) ${(0, questao2_1.proximoElementoB)()}`);
    console.log(`c) ${(0, questao2_1.proximoElementoC)()}`);
    console.log(`d) ${(0, questao2_1.proximoElementoD)()}`);
    console.log(`e) ${(0, questao2_1.proximoElementoE)()}`);
    console.log(`f) ${(0, questao2_1.proximoElementoF)()}\n`);
    const resultadosFaturamento = (0, questao3_1.calcularFaturamento)([
        100, 200, 0, 150, 0, 300, 250,
    ]);
    console.log("Questão 3: Resultados de faturamento:");
    console.log(`Menor faturamento: ${resultadosFaturamento.menor}`);
    console.log(`Maior faturamento: ${resultadosFaturamento.maior}`);
    console.log(`Dias acima da média: ${resultadosFaturamento.diasAcimaMedia}\n`);
    console.log("Questão 4: Clientes do estado de São Paulo:");
    (0, questao4_1.buscarClientesSP)();
    (0, questao4_1.modeloLogico)();
    console.log("");
    console.log("Questão 5: Cálculo de distâncias:");
    (0, questao5_1.executarCalculo)();
};
main();
