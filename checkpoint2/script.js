//questao 1

function soma (a=1, b=3) {
    return a+b;
}

console.log(soma());
console.log(soma(3));
console.log(soma(1,2));

//questao 3

let numeros= [10, 8, 7, 99, 0, 1, 6];

console.log(numeros.sort(function(a,b){ return b-a;}));

//questao 4

var z = 0;

for (var i=20; i<50; i+=10) {
    z+=i;
}

console.log(z);

//questao 7

let frutasAmarelas=['Melão', 'Mamão', 'Limão siciliano'];
let frutasVermelhas=['Morango', 'Cereja', 'Maça red'];
let frutasVerdes=['Limão', 'Kiwi', 'Maça verde'];

frutasVermelhas1=frutasVermelhas.map(fruta => fruta.toLocaleUpperCase());

let todasFrutas=[...frutasAmarelas,...frutasVermelhas1,...frutasVerdes];
console.log(todasFrutas);

//questao 9

let valor=5;
let fatorial = 1;

for(let i=valor; i>1; i--) {
    fatorial*=i;
}

console.log("Fatorial " +fatorial);

//questao 12

let [fruta1, fruta2, fruta3] = frutasAmarelas;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(frutasAmarelas);

//questao 13

let x=5;
let y = x++ + ++x;
console.log("y= " +y);

x=3;
y=x*(x+1)*x++;

x=5;
y=3;
y*= x+1

console.log("x= " +x);
console.log("y= " +y);

//questao 15

for (var i=0; i<50; i+=10) {
    console.log(i);
}

console.log(i);

let xadrez = 50;
let resto = 50%2;

resposta = resto==0 ? "Par":"Impar";

console.log(resposta);

function soletrar(texto) {
    console.log(texto.replace('-', '').toLocaleUpperCase().split("").join("-"));
}

soletrar("digital-house");
soletrar("ctd");