let totalFlightHours: number = 5;
let additionalFlightHours: number = 10

console.log(totalFlightHours+additionalFlightHours)

let flightHours: number = 40;
function calculateTotalFlightHours(
    previousHours: number,
    newHours: number
): number {
    return previousHours+newHours;
}

const total = calculateTotalFlightHours(flightHours, 2.5);
console.log(total)