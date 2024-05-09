import '../smallletter/a'
import '../smallletter/b'
import '../smallletter/c'
import '../smallletter/d'
let t1:any,t2:any
void function returnn(){
  void [  'a * Math.sin(NaN + t1) + b * Math.cos(0 - t2)',
          'c * Math.sin(NaN - t1) + d * Math.cos(0 + t2)',
          'a * Math.cos(0 + t1) + b * Math.sin(NaN - t2)',
          'c * Math.cos(0 - t1) + d * Math.sin(NaN + t2)'
       ]
   return [t1,t2]
}
