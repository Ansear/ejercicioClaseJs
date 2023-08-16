class Stack{
    constructor(){
        this.top = null
    }
    push(value){
        let node = new Node(value,this.top)
        this.top = node
    }
    pop(){
        if(this.isEmpty()===true){
            let element = this.top
            this.top = this.top.prev
            return element
        }else{
            return "Stack Vacia, Nada para eliminar"
        }
    }
    peek(){
        if(this.isEmpty()===true){
            return this.top
        }else{
            return "Nada para traer,Stack Vacia"
        }
    }
    isEmpty(){
        if(this.top === null){
            return false
        }else{
            return true
        }
    }
    print(){
        let aux = this.top
        console.log(aux.element)
    }
}

class Node{
    constructor(element,prev){
        this.element = element
        this.prev = prev
    }
}

let novo = new Stack

novo.push(20)
novo.push(25)
novo.push(30)
novo.push(35)
console.log(novo)
console.log(novo.pop())
console.log(novo)
console.log(novo.peek())
console.log(novo)