interface User {
    name: string;
    age: number;
    isFit: boolean;

    canFly(): void;
}

class Pilot implements User {
    name: string;
    age: number;
    isFit: boolean;

    constructor(name: string, age: number, isFit: boolean) {
        this.name = name
        this.age = age
        this.isFit = isFit
    }

    canFly() {
        console.log("Pilot is", this.name)

        if (this.isFit == false) {
            console.log("Cannot Fly")
        } else {
            console.log("Cleared for takeoff")
        }
    }
}