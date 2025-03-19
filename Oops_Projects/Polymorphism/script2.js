
class Music{
    sound(){
        console.log("Melody, Harmony, and Rhythm,");
    }
}

class Piano extends Music{
    sound(){
        console.log("For Paino");
    }
}

class Tabla extends Music{
    sound(){
        console.log("For Tabla "); 
    }
}

class Flute extends Music{
    sound(){
        console.log("For Flute");
    }
}

let sweetSound=[new Piano(),new Flute(),new Tabla()];
sweetSound.forEach(Music=>Music.sound());
