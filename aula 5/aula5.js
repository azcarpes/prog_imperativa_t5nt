//1.converter polegadas em centimetros
function converterPolegadasCentimetros(valorPolegadas) {
    return valorPolegadas*2.54
}

console.log(converterPolegadasCentimetros(10));

//2.converter string em URL
function converterStringUrl(string) {
    return "http://www."+string+".com.br"
}

console.log(converterStringUrl("aline"));

//3.
function converterString(string) {
    return string+"!"
}

console.log(converterString("A Kiara é uma fofa"));

//4.calcular idade dogs
function idadeDogs(idade) {
    return idade*7
}

let idade = 5;
console.log("A idade humana de um cachorro que tem "+idade+" anos é de " + idadeDogs(idade)+" anos.");


//5.calcular valor da hora de trabalho
function valorHoraTrbalho(salario) {
    return salario/160
}

let salario = 2000;
console.log("Minha hora de trabalho vale " + valorHoraTrbalho(salario)+" pelos na minha roupa.");


//6.calcular IMC
function calcularImc(altura, peso) {
    return peso/(altura*altura)
}

console.log(calcularImc(1.66, 63))


//7.converter string minuscula para maiuscula
function minusculaMaiuscula(string) {
    return string.toUpperCase()
}

console.log(minusculaMaiuscula("eu tô com fome!"))


//8.qual tipo de dado?
function tipoDeDado(dado) {
    return typeof dado
}

console.log("Este dado é do tipo "+tipoDeDado("Léia"))

//9. calculo da circunferência
function circunferência(raio) {
    return 2*Math.PI*raio
}

console.log(circunferência(2))