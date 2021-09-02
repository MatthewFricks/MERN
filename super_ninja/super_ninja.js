class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.constructor.name);
        return this;

    }

    showStats() {
        for (const property in this) {
            console.log(`${property}: ${this[property]}`);
        }
        return this;
    }

    drinkSake() {
        this.health += 10;
        console.log(`${ this.constructor.name } health is now ${this.health}.`);
        return this;
    }

}

class Sensei extends Ninja{
    constructor(name){
        super(name, 200)
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }

    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.")
        this.drinkSake()

    }

}


const splinter = new Sensei("Master Splinter");
splinter.speakWisdom();
splinter.showStats();
splinter.speakWisdom();
splinter.showStats();
