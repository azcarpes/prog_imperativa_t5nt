// FOR

// Repetir como um papagaio
for (i=0; i<=4; i++) {
    console.log("Olá mundo")
}

// Contando números ímpares
for (i=1; i<=10; i++) {
    console.log(i++)
}

// Criando a tabuada
for (i=1; i<=10; i++) {
    for (j=1; j<=10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }
}

// WHILE

// números impares de 1 até 100
i=1
while (i<=100) {
    console.log(i++)
    i++
}

// números pares de 1 até 100
i=2
while (i<=100) {
    console.log(i++)
    i++
}

// números pares e ímpares
function pares(i) {
    while (i<=10) {
        console.log(i++)
        i++
    }
}

function impares(i) {
    while (i<=11) {
        console.log(i++)
        i++
    }
}

pares(2)
impares(1)

// média das notas de uma turma
function mediaTurma() {
    let qtdAlunos = prompt ("Informe o número de alunos")
    let notaAluno = prompt ("Informe a nota")

    let numero = 1
    while (numero<=qtdAlunos) {
        notaAluno
        var soma = notaAluno+notaAluno
        numero++
    }
    console.log(soma/qtdAlunos)
}

mediaTurma(5)