//EJERCICIO 1
//Funcion que pide calcular año de nacimiento respecto a su edad
function calcularEdad(age){
    año = 2023
    result= año-age
    return("Usted nacio en: " + result)
}
console.log("Ejercicio 1: " +calcularEdad(19))

//EJERCICIO 2
//Convertir de grados Celsius a grados fahrenheit
function convert(x){
    F = (32+(9*x/5))
    return ("Grados Fahrenheit: " + F)
}
console.log("Ejercicio 2: "+convert(30))

//EJERCICIO 3
//Funcion que tome un array de numeros y un valor objetivo de entrada, devuelva un array de arrays que contenga pares de numeros del array original que sumen el valor objetivo

function obje(arr,ob){
    let res=[]
    for (let i = 0; i < arr.length; i++) {
        for (let k = i+1; k < arr.length; k++) {
            if(arr[i]+arr[k] === ob){
                res.push([arr[i],arr[k]])
            }
        }
            
    }   
    return res
}
console.log(obje([1,5,2,8,4,6,7,3],8))

//EJERCICIO 4
//Funcion de suma de los numero pares y los impares (por aparte), de numeros desde 1 a 578934