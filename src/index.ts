import { calcularSoma } from "./questoes/questao1";
import {
  proximoElementoA,
  proximoElementoB,
  proximoElementoC,
  proximoElementoD,
  proximoElementoE,
  proximoElementoF,
} from "./questoes/questao2";
import { calcularFaturamento } from "./questoes/questao3";
import { buscarClientesSP, modeloLogico } from "./questoes/questao4";
import { executarCalculo } from "./questoes/questao5";

const main = () => {
  console.log("Iniciando a execução das questões...\n");

  const resultadoSoma = calcularSoma(12);
  console.log(`Questão 1: Resultado da soma = ${resultadoSoma}\n`);

  console.log("Questão 2: Próximo elemento em sequência:");
  console.log(`a) ${proximoElementoA()}`);
  console.log(`b) ${proximoElementoB()}`);
  console.log(`c) ${proximoElementoC()}`);
  console.log(`d) ${proximoElementoD()}`);
  console.log(`e) ${proximoElementoE()}`);
  console.log(`f) ${proximoElementoF()}\n`);

  const resultadosFaturamento = calcularFaturamento([
    100, 200, 0, 150, 0, 300, 250,
  ]);
  console.log("Questão 3: Resultados de faturamento:");
  console.log(`Menor faturamento: ${resultadosFaturamento.menor}`);
  console.log(`Maior faturamento: ${resultadosFaturamento.maior}`);
  console.log(`Dias acima da média: ${resultadosFaturamento.diasAcimaMedia}\n`);

  console.log("Questão 4: Clientes do estado de São Paulo:");
  buscarClientesSP();
  modeloLogico();
  console.log("");

  console.log("Questão 5: Cálculo de distâncias:");
  executarCalculo();
};

main();
