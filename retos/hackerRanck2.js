function countPairs(arr,tar){
    let result = 0
    if(arr.length >= 5 && arr.length <= Math.pow(10, 5)){
        for (i = 0; i < arr.length; i++) {
                for (j = 0; j < arr.length; j++) {
                    if(arr[j]>0 && arr[j]<= Math.pow(10, 9)){
                        if(target>=1 && target <= Math.pow(10, 9)){
                            if(arr[i]-arr[j] == tar){
                                result++
                            }
                        }else{
                            result = "target fuera de rango"
                        }
                    }else{
                        result = "dato fuera de rango"
                    }
                }
        }
    }else{
        result = "tamaño erroneo"    
    }
    return result
}
let array1 = [364147530,61825163,107306571,128124602,139946991,428047635,491595254,879792181,106926279]
let array2 = [1,5,3,4,2]
let array3 = [1,3,5]
let target = 2
console.log(countPairs(array2,target))

