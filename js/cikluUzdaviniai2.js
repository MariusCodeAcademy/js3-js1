"use strict";
console.log("------------- FOR CIKLAS Dirba su masyvais -------------");

// in           0    1   2   ....
let numbers = [10, -46, -28, 8, -1, -44, 49, -24, 47, -41];
let numbers1 = [1, -43, -40, -14, -37, -8, 41, 27, -36, 36];
let sakinys = "Labas vakaras zmones js yra ne taip ir sunku";

// 1. parasyti funkcija kuri grazina nauja masyva:
//    a. tik su teigiamom reiksmem / [ 10, 8, 49, 47 ]
//    b. tik su neigiamom reiksmem
//    c. paverte neigiamsu skaicius i teigiamus
//    d. grazinti is antros puses

//    e. console atspausdin masyva kuris atrodo taip pat kaip kode
//    [1, -43, -40, -14, -37, -8, 41, 27, -36, 36];

//  extra funkcija kuri grazini sakini is priesingos puses;

// extra extra grazinti masyva us apsuktom neigiamom sekom
// console.log(numbers);

// a tik su teigiamom reiksmem / [ 10, 8, 49, 47 ]

function getPositiveArr(arr) {
  // sukurti vieta kur issaugosim teigiamas reiksmes
  let postiveArr = [];

  for (let i = 0; i < arr.length; i++) {
    // ar einamasis el yra daugiau uz 0
    if (arr[i] > 0) {
      postiveArr.push(arr[i]);
    }
  }
  return postiveArr;
}

console.log(getPositiveArr(numbers));
console.log(numbers);

function makeAllPositiveArr(arr) {
  let allPositive = [];
  let tempValue;
  for (let i = 0; i < arr.length; i++) {
    // norim paversti neigiamus teigiamais
    if (arr[i] > 0) {
      allPositive.push(arr[i]);
    } else {
      // paverciam skaiciu i teigiama
      tempValue = arr[i] * -1;
      allPositive.push(tempValue);
    }
  }
  console.log("all positive", allPositive);
  return allPositive;
}

makeAllPositiveArr(numbers);

console.clear();
console.log(numbers);

console.log("----Is antros puses----");

function reverseArr(arr) {
  let reversedArr = [];
  // pradine index reiksme yra masyvo ilgis - 1
  for (let index = arr.length - 1; index >= 0; index--) {
    reversedArr.push(arr[index]);
  }
  console.log("reversedArr:", reversedArr);

  return reversedArr;
}

reverseArr(numbers);
console.log(numbers);
