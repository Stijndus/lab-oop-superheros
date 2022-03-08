import { Superhero } from "./superhero";
import { Avenger } from "./avenger";

var spiderman = new Superhero('Spider-man', 'Male', 'Spiderfriends', 'With great power comes great responsibility');

console.log(spiderman);
spiderman.sayOneLiner();

var thor = new Avenger('Thor','Male','For asgard');

console.log(thor);
thor.sayOneLiner();
