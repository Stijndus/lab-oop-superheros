import { Superhero } from "./superhero";

export class Avenger extends Superhero {
  constructor(public name: any, public gender: any, public oneliner: any) {
    super(name, gender, "Avengers", oneliner);
  }
}
