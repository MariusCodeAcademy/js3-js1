"use strict";
console.log("callback.js");

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
