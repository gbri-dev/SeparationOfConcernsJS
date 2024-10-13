// Factory é o padrão fabricar objetos
// que encapsula as reponsabilidades em objetos separadamente
// melhorando a manutenabilidade e flexibilidade do código

// function createObject(){
//     let object = {}
//     return object
// }

// const result = createObject()

// console.log("Node js!!! \n" + result)

function createPerson(nome, sobrenome) {
    let pessoa = {}
    pessoa.nome = nome
    pessoa.sobrenome = sobrenome

    function nomeCompleto() {
        return `${pessoa.nome} ${pessoa.sobrenome}`
    }
    pessoa.nomeCompleto = nomeCompleto
    return pessoa
}

let pessoa1 = createPerson("João", "de Patmos")
let pessoa2 = createPerson("São", "Bartolomeu")
console.log(pessoa2)
console.log(pessoa1.nomeCompleto())