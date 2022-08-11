function upper(palavra){
    console.log(palavra.toUpperCase())
}

function lower(palavra){
    console.log(palavra.toLowerCase())
}

function trim(palavra){
    console.log(palavra.trim())
}

let test1 = "testando a função upper case"
console.log(test1)
console.log("")
let test2 = "TESTANDO A FUNÇÃO LOWER CASE"
console.log(test2)
console.log("")
let test3 = "      testando a função trim          "
console.log(test3)
console.log("")
console.log("---------------------------------------")
console.log("Frases após o uso da função: ")
console.log("")

upper(test1);
console.log("")
lower(test2);
console.log("")
trim(test3);

console.log("Fim do código!")