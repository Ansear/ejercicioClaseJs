//17 DE AGOSTO 
//EJERCICIO 6
//Crear un arreglo de 10 posiciones de numeros con valores aleatorios.Mostrar por consola el indice y el valor al que corresponde. 
result = []
function llenar(max){
    for(i=0;i<10;i++){
        let num = Math.floor(Math.random() * max);
        result.push(num)
    }
    return result
}
function mostrar(arr){
    for(i=0;i<10;i++){
        console.log("Indice: "+i,"Valor: "+arr[i])
        console.log()
    }
}
llenar(100)
console.log(result)
mostrar(result)
