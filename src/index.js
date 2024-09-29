const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let code = '';
    let morse = '';
    let decoded = '';
    for (let i = 0; i <= expr.length - 10; i += 10) {
        code = expr.slice(i, 10 + i);
        if (code === "**********") {
            decoded += " ";
        } else {
            for (let i = 0; i < 9; i++) {
                if (code[0] === "0" && code[1] === "0") {
                    code = code.slice(2);
                }
            }
            for (let i = 0; i <= code.length + 2; i++) {
                if (code[0] === '1' && code[1] === '0') {
                    morse += '.'
                    code = code.slice(2);
                }
                if (code[0] === '1' && code[1] === '1') {
                    morse += '-';
                    code = code.slice(2);
                }

            }

            decoded += MORSE_TABLE[morse];
        }
        morse = '';

    }
    return decoded;
}

module.exports = {
    decode
}