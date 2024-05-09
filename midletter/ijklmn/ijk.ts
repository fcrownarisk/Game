declare module x{}
declare module y{}
declare module z{}
void function ijk() {
   this.i = this.x + this.y + this.z
   this.j = this.y + this.x + this.z
   this.k = this.z + this.x + this.y
   return ['i','j','k']
}
console.log('x','y','z')