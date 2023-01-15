
/* desafio: fazer um programa para caucular o valor de uma viajem.

voce tera 3 variaveis, sendo elas:
1 - preço co etanol;
2 - preço do combustivel;
3 - gasto medio de combustivel do carro por km;
4 - tipo de combustivel que esta no seu carro;
5 -  distancia em KM da viagem;
imprimir no consoço o valor que sera gasto na viagem;
*/

const precoCombustivelEtanol = 4.39;
const precoCombustivelGasolina = 5.79;
const gastoMedioKMporLitro = 10;
const distancia = 100;


// calcula gasolina
const casoSejaGasolina = 100 / 10 * 5.79;
console.log("Gasolina" , casoSejaGasolina)

// calcula Etanol
const casoSejaEtanol = 100 / 10 * 4.39;
console.log("Etanol", casoSejaEtanol)

