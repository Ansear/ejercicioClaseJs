//EJERCICIO 4
//Funcion de suma de los numero pares y los impares (por aparte), de numeros desde 1 a 578934
let acuPar = 0
let acuIpar = 0
for(i=1;i<=578934;i++){
    if(i%2==0){
        acuPar +=i
    }else{
        acuIpar+=i
    }
}
console.log("La suma Par: "+acuPar)
console.log("La suma Impar: "+acuIpar)