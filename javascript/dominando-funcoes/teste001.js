function calculaIdde(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

const pessoa1 = {
    nome: "Maria",
    idade: 30
}
const pessoa2 = {
    nome: "Carlos",
    idade: 26
}
const animal = {
    nome: "Fiona",
    idade: 5,
    raca: "Pug"
}
console.log(calculaIdde.call(pessoa2, 60))
console.log(calculaIdde.apply(pessoa1, [60]))
console.log(calculaIdde.apply(animal, [6]))