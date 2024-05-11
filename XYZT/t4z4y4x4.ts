import '../bigletter/I'
import '../bigletter/J'
import '../bigletter/K'
import '../bigletter/L'
import '../bigletter/M'
import '../bigletter/N'
import '../bigletter/O'
import '../bigletter/P'
import '../bigletter/Q'
import '../return/returnnnnn'
import "../InventorySlots/InventorySlot1234"
export function x4(){
    for (let I = 0; I >= -3; I--)
        for (let J = 0; J >= -3; J--)
            for (let K = 0; K >= -3; K--)
                console.log(I,J,K)
}
export function y4(){
    for(let L = 0;-3 <= L &&  L <= 3; L++||L--)
        for(let M = 0;-3 <= M && M <= 3 ;M++||M--)
            for(let N = 0;-3 <= N && N <= 3; N++||N--)
                console.log(L,M,N)
}
export function z4(){
    for (let O = 0; O <= 3; O++)
        for (let P = 0; P <= 3; P++)
            for (let Q = 0; Q <= 3; Q++)
                console.log(O,P,Q)
}
export function t4(){
    do `x4*y4`
    while ({
        z4: `0,z>=6,z--`
    })
    do `x4*z4`
    while ({
        y4: `0,z>=6,y--`
    })
    do `y4*z4`
    while ({
        x4: `0,x>=6,x--`
    })
}
export function InventorySlot1234(x4:number, y4:number, z4:number,t4:string){
    x4=['I, J, K']
    y4=['L, M, N']
    z4=['O, P, Q']
    t4=['x4%y4%z4']
}
console.log(InventorySlot1234)
