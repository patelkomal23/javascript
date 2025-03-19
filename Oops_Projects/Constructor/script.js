//Defauilt Constructor

// class A{
//     constructor(){
//         console.log("This is from constructor.");
//     }

//     print(){
//         console.log("This is a Demo");
        
//     }

// }

// let obj =  new A();
// obj.print();

//Parameterized Constructor

class B{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    set(name,age){
        this.name = name;
        this.age = age;
    }
    get(){
        console.log("Name: "+this.name);
        console.log("Age: "+this.age);
        
    }
}
let obj = new B("komal", 23);
obj.get();

//Copy Constructor
class Info {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        copy() {
            return new Info(this.name, this.age);
        }
    }
    
    let obj1 = new Info("Amita", 42);
    let obj2 = obj1.copy();
    console.log(obj2.name); 
    console.log(obj2.age);

//Static Constructor