// Arrays em algumas linguagens é vista como vetores
// É como uma sequência de caixas uma do lado da outra
// Quando eu acesso um elemento ele funciona muito bem como uma variável
// Como um conjunto de variáveis 
// Ele é um conjunto de variáveis "Digamos assim"
// Ele é sequencial 
// Ele começa sempre com o índice 0

var aluno = new Array("Igor", "José", "Marcos", "Mariana", "Leo");

// Posso conferir o tamanho desse array passando a propriedade .length

for (var i in aluno) {
    console.log(aluno[i])
}

// for (var i = 0; i < alunos.length; i++) {
//     console.log(alunos[i])
// }

// console.log(alunos.length);
// console.log(alunos[0]);
// console.log(alunos[1]);
// console.log(alunos[2]);
// console.log(alunos[3]);