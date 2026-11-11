interface Flight {
    flightNumber: string;
    aircraftRegistration: string;
    departureAirport: string;
    arrivalAirport: string;
    flightHours: number;
    flightDate: string;
}

const flight: Flight = {
    flightNumber: "CK101",
    aircraftRegistration: "5Y-ABC",
    departureAirport: "HKJK",
    arrivalAirport: "HKMO",
    flightHours: 1.5,
    flightDate: "2026-11-11"
};

console.log(flight)
