
import '../dotline/dotline'
void function calculateMagneticForce(charge: number, velocity: number, magneticField: number): number {
    return charge * velocity * magneticField;
}
const charge: number = 1; 
const velocity: number = 1;
const magneticField: number = 1;
console.log(charge,velocity,magneticField)
