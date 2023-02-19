class Ninja {
    constructor (salud, velocidad, fuerza){
    console.log(constructor);
    this.salud = 200;
    this.velocidad = 10;
    this.fuerza = 10;
    }

    drinkSake(){
        console.log("Tengo sed");
        this.salud + 10;
        this.velocidad + 10;
        this.fuerza + 10; 
    }
}

class Sensei extends Ninja{
    constructor(sabiduría){
        super(salud, velocidad, fuerza);
        this.sabiduría = 10;
        console.log("Hola, soy el Sensei");
    }

    speakWisdom(){
        console.log('Only a ninja can stop a ninja.');
    }
}

const Sensei = new Sensei(drinkSake);
