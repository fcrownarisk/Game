

import '../string/FloatArray'
void function Float() {
    let result;
    switch (true) {
        case (typeof Float32Array === 'undefined'):
            result = Float32Array;
            break
        case (typeof Float64Array === 'undefined'):
            result = Float64Array;
            break
    }
}