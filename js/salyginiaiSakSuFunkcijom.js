"use strict";
console.log("Salyginiai sakiniai su funkcijom");

// si funkcija grazina true arba false priklausomai ar value yra skaicius.
function checkIfValueIsNumeric(value) {
  // atvejis jei vartotojas ivede '' / tiesiog paspaude ok;

  //   debugger;
  value = Number(value);
  // patikrinti ar mes gaunam skaiciu? ar gaunam NaN
  if (typeof value !== "number" || isNaN(value)) {
    console.warn("ivedete ne skaiciu");
    return;
  }
}

// gauti is vartotojo input/ reiksme = prompt('msg')

function userAgeResponces() {
  // gauti input
  // ir pagal gauta reiksme atsakyti atitinkama atsakyma
  let age;

  age = prompt("Kiek jums metu?");

  if (age === null) {
    console.warn("Jus nutraukete ivedima");
    return;
  }

  console.log("age", age);

  if (checkIfValueIsNumeric(age)) {
    // tai yra skaicius
  } else {
    // tai nera skaicius
  }

  // patikrinti ar ivesta skaitine reikme yra daugiau uz 0
  // arba maziau uz 150

  // atskirais sakiniais
  //   if (age < 0) {
  //     console.error("amzius negali buti maziau uz 0");
  //     return;
  //   }
  //   if (age > 150) {
  //     console.error("amzius negali buti daugiau uz 150");
  //     return;
  //   }

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
