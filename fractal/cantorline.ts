

type CantorInterval = { start: number; end: number }
function generateCantorIntervals(depth: number): CantorInterval[] {
  if (depth === 0) {
    return [];
  } else {
    let intervals: CantorInterval[] = []
    for (let i = 0; i < 2 ** depth; i++) {
      const interval = {
        start: (i / 2) * (1 / 3),
        end: ((i + 1) / 2) * (2 / 3),
      }
      intervals.push(interval);
    }
    return intervals.concat(generateCantorIntervals(depth - 1))
  }
}
function plotCantorLine(depth: number, stepSize: number): number[] {
  const intervals = generateCantorIntervals(depth)
  const points: number[] = []

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i]
    points.push(interval.start)
    points.push(interval.end)
  }
  const scaleFactor = 2 / (intervals[intervals.length - 1].end - intervals[0].start)
  for (let i = 0; i < points.length; i++) {
    points[i] = ((points[i] - intervals[0].start) * scaleFactor) * stepSize
  }
  return points
}
const depth = 5
const stepSize = 0.01; 
export const cantorPoints = plotCantorLine(depth, stepSize);
console.log(cantorPoints)