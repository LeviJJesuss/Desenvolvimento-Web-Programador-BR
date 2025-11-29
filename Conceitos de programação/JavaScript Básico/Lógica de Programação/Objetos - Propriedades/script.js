// Qual a diferença de um objeto para uma array?
// Na array eu posso acessar um elemento através do seu índice
// No objeto eu posso criar uma chave para acessar o elemento
// Eu posso criar uma array dentro de um objeto
// Um objeto tem propriedades que funcionam como variáveis

// var aluno = {name : "Igor",
//              nota : 7.5,
//              notas: [7.5, 7.0]   
// };

// var novaProp = "LastName";

// aluno.matricula = 12345;

// aluno[novaProp] = "Oliveira";

// console.log(aluno.nome, aluno.nota)
// console.log(aluno)

// var aluno = new Object();

// aluno.nome = "Igor";
// aluno.notas = [8, 9];
// console.log(aluno)

var calcMedia = function() {
        // O this faz sentido quando temos um método no objeto
        return (this.notas[0] + this.notas[1]) / 2;
    }

var aluno = {
    nome: "Igor",
    notas: [5, 8],

    // Um objeto que recebe uma função nós chamamos de método
    media: calcMedia
}

var aluno1 = {
    nome: "João",
    notas: [5, 8],

    // Um objeto que recebe uma função nós chamamos de método
    media: calcMedia
}

console.log(aluno.nome);
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))
console.log(aluno1.nome);
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]))