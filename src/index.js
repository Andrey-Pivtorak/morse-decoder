const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const codeMorseMap = {
    10: '.',
    11: '-',
  };

  const doubleEncodedWords = [];
  for (let i = 0; i < expr.length; i += 10) {
    const part = expr.slice(i, i + 10);
    if (part.startsWith('*')) {
      doubleEncodedWords.push(' ');
    } else {
      doubleEncodedWords.push(part);
    }
  }

  const normalizedWords = doubleEncodedWords.map((el) => {
    const oneIdx = el.indexOf('1');
    if (oneIdx > 0) {
      return el.substring(oneIdx);
    }
    return el;
  });

  const morseEncodedWords = normalizedWords.map((word) => {
    if (word.length <= 1) {
      return word;
    }

    const morseWord = [];
    for (let i = 0; i < word.length; i += 2) {
      const subStr = word.substr(i, 2);
      morseWord.push(codeMorseMap[subStr]);
    }
    return morseWord.join('');
  });

  const decodedStr = morseEncodedWords.map((el) => MORSE_TABLE[el] || el).join('');

  return decodedStr;
}

module.exports = {
    decode
}
