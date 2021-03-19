"use strict";

let automobilis = {
  // key: value,
  marke: "Opel", // 0
  model: "Astra", // 1
  metus: 2005,
  spalva: "Juoda",
  variklioTuris: 2.0,
  dauzta: true,
  kuroTipas: "dyzelis",
};

let myKey = "dauzta";

// pasiekiam savybes per ju rakta arba key

console.log(automobilis["model"]);
console.log(automobilis[myKey]);
console.log(automobilis.metus);

console.log(automobilis.marke + " " + automobilis.model);

// Savybiu pakeitimas
automobilis.model = "Vectra";
console.log(automobilis);
automobilis.spalva = "Balta";
console.log(automobilis);
automobilis.variklioTuris = automobilis.variklioTuris + " litrai";
// jei nurodomo key nera jis sukuriamas. Pridedame savybe
automobilis.duruSk = 5;
console.log(automobilis);

console.clear();
// Primityvus tipas vs Reference tipas

// primityvaus tipo kintamuju atvejis
let a = 11;
let b = a;

a = 17;
console.log("a:", a, "b:", b);

// reference tipo kinamuju atvejis
// debugger
let c = { num: 11 };
let d = c;
// pakeiciam c arba d jie abu keiciasi nes rodo i ta pacia vieta atmintyje
c.num = 17;

console.log("c.num:", c.num, "d.num:", d.num);

// Nuorodos(reference) tipo kintamuju reiksmiu kopijavimas

let e = { nr: 50 };

let eJson = JSON.stringify(e);

console.log("eJson:", eJson);

let eBackToJsObj = JSON.parse(eJson);

console.log("eBackToJsObj:", eBackToJsObj);

e = { nr: 50 };
let g = JSON.parse(JSON.stringify(e));

e.nr = 70;

console.log("e.nr:", e.nr, "g.nr:", g.nr);

// palyginimas objektu

let pirmas = { sk: 16 };
let antras = { sk: 16 };

// objektu payginimui === netinka
console.log(pirmas === antras);
console.log(pirmas.sk === antras.sk);

// Masyvas yre reference tipo;

let masyvas = [1, 2, 3];
// prilygina atminties vieta
// let kopija = masyvas;
// spread operatorius isskleidzia masyva
let kopija = [...masyvas];

masyvas[1] = 10;

console.log(kopija);
