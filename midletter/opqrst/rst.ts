declare module x{}
declare module y{}
declare module z{}
void function rst(){
  this.r = (this.x * this.y) / this.z
  this.s = this.y / (this.x * this.z)
  this.t = (this.z * this.x) / this.x
  return ['r, s, t']
}
console.log('x,y,z')
