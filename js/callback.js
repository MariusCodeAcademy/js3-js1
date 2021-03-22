"use strict";
console.log("callback.js");
// debugger;
// --------------- Parametru perduodamos funkcijos ----------------------------------- ------------------------
/*
  Tai tokios funkcijos, kurioms per parametrą reikia perduoti funkciją. Dažniausiai ji vadinasi 'callback'. Tai labai dažna praktika JS kalboje
  ir funkciniame programavime. Tokią metodika labai naudinga tuomet kai norėsime formuoti, spausdinti ar filtruoti, bet dar nežinome pagal kokius
  kriterijus tai atliksime. Tokiu atveju mums praverčia specifinę kodo logiką perduoti funkcijos pavidalu, o standartinius veiksmus palikti išorinėje
  funkcijoje.
*/

/**
 * Si funkcija skirta formuoti naujiems masyvams naudojant kiekviena elementa, ir jy keiciant pagal perduota callback funkcija.
 *
 * @param {array} arr
 * @param {function} callback
 *
 * @return {array} suformuotas masyvas pagal parametru paduota funkcija 'callback'
 */
const mapArray = function (arr, callback) {
  const res = [];
  for (let index = 0; index < arr.length; index++) {
    res.push(callback(arr[index]));
  }
  return res;
};

/**
 * Si funkcija gauna asmens objekta ir grazin string pavidalu varda pavarde ir simynine padeti.
 *
 * @param {object} person - viena asmeni reprezentuojantis objektas
 *
 * @return {string} - suformuotas vardas pavarde ir seimynine padetis
 */
const returnMarrageStatus = function (person) {
  return `${person.name} ${person.surname}: ${
    person.sex === "male"
      ? person.married
        ? "Vedes"
        : "Nevedes"
      : person.married
      ? "Istekejusi"
      : "Neistekejusi"
  }`;
};

// panaudomis abi funkcijas grazinti reikmems
console.log("Callback");

const peaopleMarrageStatuses = mapArray(people, returnMarrageStatus);
printArr(peaopleMarrageStatuses);

// 6. Sukurkite kaitos funkciją, kuri grąžintų objektą su vardu, pavarde ir lytimi. Tuomet panaudoje ją, suformuokite masyvą,
// naudojant funkciją 'mapArray'. Rezultatą atspausdinkite naudodami funkciją 'printArray';

/**
 * Si funkcija grazina varda pavarde ir lyti is person objekto
 *
 * @param {object} person
 *
 * @return {object} - naujas objektas su vardu pavarde ir lytimi
 */
const returnPersonInfo = function (person) {
  //   debugger;
  return {
    name: person.name,
    surname: person.surname,
    sex: person.sex,
  };
};
console.clear();
const res = mapArray(people, returnPersonInfo);
printArr(res);
console.log(res);
