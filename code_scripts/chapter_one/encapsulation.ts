class AircraftRegistration {
    private registration: string;

    get getRegistration(): string {
        return this.registration;
    }
    set setRegistration(value: string) {
        if (value.trim().length === 0) {
            throw new Error("Registration cannot be empty");
        }

        this.registration = value.toUpperCase();
    }

    constructor(registration: string) {
        this.registration = registration;
    }
}


const ac = new AircraftRegistration("5Y-ABC");

console.log(aircraft.registration);

aircraft.registration = "5Y-XYZ";

console.log(aircraft.registration);
