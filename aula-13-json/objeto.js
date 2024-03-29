let leia = {
    nome: "Léia",
    especie: "gato",
    cor: "tricolor",
    idade: 3,
    felinista: function() {
        return "Olá, eu sou um " +leia.especie+ " que se chama " + leia.nome
    }
};

console.log(leia.especie);

console.log(leia.felinista());

function CriarContas(numero, tipo, saldo, titular) {
    this.numeroConta = numero;
    this.tipoConta = tipo;
    this.saldoConta = saldo;
    this.titularConta = titular;
}

//para chamar a função: new CriarContas(numero, tipo, saldo, titular);

let cliente1 = new CriarContas(123456, "conta corrente", 0.96, "Kiara");
let cliente2 = new CriarContas(654321, "conta poupança", 1039.39, "Léia");
let cliente3 = new CriarContas(142536, "conta corrente", 999, "Sheydi");

let banco = {
    nomeBanco: "Banco Felino do Brasil",
    clientes: [cliente1, cliente2, cliente3],

    consultarCliente: function(nomeTitular) {

        let numClientes = 0

        do{
            if (this.clientes[numClientes].titularConta == nomeTitular) {
                return this.clientes[numClientes]
            }
            numClientes++;
        } while (numClientes<this.clientes.length);
    },

    deposito: function(nomeTitular, valor) {
        for (let numCliente = 0; numCliente < this.clientes.length; numCliente++) {
            if (this.clientes[numCliente].titularConta == nomeTitular) {
                this.clientes[numCliente].saldoConta += valor;
                return "Depósito realizado, seu novo saldo é de " + this.clientes[numCliente].saldoConta;
            }
        }
    }
}

console.log(banco);

console.log(banco.consultarCliente("Sheydi"));

console.log(banco.deposito("Léia", 1000));