interface Aircraft {
    registration: string;
    manufacturer: string;
    model: string;
    mtow: number;
    aircraftType: string
}

const aircraft: Aircraft = {
    registration: "5Y-ABC",
    manufacturer: "De Havilland Canada",
    model: "Dash 8-100",
    mtow: 16000,
    aircraftType: "Turboprop"
};

console.log(aircraft)