let idade1 = Number(prompt("Digite sua idade: "));
console.log("Categoria:");
if (idade1 <= 12) {
    console.log("Criança");
} else if (idade1 >= 13 && idade1 <= 17) {
    console.log("Adolescente");
} else if (idade1 >= 18 && idade1 <= 59) {
    console.log("Adulto");
} else if (idade1 >= 60) {
    console.log("Idoso");
}

let idade2 = Number(prompt("Digite sua idade: "));
if (idade2 < 16) {
    console.log("Não vota");
} else if (idade2 >= 16 && idade2 < 18) {
    console.log("Voto facultativo");
} else if (idade2 >= 18 && idade2 <= 69) {
    console.log("Voto obrigatório");
} else if (idade2 >= 70) {
    console.log("Voto facultativo");
} else {
    console.log("Não pode votar.");
}

let numero = Number(prompt("Digite um número: "));
if (numero < 0) {
    console.log("Negativo");
} else if (numero > 0) {
    console.log("Positivo");
} else {
    console.log("O número é zero");
}

let combustivel = prompt("Digite um tipo de combustível: ");
if (combustivel === "Gasolina") {
    console.log("Você escolheu Gasolina");
} else if (combustivel === "Álcool") {
    console.log("Você escolheu Álcool");
} else if (combustivel === "Disel") {
    console.log("Você escolheu Disel");
} else {
    console.log("Opção inválida");
}

let velocidade = Number(prompt("Digite uma velocidade: "));
if (velocidade >= 80) {
    console.log("Multado");
} else if (velocidade >= 75) {
    console.log("Atenção");
} else if (velocidade <= 60) {
    console.log("Dentro do limite");
}
