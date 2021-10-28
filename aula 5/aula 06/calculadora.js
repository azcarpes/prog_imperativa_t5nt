function adicionar(x,y) {
    return x+y
}

function subtrair(x,y) {
    return x-y
}

function multiplicar(x,y) {
    return x*y
}

function dividir(x,y) {
    return x/y
}

console.log("----------Teste de Operações/Calculadora----------");
console.log("Adição: " + adicionar(10, 20));
console.log("Subtração: " + subtrair(35,60));
console.log("Multiplicação: " + multiplicar(9,9));
console.log("Divisão: " + dividir(88,2));
console.log("Divisão com argumento zero: " + dividir(0,1154));

//usando o power():
function quadradoDoNumeroPower(x) {
    return Math.pow(x,2)
}
console.log(quadradoDoNumeroPower(7));

//usando a nossa função de multiplicação:
function quadradoDoNumero(x) {
    return multiplicar(x,x)
}
console.log(quadradoDoNumero(7));

function mediaDeTresNumeros(x,y,z) {
    let soma = adicionar(x,y) + z
    return dividir(soma,3)
}
console.log(mediaDeTresNumeros(3,6,9));

function calculaPorcentagem(x,y){
    let totalPorcentagem = multiplicar(y,0.01)
    return multiplicar(x, totalPorcentagem)
}
console.log(calculaPorcentagem(300,15));

function geradorDePorcentagem(x,y) {
    let totalPorcentagem = dividir(y,x)
    return dividir(100,totalPorcentagem)
}
console.log(geradorDePorcentagem(2,200));