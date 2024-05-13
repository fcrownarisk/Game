import './bigletter'
import './smallletter'
import './midletter'
import './XYZT'
enum PAI{
    ABCD, EFGH, IJKL, MNOP,QRST ,UVW ,XYZ
}
console.log(JSON.stringify(PAI),'ABCD','EFGH','IJKL','MNOP','QRST','UVW','XYZ')
enum MULTIPLE{
    abc,def,ghi,jkl,mno,pqr,stu,vwx,yz
}
console.log(JSON.stringify(MULTIPLE),'abc', 'def', 'ghi', 'jkl', 'mno','pqr', 'stu', 'vwx', 'yz')
enum det{
    ABCD,"abc*EFGH","def*HIJK","ghi*LMNO","jkl*PQRT",'stu*TUVW','vwx*XYZ'
}
console.log(JSON.parse('det'),'ABCD','abc*EFGH','def*HIJK',"ghi*LMNO","jkl*PQRT",'ijk*PQRS','stu*TUVW','vwx*XYZ')
enum trace{
     x1y1z1t1,x2y2z2t2,x3y3z3t3,t4z4y4x4,t5z5y5x5,t6z6y6x6
}
console.log(JSON.parse('trace'),'x1y1z1t1','x2y2z2t2','x3y3z3t3','t4z4y4x4','t5z5y5x5','t6z6y6x6')
enum detrace{
     det,trace}
console.log('detrace')
enum tracedet{
     trace,det
}
console.log(tracedet)
enum PAIMULTILE{
     PAI,MULTIPLE
}
console.log('PAI','MULTIPLE',PAIMULTILE)
enum MULTIPLEPAI{
     MULTIPLE,PAI
}
console.log('MULTIPLE','PAI',MULTIPLEPAI)
