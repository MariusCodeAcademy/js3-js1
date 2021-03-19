"use strict";
console.log("Salyginiai sakiniai");

// gauti is vartotojo input/ reiksme = prompt('msg')

// prompt("iveskite kazka");

// let userSaid = prompt("iveskite kazka");

// jei nieko neivedem tai gaunam null
// if (userSaid === null) {
//   console.log("It is definately NULL");
// }

// console.log("userSaid", userSaid);
// console.log("userSaid typeof", typeof userSaid);

function userAgeResponces() {
  // gauti input
  // ir pagal gauta reiksme atsakyti atitinkama atsakyma
  let age;

  age = prompt("Kiek jums metu?");
  //   debugger;
  age = Number(age);
  // patikrinti ar mes gaunam skaiciu? ar gaunam NaN
  if (typeof age !== "number" || isNaN(age)) {
    console.warn("ivedete ne skaiciu");
    return;
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
  } else {
    console.log("jusu amziu dar neaprasytas 10 150");
  }

  // jei amziu yra nuo 0 iki 3
  // atsakymas "nedek daiktu i burna"
}
userAgeResponces();
