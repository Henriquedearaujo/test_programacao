// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const fs = require('fs');

// Ler o arquivo JSON
const rawData = fs.readFileSync('faturamento.json');
const data = JSON.parse(rawData).faturamento;

let menorFaturamento = Infinity;
let maiorFaturamento = -Infinity;
let totalFaturamento = 0;
let diasComFaturamento = 0;

data.forEach(dia => {
    if (dia.valor > 0) { // Ignorar dias sem faturamento
        if (dia.valor < menorFaturamento) {
            menorFaturamento = dia.valor;
        }
        if (dia.valor > maiorFaturamento) {
            maiorFaturamento = dia.valor;
        }
        totalFaturamento += dia.valor;
        diasComFaturamento++;
    }
});

const mediaMensal = totalFaturamento / diasComFaturamento;

let diasAcimaDaMedia = 0;
data.forEach(dia => {
    if (dia.valor > mediaMensal) {
        diasAcimaDaMedia++;
    }
});

console.log('Menor valor de faturamento ocorrido em um dia do mês:', menorFaturamento);
console.log('Maior valor de faturamento ocorrido em um dia do mês:', maiorFaturamento);
console.log('Número de dias com faturamento diário superior à média mensal:', diasAcimaDaMedia);

