// Vamos supor que eu quero saber se o usuário é maior ou menor de 18 anos
// Condicionando a idade dele para saber se ele pode ou não beber

var idade = parseInt(prompt("Digite sua idade:"));

if(idade < 18 || idade > 70) {
    console.log("Pode");
    var pedido = prompt("Qual o seu pedido?")
} else {
    console.log("Não pode");
    console.log("Volte futuramente")
}
