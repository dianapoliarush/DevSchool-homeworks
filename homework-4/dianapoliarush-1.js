class VigenèreCipher {
    constructor(key, abc) {
        this.key = key;
        this.abc = abc;
    }

    encode(str) {
        let encodeStr = '';
        for (let i = 0; i < str.length; i++) {
            let currentChar = str[i];
            let keyChar = this.key[i % this.key.length];
            if (this.abc.indexOf(currentChar) >= 0) {
                encodeStr += this.abc[(this.abc.indexOf(currentChar) + this.abc.indexOf(keyChar)) % this.abc.length];
            } else {
                encodeStr += currentChar;
            }
        }
        return encodeStr;
    }

    decode(str) {
        let decodeStr = '';
        for (let i = 0; i < str.length; i++) {
            let currentChar = str[i];
            let keyChar = this.key[i % this.key.length];
            if (this.abc.indexOf(currentChar) >= 0) {
                let idx = (this.abc.indexOf(currentChar) + this.abc.length - this.abc.indexOf(keyChar)) % this.abc.length;
                let decodedСhar = this.abc[idx];
                decodeStr += decodedСhar;
            } else {
                decodeStr += currentChar;
            }
        }
        return decodeStr;
    }
}


const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const key = 'password';
const c = new VigenèreCipher(key, alphabet);

console.log(c.encode('codewars'));
console.log(c.decode('laxxhsj'));
console.log(c.encode('CODEWARS'));
