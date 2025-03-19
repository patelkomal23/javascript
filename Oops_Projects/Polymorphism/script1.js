
//methd-overriding  
class Animal{
    sound(){
        console.log("Animal makes the sound");
    }
}
class Dog extends Animal{
    sound(){
        console.log("Barking");
    }
}
class Cat extends Animal{
    sound(){
        console.log("Meoww");
    }
}

let onj=[new Animal(),new Dog(),new Cat()];
onj.forEach((objData)=>{
    objData.sound();
})
