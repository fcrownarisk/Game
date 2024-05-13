import '../smallletter/i'
import '../smallletter/j'
import '../smallletter/k'
import '../smallletter/l'
import '../smallletter/m'
import '../smallletter/n'
import '../smallletter/o'
import '../smallletter/p'
import '../smallletter/q'
import "../return/returnn"
import "../InventorySlots/Inventory"
export function x1(){
    for (let i = 0; i <= 2; i++)
        for (let j = 0; i <= 2; j++)
            for (let k = 0; k <= 2; k++)
}
export function y1(){
    for(let l = 0;-2<=l && l<=3; l++||l--)
       for(let m = 0;-1<=m && m<=3 ;m++||m--)
          for(let n = 0;-2<=n && n<=3; n++||n--)
}
export function z1(){
    for(let o=0; o<=3; o++)
        for(let p=0; p<=3; p++)
            for(let q=0;q<=3; q--)
}
export function t1(){
        do `x1*y1`
        while ({
            z1: `0,z<1,z++`
        })
        do `x1*z1`
        while ({
            y1: `0,z<1,y++`
        })
        do `y1*z1`
        while ({
            x1: `0,x<1,x++`
        })
}
export function Inventory(){
    'x4'=['i, j, k']
    'y4'=['l, m, n']
    'z4'=['o, p, q']
    't4'=['x4+y4+z4']
}
console.log(Inventory)
