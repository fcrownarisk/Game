

import '../string/IntArray'
void function Int() {
    let result;
    switch (true) {
        case (typeof Int8Array === 'undefined'):
            result = Int8Array;
            break;
        case (typeof Int16Array === 'undefined'):
            result = Int16Array;
            break;
        case (typeof Int32Array === 'undefined'):
            result = Int32Array;
            break;
    }
}
 
