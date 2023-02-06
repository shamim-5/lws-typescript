// class  - interface structure
import { IsPlayer } from "./interfaces/isPlayer";

export class Player implements IsPlayer {
  constructor(public name: string, private age: number, readonly country: string) {}

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

let musfiq: IsPlayer;
musfiq = new Player("Musfiq", 35, "Bangladesh");

const players: Player[] = [];
players.push(musfiq); // show err cause of private type
players.push(mashrafi);
