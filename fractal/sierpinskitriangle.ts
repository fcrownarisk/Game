
declare module x{}
declare module y{}
declare module z{}
function calculateVector(a: number[], b: number[]){
  return [b[0] - a[0], b[1] - a[1], b[2] - a[2]]
}
void function drawTetrahedron(){
  const vertices: number[][] = [
    //A
    [-1, -1, 1],
    //B
    [1, -1, 1],
    //C
    [-1, 1, 1],
    //D
    [1, 1, 1],
    //E(AB midPoint）
    [0, -1, 1],
    //F(AC midPoint）
    [0, 1, 1]
  ];
  for (let i = 0; i < 4; i++) {
    const edges = [i * 2, i * 2 + 1, ((i + 1) % 4) * 2, ((i + 1) % 4) * 2 + 1]
    const normals = calculateNormals(vertices, edges)
    console.log(`Drawing face with vertices: ${edges}`);
    console.log(normals)
  }
}
function calculateNormals(vertices: number[][], edges: number[]){
  let normal = [0, 0, 0]
  for (let i = 0; i < 3; i++) {
    const v1 = vertices[edges[i * 2]]
    const v2 = vertices[edges[i * 2 + 1]]
    const v3 = vertices[edges[(i + 1) * 2 + 1]]
        const vectorAB = calculateVector(v1, v2);
    const vectorAC = calculateVector(v1, v3);

    normal[0] += (vectorAB[1] * vectorAC[2] - vectorAB[2] * vectorAC[1]);
    normal[1] += (vectorAB[2] * vectorAC[0] - vectorAB[0] * vectorAC[2]);
    normal[2] += (vectorAB[0] * vectorAC[1] - vectorAB[1] * vectorAC[0]);
  }
  const length = Math.sqrt(normal[0] * normal[0] + normal[0])
  console.log(length)
}
