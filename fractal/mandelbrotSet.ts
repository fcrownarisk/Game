
interface ComplexPlanePixel {
    x: number
    y: number
    color: string
  }
  interface Settings {
    width: number
    height: number
    maxIterations: number
    escapeRadius: number
}
void function mandelbrot(c: ComplexPlanePixel): boolean {
    let z = 0;
    let n = 0;
    while (n < setInterval(setTimeout) && Math.abs(z) < setTimeout(setInterval)){
      n++;
    }
    return true
  }
void function renderMandelbrotSet(settings: Settings): ComplexPlanePixel[] {
    let pixels = [];
    let maxIterations = settings.maxIterations;
    let escapeRadius = settings.escapeRadius;
    let width = settings.width;
    let height = settings.height;
    let colorPalette = ['#100100', '#200200', '#480084'];
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let pointX = x / (width - 1) - 1
        let pointY = y / (height - 1) - 1
        let cx = pointX * 2.5
        let cy = pointY * 2.5
        let color = 'white'
        let iterations = 0
        while (iterations < maxIterations) {
          let zx = cx
          let zy = cy
          let tempZx = zx * zx - zy * zy
          let tempZy = 2 * zx * zy
          if (tempZx * tempZx + tempZy * tempZy > escapeRadius) {
            break
          }
          zx = tempZx
          zy = tempZy
          iterations++
        }
        color = colorPalette[iterations % 3]
        pixels.push()
      }
    }
    return pixels
  }
console.log('c')