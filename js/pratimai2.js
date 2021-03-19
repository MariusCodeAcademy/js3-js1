"use strict";

const numbers1 = [1, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -1, -8, 2, 4];
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
// giveMeAllLyginiai(numbers1);
// giveMeAllLyginiai(numbers2);

// 2. Parašykite funkciją, kuri iš masyvo atrenka (į naują masyvą) nelyginius skaičius

// 3.  Parašykite funkciją, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2
function multiplyArrByTwo(arr) {
  // arr yra funkcijos vietinis kintamasis kurio reiksme bus paduota iskvietimo metu
  let padaugintiIsDvieju = []; // jei reikia susumuoti arba grazinti string(eilute), arba nauja masyva. tai susikuriam tuscia kintamaji galutinei vertei issaugoti
  for (let index = 0; index < arr.length; index++) {
    // ciklas kuris sukasi ir ima kiekviena reiksme is masyvo
    // visi reikalingi skaiciavimai ar kitos operacijos atliekamos cia {}
    // reikme = arr[index]
    // arr[index] * 2
    padaugintiIsDvieju.push(arr[index] * 2);
  }
  return padaugintiIsDvieju; // grazinam galutinia reiksme;
}

let x2Arr = multiplyArrByTwo(numbers1);
// console.log("x2Arr", x2Arr);

let x2Arr2 = multiplyArrByTwo(numbers2);
// console.log("x2Arr2", x2Arr2);

// 4.  Parašykite funkciją, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus;

function multiplyArrByArg(arr, multiplyByHowMuch) {
  // arr yra funkcijos vietinis kintamasis kurio reiksme bus paduota iskvietimo metu
  let padaugintiIsArg = []; // jei reikia susumuoti arba grazinti string(eilute), arba nauja masyva. tai susikuriam tuscia kintamaji galutinei vertei issaugoti
  for (let index = 0; index < arr.length; index++) {
    // ciklas kuris sukasi ir ima kiekviena reiksme is masyvo
    // visi reikalingi skaiciavimai ar kitos operacijos atliekamos cia {}
    // reikme = arr[index]
    // arr[index] * 2
    padaugintiIsArg.push(arr[index] * multiplyByHowMuch);
  }
  console.log("padaugintiIsArg", padaugintiIsArg);

  return padaugintiIsArg; // grazinam galutinia reiksme;
}
// prompt("iveskite slaptazodi");
// multiplyArrByArg(numbers1, 10);
// multiplyArrByArg(numbers2, 2);

// let isKiek = prompt("is kiek padauginti");
// multiplyArrByArg(numbers1, isKiek);

// 6. Parašykite funkciją, kuri suskaičiuoja dvejetus masyve

// [1, 2, -9, 8, 7, 9, 4, -5, 2, -6, -1, -8, 2, 4];
function countMeTwos(masyvas) {
  let dvejetuRadau = 0;
  for (let index = 0; index < masyvas.length; index++) {
    if (masyvas[index] === 2) {
      // ka darau jei reiksme yra lygu du
      dvejetuRadau = dvejetuRadau + 1;
      // dvejetuRadau += 1;
      // dvejetuRadau++;
    }
  }
  console.log("-- dvejetu radau: ", dvejetuRadau);
  return dvejetuRadau;
}

// countMeTwos(numbers1);
// let count = 0

// kaskarta kai randam 2jeta padarom count++
// el === 2 count = count + 1

// grazinam skaitliuka

// 7. Parašykite funkciją, kuri suskaičiuoja argumentu nurodyto skaičiaus pasikartojimų skaičių masyve.
function countArgTimes(masyvas, kokioSkaiciauIeskom) {
  let skaitliukas = 0;
  for (let index = 0; index < masyvas.length; index++) {
    if (masyvas[index] === kokioSkaiciauIeskom) {
      skaitliukas++;
    }
  }
  console.log(
    `jus ieskojote skaiciaus ${kokioSkaiciauIeskom}. Radome ${skaitliukas} vnt`
  );

  return skaitliukas;
}
// countArgTimes(numbers1, 5);
// countArgTimes(numbers1, -9);
// countArgTimes(numbers1, 2);

// 8. parasyti funkcija kuri suranda dvejeto indexa masyve ir ji grazina
// surade dvejeta nutraukti cikla.

function firstIndexOfTwo(masyvas) {
  const masyvoIlgis = masyvas.length;
  for (let index = 0; index < masyvoIlgis; index++) {
    if (masyvas[index] === 2) {
      // radau dvejeta noriu grazinti index
      console.log("index", index);
      return index; // sustabdo esamos funkcijos vygdyma ir grazina reiksme
    }
  }
}
// firstIndexOfTwo(numbers2);

// 9. parasyti funkcija kuri suranda argumento indexa masyve ir ji grazina
// surade argumento nutraukti cikla.

function findMeFIrstIndexOf(arr, whatToFind) {
  const arrLength = arr.length;
  for (let index = 0; index < arrLength; index++) {
    if (arr[index] === whatToFind) {
      console.log("whatToFind index:", index);
      return index; // isiminti index
    }
  }
  // pasiziurim ar
}
findMeFIrstIndexOf(numbers1, -9);
findMeFIrstIndexOf(numbers1, 2);
findMeFIrstIndexOf(numbers1, 7);

// 10. Parašykite funkciją, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.

// sukam cikla per visas reiksmes

// jei rasim ieskoma reiksme isiminsim index

// ar radom reiksme

// jei radom tai grazinam index

// jei neradom grazinam -1

// 11 pasinaudojant 10 pratimo funkcija parasyti salygini sakini suzinoti ar skaicius 2, 5, -9
// yra numbers1 masyve ar ne

// jei radom skai tai atspausdini "2 rastas ir jo index yra xx"
// jei neradom spausdinam "atsiprasome skaiciu 2 nerasatas";
