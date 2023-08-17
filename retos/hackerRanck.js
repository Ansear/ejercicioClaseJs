//correr npm install En terminal, para instalar la dependencia de prompt-sync
const prompt = require("prompt-sync")({ sigint: true });
let word1 = prompt("Ingresa la primer palabra: ")
let word2 = prompt("Ingresa la segunda palabra: ")
let reg = new RegExp("^[a-z]+$")

if((reg.test(word1) && reg.test(word2)) && ((word1.length >= 1 && word1.length <= 25000) && (word2.length >= 1 && word2.length <= 25000))){
    function newPassword(pa1,pa2) {
        let i = 0,j = 0
        let result = []
        while (i < pa1.length && j < pa2.length){
            result.push(pa1[i])
            result.push(pa2[j])
            i++
            j++
        }
        result = result.concat(pa1.slice(i))
        result = result.concat(pa2.slice(j))
        return result.join('')
        
    }
    console.log(newPassword(word1,word2))
}else{
    console.log("Error Datos")
}