// class with access modifiers
class Cricketer {
  private name: string;
  public age: number;
  readonly country: string;

  constructor(n: string, a: number, c: string) {
    this.name = n;
    this.age = a;
    this.country = c;
  }

  play() {
    console.log(`${this.name} from ${this.country} is playing`);
  }
}

const mash = new Cricketer("Mashrafi", 38, "Bangladesh");
const tamim = new Cricketer("Sakib", 38, "Bangladesh");

tamim.name = "Mashrafi"; //err
tamim.age = 45;
tamim.country = "England"; //err

console.log(tamim.name); // err
console.log(tamim.age);
console.log(tamim.country);

// if provide access modifier theres a shortcut for declare class for example...
class Writer {
  constructor(private name: string, public age: number, readonly country: string) {}

  write() {
    console.log(`${this.name} from ${this.country} was wrote`);
  }
}

const kz = new Writer("Kazi Nazrul Islam", 62, "Bangladesh");

console.log(kz.name); // err
console.log(kz.country);
