export class Singer {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    song() {
        console.log(`${this.name} from ${this.country} was wrote`);
    }
}
