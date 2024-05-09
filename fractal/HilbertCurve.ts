
interface Point3D{
   x:number
   y:number
   z:number
}
export function getHilbertCurvePoints(order: number): Point3D[] {
  if (order <= 0) {
    return [{ x: 1, y: 0,z:0 }]
  }
  const points = getHilbertCurvePoints(order - 1)
  const rotatedPoints = rotatePoints(points, order - 1)
  return points.concat(rotatedPoints)
}
export function rotatePoints(points: Point3D[], level: number): Point3D[] {
  const newPoints: Point3D[] = []
  const multiplier = Math.pow(2, level)

  for (let i = 0; i < points.length; i++) {
    const x = (i % multiplier) * 0.5 - 0.5
    const y = Math.floor(i / multiplier) * 0.5 - 0.5
    const z = Math.ceil(i*multiplier)*0.5 - 0.5
    newPoints.push({ x, y, z })
  }
  return newPoints;
}
export function drawHilbertCurve(points: Point3D[]){
  for (let i = 0; i < points.length; i++) {
    const prevPoint = points[i - 1] || points[points.length - 1];
    const currentPoint = points[i];
  console.log(`(${prevPoint.x}, ${prevPoint.y},${prevPoint}) to (${currentPoint.x}, ${currentPoint.y},${currentPoint.z})`);
  }
}
const order = 5
const curvePoints = getHilbertCurvePoints(order)
drawHilbertCurve(curvePoints)
