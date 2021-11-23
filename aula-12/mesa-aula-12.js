let alice = [23, 82, 46];
let bob = [45, 89, 32];
let pontosA = 0
let pontosB = 0

function compararNotas (a, b) {
    for (let contador = 0; contador < a.length; contador++) {
        if (a[contador] > b[contador]) {
            pontosA++
        } else if (a[contador] < b[contador]) {
            pontosB++
        }
    }
        if (pontosA > pontosB) {
            return "Alice wins"
        } else if (pontosA < pontosB) {
            return "Bob wins"
        }
}

console.log(compararNotas(alice, bob));



// bonus extra - digitalHouse()

function digitalHouse(a, b) {
    let numeros = []; // saida dos numeros de 1 a 100



    for (let contador = 1; contador <= 100; contador++) {
        if (contador % a == 0 && contador % b == 0) {
            numeros.push("Digital House")
        } else if (contador % a == 0) {
            numeros.push("Digital")
        } else if (contador % b == 0) {
            numeros.push("House")
        } else { 
            numeros.push(contador)
        }
    }
    return numeros;
}
console.log(digitalHouse(2, 3));

