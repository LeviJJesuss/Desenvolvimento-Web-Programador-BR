
// Posso pegar o nome do usuário com um prompt
// O Prompt recebe o valor como string, no meu caso que estou fazendo calculos com os valores 
// adquiridos, eu precisei primeiro transformar em número para poder disparar o alerta

var numero = parseInt(prompt("Digite um número:"));

var dobro = numero + numero;

alert("O dobro de " +numero+ " é " + dobro);