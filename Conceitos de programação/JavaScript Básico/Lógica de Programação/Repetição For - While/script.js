// Primeiro comando de repetição que veremos é o for

// Esse comando gera um número randomico entre 0 e 1 
var numero = Math.random() * 100;

// for (var i = 0; i < numero; i++) {
//     console.log("Executando o for, pela " + i + " vez");
// }

// O segundo comando de repetição que vamos ver é o while
// Eu posso usar o while quando eu tenho uma condição que precisa ser satisfeita
// porém eu não sei quando essa condição vai ser atendida

while(numero < 90) {
    console.log(numero);
    numero = Math.random() * 100;
}

console.log(numero);
console.log("Acabou");