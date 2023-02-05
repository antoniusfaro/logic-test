const checkValidWord = (w) => {
  const validChar = /^[A-Za-z\-]+[,.?!]?$/g;
  return validChar.test(w);
};

const wordCount = (s) => {
  let count = 0;
  const words = s.split(' ');
  for (word of words) {
    if (checkValidWord(word)) {
      count += 1;
    }
  }
  return count;
};

const testString = 'Kemarin Shopia per[gi ke mall.';
const string1 = 'Saat meng*ecat tembok, Agung dib_antu oleh Raihan.';
const string2 = 'Berapa u(mur minimal[ untuk !mengurus ktp?';
const string3 = 'Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.';

console.log('\n\nNo 2.');
console.log(`test. input: ${testString}\noutput: ${wordCount(testString)}`);
console.log(`a. input: ${string1}\noutput: ${wordCount(string1)}`);
console.log(`b. input: ${string2}\noutput: ${wordCount(string2)}`);
console.log(`c. input: ${string3}\noutput: ${wordCount(string3)}`);
