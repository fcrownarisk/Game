import './state/wavefunction'
import './state/eigenstate'
import './state/activatedstate'
import './state/Cohereststate'
import './state/Degeneratestate'
interface eigenstate{
    energy:number
    wavefunction:string
}
interface activatedstate{
    energy:number
    excitationLevel:number
}
type ComplexNumber = {
    real:number
    imaginary:number
}
namespace CoherentState{
    amplitude:String
    phase:toString
}
namespace DegenerateState{
    energy:SVGStringList
    degeneracy:SVGAnimatedString
}
