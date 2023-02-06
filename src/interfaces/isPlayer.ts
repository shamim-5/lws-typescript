export interface IsPlayer {
  name: string; // by default public
  //   age: number; // not need for private type
  readonly country: string;

  play(): void;
  getProperty(): number; // for private type
}
