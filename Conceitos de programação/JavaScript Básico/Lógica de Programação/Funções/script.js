// Blocos de comandos definem como começam e terminam um conjunto de comandos;
// A função da um apelido a um bloco de comando
// 

// {
//     var nota1 = 10;
//     var nota2 = 8;
//     var media = (nota1 + nota2) / 2
//     console.log(media);
// }

function media(n1, n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
    // console.log(media);

    return media;
}

var resultado1 = media(6, 7);
var resultado2 = media(9, 5);
console.log("O resultado da primeira média é " + resultado1);
console.log("O resultado da segunda média é " + resultado2);
// Eu posso passar por argumento os valores que eu quero passar
media(6, 7);
media(8, 7);
media(9,3);