//correr npm install En terminal, para instalar la dependencia de prompt-sync

const prompt = require("prompt-sync")({ sigint: true });
let word1 = prompt("Ingresa la primer palabra: ")
let word2 = prompt("Ingresa la segunda palabra: ")
let pal1 = "",pal2 = ""
if (word1.length > word2.length){
    pal1 = word1
    pal2 = word2
}else{
    pal1 = word2
    pal2 = word1
}
let result = ""
// console.log(pal1.length + "pal2 " + pal2.length)
for(let i = 0; i <pal1.length; i++){
    for(let j = 0; j < pal2.length; j++){
        result = result.concat('',word1[i])
        break
    }
    result = result.concat('',word2[i])
    
}
console.log(result)