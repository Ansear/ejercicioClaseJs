//correr npm install En terminal, para instalar la dependencia de prompt-sync
const prompt = require("prompt-sync")({ sigint: true });
let word1 = prompt("Ingresa la primer palabra: ")
let word2 = prompt("Ingresa la segunda palabra: ")
function newPassword(pa1,pa2) {
    let i = 0,j = 0
    let result = []
    while (i < pa1.length && j < pa2.length){
        result.push(pa1[i])
        result.push(pa2[j])
        i += 1
        j += 1
    }
    result = result.concat(pa1.slice(i))
    result = result.concat(pa2.slice(j))
    return result.join('')
    
}
console.log(newPassword(word1,word2))