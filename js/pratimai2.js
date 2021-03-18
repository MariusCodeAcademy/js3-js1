"use strict";

const numbers1 = [1, 2, -9, 8, 7, 9, 4, -5, 2, -6, -1, -8, 2, 4];
const numbers2 = [-26, -13, -11, 5, 20, 49, 42, -13, -19, 48];

console.log("Pradiniai duomenys");
console.log("numbers1:", numbers1, "numbers2", numbers2);
console.log(
  "-------------------------------------------------------------------"
);

// 1. Parašykite funkciją, kuri iš masyvo atrenka (į naują masyvą) tiktai lyginius skaičius
let grazinti = [];

function giveMeAllLyginiai(arr) {
  let allEvenNumberFromArr = []; // cia sudesim visus lyginius
  // debugger;
  for (let index = 0; index < arr.length; index++) {
    // cia bus atliekama reikalinga procedura kiekvienm masyo el.
    if (arr[index] % 2 === 0) {
      allEvenNumberFromArr.push(arr[index]);
    }
  }
  console.log(allEvenNumberFromArr);
  return allEvenNumberFromArr;
}

// iskviesti fn
giveMeAllLyginiai(numbers1);
giveMeAllLyginiai(numbers2);

// 2. Parašykite funkciją, kuri iš masyvo atrenka (į naują masyvą) nelyginius skaičius

// 3.  Parašykite funkciją, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2
