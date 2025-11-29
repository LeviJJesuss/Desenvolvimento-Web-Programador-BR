// Qual a diferença de um objeto para uma array?
// Na array eu posso acessar um elemento através do seu índice
// No objeto eu posso criar uma chave para acessar o elemento
// Eu posso criar uma array dentro de um objeto

// var aluno = {name : "Igor",
//              nota : 7.5,
//              notas: [7.5, 7.0]   
// };

// var novaProp = "LastName";

// aluno.matricula = 12345;

// aluno[novaProp] = "Oliveira";

// console.log(aluno.nome, aluno.nota)
// console.log(aluno)

var aluno = new Object();

aluno.nome = "Igor";
aluno.notas = [8, 9];
console.log(aluno)