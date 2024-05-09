declare module x{}
declare module y{}
declare module z{}
void function opq() {
     this.o = this.x * this.y + this.z
     this.p = this.x + this.y * this.z
     this.q = this.y * this.z + this.x
     return ['o', 'p', 'q']
}
console.log('x','y','z')
