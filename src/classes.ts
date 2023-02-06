// class
class Player {
  name: string;
  age: number;
  country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}

const irfan = new Player("Irfan", "38", "Bangladesh"); // err
const mashrafi = new Player("Mashrafi", 38, "Bangladesh");
const sakib = new Player("Sakib", 38, "Bangladesh");
//---------------------------
sakib.name = "Mashrafi";
console.log(sakib.name); // change , modify and accessable outside class __default behaviour. To prevent this use access modifier.
//---------------------------

// const players: string[] = [];
const players: Player[] = [];

players.push("Sakib"); // err
players.push(sakib);
players.push(mashrafi);
