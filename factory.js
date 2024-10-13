// Factory é o padrão fabricar objetos
// que encapsula as reponsabilidades em objetos separadamente
// melhorando a manutenabilidade e flexibilidade do código

// function createObject(){
//     let object = {}
//     return object
// }
// const result = createObject()
// console.log("Node js!!! \n" + result)

// Segundo exemplo
// function createPerson(nome, sobrenome) {
//     let pessoa = {
//         nome: nome,
//         sobrenome: sobrenome,
//         nomeCompleto: function() {
//             return `${pessoa.nome} ${pessoa.sobrenome}`
//         },
//     } 
//     return pessoa
// }

// let pessoa1 = createPerson("João", "de Patmos")
// let pessoa2 = createPerson("São", "Bartolomeu")
// console.log(pessoa2)
// console.log(pessoa1["nomeCompleto"])
// const nomeCompletoPs1 = pessoa1["nomeCompleto"]
// console.log(nomeCompletoPs1())

// Exemplo de calculadora

const calculadora = {
    somar: function(valor1, valor2) {
        return valor1 + valor2
    },
    multiplicar: function(valor1, valor2) {
        return valor1 * valor2
    }
}

const multiplicacao = calculadora["multiplicar"]

console.log(multiplicacao(2, 2))