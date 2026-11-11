class Item {
    id: string;
    description: string;
    price: number;

    constructor(id: string, description: string, price: number) {
        this.id = id;
        this.description = description;
        this.price = price;
    }

    getId(): string {
        return this.id;
    }
}

class Engine extends Item {
    manufacturer: string;

    constructor(
        id: string,
        description: string,
        price: number,
        manufacturer: string,
    ) {
        super(id, description, price);
        this.manufacturer = manufacturer;
    }

    getManufacturer(): string {
        return this.manufacturer;
    }
}

const engine = new Engine(
    "126262",
    "Turbo Prop Engine",
    172727272,
    "Pratt & Whitney",
);

console.log("ID: ", engine.getId());
console.log("Manufacturer: ", engine.getManufacturer());