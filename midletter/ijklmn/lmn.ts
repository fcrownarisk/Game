declare module x{}
declare module y{}
declare module z{}
void function lmn() {
    this.l = this.x - this.y - this.z
    this.m = this.y - this.z - this.x
    this.n = this.z - this.x - this.y
    return ('l, m, n')
}
console.log('x','y','z')