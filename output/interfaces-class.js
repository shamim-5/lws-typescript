export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
    // for private type interface
    getProperty() {
        return this.age; // return private property
    }
}
// import Player and done below things
const mashrafi = new Player("Mashrafi", 40, "Bangladesh");
let musfiq;
musfiq = new Player("Musfiq", 35, "Bangladesh");
const players = [];
players.push(musfiq); // show err cause of private type
players.push(mashrafi);
