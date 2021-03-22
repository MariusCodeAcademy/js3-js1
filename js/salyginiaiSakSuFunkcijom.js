"use strict";
console.log("Salyginiai sakiniai su funkcijom");

const msgInput = "Kiek jums metu? Iveskite skaiciu.";
const msgError = "Ivedete ne skaiciu.";

// si funkcija grazina true arba false priklausomai ar value yra skaicius.
function checkIfValueIsNumeric(value) {
  // atvejis jei vartotojas ivede '' / tiesiog paspaude ok;
  if (value === "") {
    console.log("Jus nieko neivedete, prasom ivesti skaiciu.");
    return false;
  }

  // atvejis kai turim galimai skaitine verte arba ne
  value = Number(value);
  // patikrinti ar mes gaunam skaiciu? ar gaunam NaN
  if (isNaN(value)) {
    return false;
  } else {
    return true;
  }
}

// gauti is vartotojo input/ reiksme = prompt('msg')

function userAgeResponces() {
  // gauti input
  // ir pagal gauta reiksme atsakyti atitinkama atsakyma
  let age;

  age = prompt(msgInput);

  // atskiras atvejis kur do while loop yra tinkamesnis naudoti uz kitus
  //   do {
  //     age = prompt(age === null ? msgInput : msgError);
  //   } while (isNaN(age) || age < 0);

  // atvejis kai paspausta cancel
  if (age === null) {
    console.warn("Jus nutraukete ivedima");
    return;
  }

  if (!checkIfValueIsNumeric(age)) {
    // tai nera skaicius
    console.error("prasom ivesti skaiciu");
    return;
  }

  // patikrinti ar ivesta skaitine reikme yra daugiau uz 0
  // arba maziau uz 150

  // bendra salyga su loginiu OR
  if (age < 0 || age > 150) {
    console.error("amzius negali buti maziau uz 0 arba");
    console.error("amzius negali buti daugiau uz 150");
    return;
  }

  if (age < 3) {
    console.log("Nedek daiktu i burna");
  } else if (age < 10) {
    // 3 - 10
    console.log("Nedek kreideliu i burna");
  } else if (age < 20) {
    console.log("Siulau lavinti save");
  } else if (age < 30) {
    console.log("Laikas subresti");
  } else if (age < 60) {
    console.log("Pasitikrinti sveikata");
  } else {
    console.log("jusu amziu dar neaprasytas 10 150");
  }

  // jei amziu yra nuo 0 iki 3
  // atsakymas "nedek daiktu i burna"
}
userAgeResponces();

function terenaryOperator(value) {
  const msgDaugiau = "daugiau uz 54";
  const msgMaziau = "maziau uz 54";
  let msg = "";
  // jei reiksme yra daugiau uz 54
  // lg daugiau uz 54

  // lg maziau uz 54

  //   if (value > 54) {
  //     console.log(msgDaugiau);
  //   } else {
  //     console.log(msgMaziau);
  //   }

  // terenary operator - vienos eilute if else statement
  // salyga ? jei true : jei false;
  //   value > 54 ? console.log(msgDaugiau) : console.log(msgMaziau);

  msg = value > 54 ? msgDaugiau : msgMaziau;

  console.log(msg);
}

// terenaryOperator(54);
