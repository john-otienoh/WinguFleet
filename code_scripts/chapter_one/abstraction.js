"use strict";
class Pilot {
    name;
    age;
    isFit;
    constructor(name, age, isFit) {
        this.name = name;
        this.age = age;
        this.isFit = isFit;
    }
    canFly() {
        console.log("Pilot is", this.name);
        if (this.isFit == false) {
            console.log("Cannot Fly");
        }
        else {
            console.log("Cleared for takeoff");
        }
    }
}
