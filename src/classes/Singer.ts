export class Singer {
  constructor(private name: string, public age: number, readonly country: string) {}

  song() {
    console.log(`${this.name} from ${this.country} was wrote`);
  }
}
