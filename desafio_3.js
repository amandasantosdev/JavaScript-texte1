/*
 1) faça um algoritimo que dado as 3 notas tiradas por um
  aluno em um semestre da faculdade caqlcule e imprima a sua media e a sua classificação conforme a tabela abaixo.

Media = (nota 1 + nota 2 + nota 3) / 3;

classificação:
media menor que 5, reprovado;
media entre 5 e 7, recuperação;
media acima ded 7 , passou de semestre;

*/
const nota_1 = 6.7;
const nota_2 = 4.9;
const nota_3 = 2.9;

//calculo da nota
const notaSemestral = (nota_1 + nota_2 + nota_3) / 3;
console.log(notaSemestral)

const valorReprovacao = 5.0;
const valorAprovado = 7.0;

if(notaSemestral < valorReprovacao) {
    console.log("Aluno reprovado")
}
if(notaSemestral >= valorReprovacao && notaSemestral < valorAprovado) {
    console.log("Aluno em Recuperação")
}
if(notaSemestral > valorAprovado) {
    console.log("Aluno Aprovado")
}



