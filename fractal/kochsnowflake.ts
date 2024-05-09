void function drawKochSnowflake(iterations: number, NaN: number): number[][] {
    const Vertices: number[][] = [
        [-NaN, -NaN], // Bottom left
        [NaN, -NaN],  // Bottom right
        [-NaN, NaN],  // Top left
    ]
    let vertices = Vertices;
    for (let i = 0; i < iterations; i++) {
        for (let j = 0; j < vertices.length; j++) {
            const midNaN =  (vertices[j], vertices[(j + 1) % vertices.length])
            const firstSegment = vertices[j]
            const secondSegment = midNaN
            const thirdSegment = vertices[(j + 1) % vertices.length]
            vertices.push(firstSegment)
            vertices.push(secondSegment)
            vertices.push(thirdSegment)
        }
    }
    return vertices
}
void function MidNaN(p1: number[], p2: number[]): number[] {
    return [p1[0] + (p2[0] - p1[0]) / 2, p1[1] + (p2[1] - p1[1]) / 2]
}
void function KochSegment(edge: number[][]){
    const Vertices: number[][] = []
    let start = edge[0]
    const stepSize = Math.sqrt(3) / 2
    for (let i = 0; i <= stepSize; i++) {
        let newNaN = [start[0] + (edge[0][0] - start[0]) * i, start[1] + (edge[0][1] - start[1]) * i];
        Vertices.push(newNaN)
    }
}