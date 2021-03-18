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

// let firstEl = getFirstEl();

// console.log("first el", firstEl);
// console.log("numbers:", numbers);

// 2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.
function cutMeFirstEl() {
  return numbers2.shift();
}
// let firsElAfterCut = cutMeFirstEl();

// console.log("firsElAfterCut", firsElAfterCut);
// console.log("numbers:", numbers);

// 3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.
function giveMeLastEl(arr) {
  //   let lastEl = arr.slice(-1);
  //   return lastEl[0];
  let lastEl = arr[arr.length - 1];
  return lastEl;
}

// let lastEl = giveMeLastEl(numbers);
// console.log("lastEl", lastEl);

// 4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.

// 5. Parašykite funkciją, kuri grąžina elementų kiekį masyve

// 6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą

// 7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis. console.log()
function printIndexesPlease(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    console.log(index);
  }
}
// printIndexesPlease(numbers);

// 8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:
//  [0] => reikšmė
//  [1] => reikšmė
//  [2] => reikšmė
//  ..............
console.clear();

function printMeIndexAndValues(arr) {
  // prasukti cikla pro arr
  for (let index = 0; index < arr.length; index++) {
    // sujungi stringa pagal [0] => reikšmė
    console.log(`[${index}] => ${arr[index]}`);
  }
}

// console.log("----printMeIndexAndValues------");
// printMeIndexAndValues(numbers);

// 9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reiksmes vienoje eilutėje:  -111 2 -9 48
function printArrayValuesLine(arr) {
  //   let resultString = "";
  //   for (let index = 0; index < arr.length; index += 1) {
  //     resultString = resultString + arr[index] + " ";
  //   }
  //   console.log(resultString);

  console.log(arr.join(" "));
}
// printArrayValuesLine(numbers);

// sukti cikla
// kiekviena reiksme irasyti atskirta tarpu
// atspausdinti visa rezulta

// 10. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:
// [0]=>17 [1]=>8 [2]=>88 ...
console.clear();
function printMeIndexAndValuesInLine(arr) {
  let resulRowString = "";
  for (let index = 0; index < arr.length; index++) {
    // console.log(`[${index}] => ${arr[index]}`);
    resulRowString += `[${index}] => ${arr[index]} `;
  } // for loop end

  console.log(resulRowString);
}
// debugger;
console.log("----printMeIndexAndValuesInLine------");
printMeIndexAndValuesInLine(numbers);

console.log("numbers after operation:", numbers);
