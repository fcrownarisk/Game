import '../bigletter/I'
import '../bigletter/J'
import '../bigletter/K'
import '../bigletter/L'
import '../bigletter/M'
import '../bigletter/N'
import '../bigletter/O'
import '../bigletter/P'
import '../bigletter/Q'
import '../return/returnnnnnnn'
import '../InventorySlots/InventorySlot5678910'
export function x5(){
    for (let I = 0; I <= 4; ++I)
       for (let J= 0;J <= 4; ++J)
          for (let K= 0; K <= 4;++K)
    console.log(I,J,K)
}
export function y5() {
    for (let L = 0; L <= -4 && L <= 4; ++L || L--)
        for (let M = 0; M <= -4 && M <= 4; ++M || M--)
            for (let N = 0; N <= -4 && N <= 4; ++N || N--)
    console.log(L,M,N)
}
export function z5(){
    for (let O= 0; O <= 8;O++)
       for (let P = 0; P <= 8; P++)
          for (let Q = 0; Q <= 8;Q++)
    console.log(O,P,Q)
}
export function t5(){
    do `x5*y5`
    while ({
        z5: `0,5<=z<=10,z++||z--`
    })
    do `x5*z5`
    while ({
        y5: `0,5<=z<=10,y++||y--`
    })
    do `y5*z5`
    while ({
        x5: `0,5<=x<=10,x++||x--`
    })
}
export function InventorySlot5678910(x5:number,y5:number,z5:number,t5:string){
    x5=['Q,P,O']
    y5=['N,M,L']
    z5=['K,J,I']
    t5=['x5/y5/z5']
}
console.log(InventorySlot5678910)
