// pratimai isigilinti ir pasikartoti

const numbers = [1, 2, -9, 8, 7, 9, 4, -5, -6, -1, -8, 4];
const numbers2 = [-111, 2, -9, 48];

console.log("Pradiniai masyvai");
console.log("numbers:", numbers);
console.log("numbers2:", numbers2);

// 1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.
function getFirstEl() {
  //   return numbers.shift();
  return numbers[0];
}

let firstEl = getFirstEl();

console.log("first el", firstEl);
console.log("numbers:", numbers);

// 2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.

// 3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.

// 4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.

// 5. Parašykite funkciją, kuri grąžina elementų kiekį masyve

// 6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą

// 7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis. console.log()

// 8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:
//  [0] => reikšmė
//  [1] => reikšmė
//  [2] => reikšmė
//  ..............

// 9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reiksmes vienoje eilutėje:  -111 2 -9 48

// 10. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:
// [0]=>17 [1]=>8 [2]=>88 ...
