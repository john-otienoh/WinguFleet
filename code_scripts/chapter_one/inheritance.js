"use strict";
class Item {
    id;
    description;
    price;
    constructor(id, description, price) {
        this.id = id;
        this.description = description;
        this.price = price;
    }
    getId() {
        return this.id;
    }
}
class Engine extends Item {
    manufacturer;
    constructor(id, description, price, manufacturer) {
        super(id, description, price);
        this.manufacturer = manufacturer;
    }
    getManufacturer() {
        return this.manufacturer;
    }
}
const engine = new Engine("126262", "Turbo Prop Engine", 172727272, "Pratt & Whitney");
console.log("ID: ", engine.getId());
console.log("Manufacturer: ", engine.getManufacturer());
