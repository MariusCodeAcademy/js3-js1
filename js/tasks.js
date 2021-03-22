"use strict";

const people = [
  {
    //0
    name: "Jonas",
    surname: "Jonaitis",
    sex: "male",
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    // 1
    name: "Severija",
    surname: "Piktutytė",
    sex: "female",
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: "Samanta",
    surname: "Uostauskienė",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];
// funkcijos delclaracija
// function add5(value) {
//   console.log(value + 5);
// }

// add5(10);

// // function expression
// const add10 = function (value) {
//   console.log(value + 10);
// };

// add10(10);

// 1. Parašykite funkciją, kuri atspausdina visus žmones eilutėmis
// function expression budu pasiimti masyva kaip argumenta.
// console.log(people[0]);
// console.log(people[1]);
// console.log(people[2]);
const printArr = function (arr) {
  for (let index = 0; index < arr.length; index++) {
    // visa kas cia parasyta bus kartojam tiek kartu kiek yra nariu arr masyve
    console.log(arr[index]);
  }
};
// printArr(people);

// 2. Parašykite funkciją, kuri atspausdina visų žmonių vardus ir pavardes, atskirtus brūkšneliu, pvz.:
// Serbentautas-Bordiūras
const printNamesSurnames = function (arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    // visa kas cia parasyta bus kartojam tiek kartu kiek yra nariu arr masyve
    console.log(`${arr[idx].name}-${arr[idx].surname}`);
  }
};
// printNamesSurnames(people);

// 3. Parašykite funkciją, kuri atspausdina visų žmonių vardus ir pavardes bei santuokos statusą, tokiu būdu
//  Jonas Bikas: Vedęs
//  Jonas Bikas: Nevedęs
//  Samantas Kultaitytė: Ištekėjusi
//  Samantas Kultaitytė: Neištekėjusi

const printNameAndStatus = function (arr) {
  let marrigeStatus;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index].sex === "male") {
      // vyras
      marrigeStatus = arr[index].married ? "vedes" : "nevedes";
    } else {
      // moteris
      marrigeStatus = arr[index].married ? "Ištekėjusi" : "Neištekėjusi";
    }
    // spausdinti rezultatus
    console.log(`${arr[index].name} ${arr[index].surname}: ${marrigeStatus}`);
  }
};
// printNameAndStatus(people);

// sukant cilka reikia:
// pasitikrinti ar einamosio reiksmes zmogus yra vyras ar moteris

// jeigu vyras ir reiksme vedes yra true tai "vardenis pavardenis: vedes";

// jeigu moteris ir istekejus "vardene pavardene: istekejusi";

// 4. Parašykite funkcijas pagal 2 ir 3 užduotį, kurios vietoj to kad spausdintų, rezultatus grąžintų.

const returnNamesSurnamesArray = function (arr) {
  // kazkur padeti rezulta
  const namesSurnamesArr = [];
  for (let idx = 0; idx < arr.length; idx++) {
    // visa kas cia parasyta bus kartojam tiek kartu kiek yra nariu arr masyve
    //   console.log(`${arr[idx].name}-${arr[idx].surname}`);
    namesSurnamesArr.push(`${arr[idx].name}-${arr[idx].surname}`);
  }
  return namesSurnamesArr;
};
let namesSurnames = returnNamesSurnamesArray(people);
// console.log("Vardai ir pavardes");
// printArr(namesSurnames);

const returnNameAndStatusArr = function (arr) {
  const namesAndStatuses = [];
  let marrigeStatus;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index].sex === "male") {
      // vyras
      marrigeStatus = arr[index].married ? "vedes" : "nevedes";
    } else {
      // moteris
      marrigeStatus = arr[index].married ? "Ištekėjusi" : "Neištekėjusi";
    }
    // sudeti rezultatus i nauja masyva
    namesAndStatuses.push(
      `${arr[index].name} ${arr[index].surname}: ${marrigeStatus}`
    );
  }
  return namesAndStatuses;
};
// console.clear();
let namesAndStatus = returnNameAndStatusArr(people);
// console.log("Vardai pavardes ir statusai");
// printArr(namesAndStatus);

// 4a.Tuomet rezultatai būtų atspausdinti naudojant funkciją aprašytą pirmu punktu.

//
//
//
//
//
//
//
//
//
