let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])

let cores = ["Roxo", "LAranja", "Azul"]
let ultimaCor = cores.pop()

console.log(cores);
console.log(ultimaCor);

let numbers =[22, 33, 54, 66, 72]
console.log(numbers.length)

function inverterArray([a,b,c]) {
    let arrayInvertido = ([c,b,a])
    console.log(arrayInvertido)
}

inverterArray([1,2,3]);


function somarArray([a, b, c]) {
    let soma = a+b+c
    console.log(soma)
}

somarArray([1,2,3]);

function join ([a,b,c]) {
    let separado = [a, b, c]
    let junto = separado.join("")
    console.log(junto)

}

join(["o","l","á"]);