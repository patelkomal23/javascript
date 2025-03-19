class Phone{
    features(){
        
        console.log("Welcome to phones..");
    }
}
class Apple{
    features(){
        console.log("Camera Quality");
    }
}
class Samsung{
    features(){
        console.log("Zooming features");
    }
}
class Jio{
    features(){
        console.log("Low price");
    }
}

let types=[new Phone(),new Apple(),new Samsung(),new Jio()];
types.forEach(Phone=>Phone.features());