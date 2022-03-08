"use strict";
exports.__esModule = true;
var superhero_1 = require("./superhero");
var avenger_1 = require("./avenger");
var spiderman = new superhero_1.Superhero('Spider-man', 'Male', 'Spiderfriends', 'With great power comes great responsibility');
console.log(spiderman);
spiderman.sayOneLiner();
var thor = new avenger_1.Avenger('Thor', 'Male', 'For asgard');
console.log(thor);
thor.sayOneLiner();
