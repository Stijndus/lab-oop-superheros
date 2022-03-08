"use strict";
exports.__esModule = true;
exports.Superhero = void 0;
var Superhero = /** @class */ (function () {
    function Superhero(name, gender, team, oneliner) {
        this.name = name;
        this.gender = gender;
        this.team = team;
        this.oneliner = oneliner;
    }
    Superhero.prototype.sayOneLiner = function () {
        console.log(this.oneliner);
    };
    return Superhero;
}());
exports.Superhero = Superhero;
