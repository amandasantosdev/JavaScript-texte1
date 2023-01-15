/*
1) o imc - indice de massa corporal é um criterio da organização mundial da saúde para dar uma indicação sobr a condição da peso de pessoa adulta.

formula do IMC: 
IMC = peso / (altuta * altura)

elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condiçaõ:
-abaixo de 18.5 abaixo do peso;
-entre 18.5 e 25 peso normal;
-entre 25 e 30 acima do peso;
-entre 30 e 40 obeso;
-acima de 40 obesidade grave;
*/
const pacientePeso1 = 94
const alturaPaciente1 = 1.75

const IMC =  pacientePeso1 / ( alturaPaciente1 * alturaPaciente1);
console.log(IMC)

const abaixoDopeso = 18.5;
const pasoNormal = 25;
const acimadoPeso = 30;
const obeso = 40;

if (IMC < abaixoDopeso) {
    console.log("Abaixo do paso")
}
if (IMC >= abaixoDopeso && IMC < pasoNormal) {
    console.log("Peso normal")
}
if (IMC >= pasoNormal && IMC < acimadoPeso) {
    console.log("Acima do paso")
}
if (IMC >= acimadoPeso && IMC < obeso) {
    console.log("Obeso")
}
if (IMC > obeso) {
    console.log("Obesidade grave")
}



