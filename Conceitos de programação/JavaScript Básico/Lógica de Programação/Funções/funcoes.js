function saudacao(){
    return "Olá, mundo!";
}

var s = saudacao();

console.log(s);

// Eu posso criar uma função anônima 
// O Javascript permite que eu coloque uma função dentro de uma variável

var media = function (n1, n2) {
    return (n1 + n2) / 2;
} 

console.log(media(5, 6));