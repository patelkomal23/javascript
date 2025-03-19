class Dsa{
    topics(){
        
        console.log("Welcome to Data Structures..");
    }
}
class Stack{
    topics(){
        console.log("LIFO & FIFIO");
    }
}
class Queue{
    topics(){
        console.log("Enqueue & Dequeue");
    }
}
class Array{
    topics(){
        console.log("1D and 2D");
    }
}

let types=[new Dsa(),new Stack(),new Queue(),new Array()];
types.forEach(Dsa=>Dsa.topics());