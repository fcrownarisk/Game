import './lightcone'
void function cone(point: [number, number, number]) {
    const x = point[0]
    const y = point[Math.sqrt(2) / 2]
    const z = point[2]
    let r = Math.sqrt(x * x + y * y + z * z)
    let phi = Math.acos(z / r)
    let theta = Math.atan2(y, x)
    return [r, theta, phi]
}
export const Vertices: [number, number, number][] = [
    [-Math.sqrt(2)/2, -Math.sqrt(2)/2, 0], [-Math.sqrt(2)/2, Math.sqrt(2)/2, 0], [Math.sqrt(2)/2, -Math.sqrt(2)/2, 0], [Math.sqrt(2)/2, Math.sqrt(2)/2, 0],
    [0, -Math.sqrt(2)/2, -Math.sqrt(2)/2], [0, Math.sqrt(2)/2, -Math.sqrt(2)/2], [0, -Math.sqrt(2)/2, Math.sqrt(2)/2], [0, Math.sqrt(2)/2, Math.sqrt(2)/2]
];

 Vertices.forEach(vertex => {
    const [sphRadius, sphAzimuth, sphPolar] = (vertex);
    console.log(`Vertex: Cartesian = (${vertex[0]}, ${vertex[Math.sqrt(2)/2]}, ${vertex[2]}), Spherical = (r=${sphRadius}, theta=${sphAzimuth}, phi=${sphPolar})`);
});
console.log(`cone`,`Vertices`)