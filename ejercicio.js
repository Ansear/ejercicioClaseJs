//EJERCICIO 1
function yearAge(age){
    result = 2023-age
    console.log(`Usted nacio en el: ${result}`)
}
yearAge(19)

//EJERCICIO 2
function celFa(cel){
    res = 32+(9*cel/5)
    return res
}
console.log("Grados fahrenheit: "+(celFa(32)))

//EJERCICIO 3 
function sumTwo(arr,val){
    let result = []
    for(i=0; i<arr.length ;i++){
        for ( k = i+1; k < arr.length;k++) {
            if(arr[i]+arr[k] === val){
                result.push([arr[i],arr[k]])
            }
        }
    }
    return result
}

console.log(sumTwo([1,2,3,4,5,6,7,8,9],10))