export class Superhero {
    constructor(public name, public gender, public team, public oneliner){}

    public sayOneLiner() {
        console.log(this.oneliner);
    }
}