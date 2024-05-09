enum QuarkFlavor {
    Up,
    Down,
    Charm,
    Strange,
    Top,
    Bottom
}
export class Quark {
    flavor: QuarkFlavor;
    color: string;
    mass: number;
    constructor(flavor: QuarkFlavor, color: string, mass: number) {
        this.flavor = flavor;
        this.color = color;
        this.mass = mass;
    }
}
const quarks: Quark[] = [
new Quark(QuarkFlavor.Up, 'red', 2.0),// 上夸克
new Quark(QuarkFlavor.Down, 'green', 4.8), // 下夸克
new Quark(QuarkFlavor.Charm, 'blue', 1.6), // 奇夸克
new Quark(QuarkFlavor.Strange, 'anti-red', 95.0), // 异夸克
new Quark(QuarkFlavor.Top, 'anti-green', 174.0), // 顶夸克
new Quark(QuarkFlavor.Bottom, 'anti-blue', 4.2), // 底夸克
]
quarks.forEach(quark => {
    console.log(`Quark Flavor: ${quark.flavor}, Color: ${quark.color}, Mass: ${quark.mass} MeV`);
})