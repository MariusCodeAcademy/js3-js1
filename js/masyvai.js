console.log('masyvai.js');

let num1 = 4;
let num2 = 8;
let num3 = 14;

// masyvas tai informacijos kolekcija, eile reiksmiu
// index       0  1   2   3    
let numbers = [4, 8, 14, 18];

// index        0         1        2        3        4      5      6
let nouns = ['apple', 'sister', 'hammer', 'sun', 'table', 'sky', 'lake'];

// index        0       1      2     3     4     5     6     7
let helpers = ['in', 'whith', 'on', 'my', 'is', 'a', 'the', ' '];

// ---- ----- ---- Masyvo reiksmiu naudojimas
// pasiekiam reiksmes pagal index
console.log(numbers[1]); // 8
console.log(nouns[2]); // hammer
console.log(helpers[3]); // my

// taip pat per index mes galim pakeisti reiksme
console.table(nouns);
nouns[3] = 'moon';
console.table(nouns);

// peideti prie numbers reiksmes 4, 6is.
numbers[0] += 6;
console.log(numbers);

// Indexas gali buti apskaiciuotas
// pakeisti helperiu pries paskutini zodi i 'into'
console.clear();
// console.log(helpers);

// arr.length gaunamas masyvo nariu skaicius
console.log('masyvo nariu skaicius:', helpers.length );

// helpers[helpers.length - 2] = 'into';
// console.log(helpers);

// Užduotis: Sudarykite šiuos sakinius ir išsaugokite kitamuosiuose:
//    sentence1, sentence2, ... , sentenceN;  N - natūralieji skaičiai.
console.table([helpers, nouns])
// console.table(helpers)
let sentence1 = helpers[3] + helpers[7] + nouns[1] + helpers[7] + helpers[0] + helpers[7] + helpers[6] + helpers[7] + nouns[6];
// 1. my sister is in the lake
// 2. hammer is on the table
// 3. sun is in the sky
// 4. apple is with my sister

// 5. Papildyti masyvą žodžiais, ir sukurti dar 3 +-logiškus sakinius.

console.log(sentence1);

