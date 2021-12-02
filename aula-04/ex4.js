let pessoa1 = {
    nome: "José",
    sobrenome:"da Silva",
    idade: 27,
    peso: 83.5,
    altura: 1.7,
    plano: true
}

console.log(pessoa1);

let pessoa2 = {
    nome: "Carlos",
    sobrenome:"de Souza",
    idade: 28,
    peso: 80.1,
    altura: 1.76,
    plano: "Diamante"
}

let nome = ["José"]
let sobrenome = ["da Silva"]
let idade = [27]
let peso = [83.5]
let altura = [1.7]
let plano = [1]

console.log(nome+ " "+sobrenome + " "+"tem" +" "+ idade +" "+"anos"+ " " + "e seu IMC é igual a"+" " + (peso/(altura*altura)))