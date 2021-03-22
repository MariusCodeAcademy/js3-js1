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
// userAgeResponces();

function kelintadienis() {
  let day = 4;

  if (day === 1) {
    console.log("Pirmadienis");
  } else if (day === 2) {
    console.log("Antradienis");
  } else if (day === 3) {
    console.log("Treciadienis");
  } else {
    console.log("Kazkuri kita diena");
  }
}
// kelintadienis();

// Switch
function kelintadienisSwitch(day) {
  //   let day = 3;
  // apriboti dienos skaiciu kad jis butu 1 iki 7 imtinai

  if (day > 7) {
    console.error("TOkios saivaites dienos nera");
    return;
  }

  let kuriDiena;

  switch (day) {
    // day yra su kuo mes lyginam
    // reiksme po case yra su kuo lyginam day
    case 1:
      kuriDiena = "Pirmadienis";
      break;
    case 2:
      kuriDiena = "Antradienis";
      break;
    case 3:
      kuriDiena = "Treciadienis";
      break;
    case 4:
      kuriDiena = "Ketvirtadienis";
      break;
    case 5:
      kuriDiena = "Penktadienis";
      break;
    default:
      kuriDiena = "savaigalis";
  }

  console.log("Siandien yra :", kuriDiena);
}
kelintadienisSwitch(8);
