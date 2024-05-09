const m6= 6,m7= 7,m8=8,m9=9
void function trace(){
   return  m6*m7*m8*m9
}
void function det(){
   return m6*m7 == m8*m9
}
void function tracedet(){
    return (m6*m7)%(m8*m9)
}
void function dettrace(){
    return (m6%m7)*(m8%m9)
}
console.log(`m6`,`m7`,`m8`,`m9`)
console.log('trace','det','tracedet','dettrace')