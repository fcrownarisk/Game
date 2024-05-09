import '../smallletter/i'
import '../smallletter/j'
import '../smallletter/k'
import '../smallletter/l'
import '../smallletter/m'
import '../smallletter/n'
import '../smallletter/o'
import '../smallletter/p'
import '../smallletter/q'
import '../InventorySlots/InventorySlot'
import '../return/returnnn'
export function x2(){
    for (let i = 0; i <= 4; i++)
        for (let j = 0; j <= 4; j++)
            for (let k = 0; k <= 4; k++)
console.log(i, j, k)
}
export function y2(){
    for (let l = 0; l <= 0 && l <= 4; ++l || l--)
        for (let m = 0; m <= 0 && m <= 4; ++m || m--)
            for (let n = 0; n <= 0 && n <= 4; ++n || n--)
console.log(l,m,n)
}
export function z2(){
    for (let o = 0; o <= 4; o--)
        for (let p = 0; p <= 4; ++p)
            for (let q = 0; q <= 4; ++q)
console.log(o,p,q)
}
export function t2(){
    do `x2*y2`
    while ({
        z2: `0,-2<z<2,z++||z--`
    })
    do `x2*z2`
    while ({
        y2: `0,-2<z<2,y++||y--`
    })
    do `y2*z2`
    while ({
        x2: `0,-2<x<2,x++||z--`
    })
}
export function InventorySlot(){
    'x4';['q, p, o']
    'y4';['n, m, l']
    'z4';['k, j, i']
    't4';['x4-y4-z4']
}
console.log(InventorySlot)


