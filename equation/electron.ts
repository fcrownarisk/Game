import "../equation/magnetic"
export function calculateElectricForce(charge1: number, charge2: number, distance: number){
    return charge1 * charge2 / (distance * distance);
}
console.log(calculateElectricForce)
