const DISTANCIA_TOTAL = 125;
const VELOCIDADE_CARRO = 90;
const VELOCIDADE_CAMINHAO = 80;
const TEMPO_EXTRA_PEDAGIO_MINUTOS = 5;
const NUM_PEDAGIOS = 3;

function calcularTempoCruzamento(
  distancia: number,
  velocidadeCarro: number,
  velocidadeCaminhao: number
): number {
  const tempoCarro = distancia / (velocidadeCarro + velocidadeCaminhao);
  return tempoCarro;
}

function calcularTempoTotalCarro(tempoCruzamento: number): number {
  const tempoExtra = (TEMPO_EXTRA_PEDAGIO_MINUTOS * NUM_PEDAGIOS) / 60;
  return tempoCruzamento + tempoExtra;
}

function calcularDistancias(
  tempoCruzamento: number,
  tempoTotalCarro: number
): { distanciaCarro: number; distanciaCaminhao: number } {
  const distanciaCarro = VELOCIDADE_CARRO * tempoTotalCarro;
  const distanciaCaminhao = VELOCIDADE_CAMINHAO * tempoCruzamento;
  return { distanciaCarro, distanciaCaminhao };
}

export function executarCalculo() {
  const tempoCruzamento = calcularTempoCruzamento(
    DISTANCIA_TOTAL,
    VELOCIDADE_CARRO,
    VELOCIDADE_CAMINHAO
  );
  const tempoTotalCarro = calcularTempoTotalCarro(tempoCruzamento);
  const { distanciaCarro, distanciaCaminhao } = calcularDistancias(
    tempoCruzamento,
    tempoTotalCarro
  );

  const distanciaAtéRibeiraoCarro = DISTANCIA_TOTAL - distanciaCarro;
  const distanciaAtéRibeiraoCaminhao = DISTANCIA_TOTAL - distanciaCaminhao;

  console.log(
    `Distância do carro até Ribeirão Preto: ${distanciaAtéRibeiraoCarro.toFixed(
      2
    )} km`
  );
  console.log(
    `Distância do caminhão até Ribeirão Preto: ${distanciaAtéRibeiraoCaminhao.toFixed(
      2
    )} km`
  );

  if (distanciaAtéRibeiraoCarro < distanciaAtéRibeiraoCaminhao) {
    console.log("O carro está mais próximo de Ribeirão Preto.");
  } else {
    console.log("O caminhão está mais próximo de Ribeirão Preto.");
  }
}

executarCalculo();
