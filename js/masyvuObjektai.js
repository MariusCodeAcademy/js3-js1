console.log("___ masyvu masyvai ___");

let masyvas = [
  //0  1  2
  [1, 2, 3], // 0
  [4, 5, 6], // 1
  [7, 8, [10, 11, 12]], // 2
];

console.log(masyvas[0][1]);

// gauti 9
console.log(masyvas[2][2]);

console.log(masyvas[2][2][2]);

console.log("___ objektu masyvai ___");

let persons = [
  { name: "Bob", age: 23, town: "Vilnius", isStudent: true }, // 0
  { name: "Jane", age: 25, town: "London", isStudent: false }, // 1
  { name: "James", age: 20, town: "Vilnius", isStudent: true }, // 2
  { name: "Mary", age: 21, town: "Tokyo", isStudent: true }, // 3
  { name: "Gintaras", age: 26, town: "Vilnius", isStudent: false }, // 4
  { name: "June", age: 19, town: "Tokyo", isStudent: true }, // 5
];

console.log("pirmas objektas", persons[0]);
console.log("antro asmens vardas:", persons[1].name);

// atspausdinti consoleje vardu zmoniu kurie yra studentai

// 1. sukti cikla per masyva
// 3. jei tai yra studentas tai mes norim atspausdinti varda.
console.clear();
for (let i = 0; i < persons.length; i++) {
  // console.log(persons[i]);
  // 2 ciklo metu mes turim patikrinti ar asmuo yra studentas
  if (persons[i].isStudent === true) {
    console.log(persons[i].name, "is a student ");
  }
}

// 1.atspausdinti studentu vardus ir miestus kuriu amziu yra daugiau nei 22 metai

// 2. parasyti funkcija kuri grazina paduota masyva isrikiuota gal vardus

// 3. parasyti funkcija kuri gazina tik studentus is vilniaus

//3a. parasyti funkcija kuri gazina tik studentus is vilniaus ir jaunesni nei 23

// 4. funkcija kuri grazina asmenu vardu ir metus kurie yra is Tokyo arba Londono;

const blogs = [
  {
    title: "my first blog",
    author: "john doe",
    body:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea facilis dignissimos inventore at doloremque sunt sint numquam nemo quibusdam, cupiditate tenetur reiciendis cum commodi odit laudantium omnis officiis cumque?",
  },
  {
    title: "my second blog",
    author: "john doe",
    body: "Lorem que?",
  },
];

// console.log(blogs[1].body);
let blog1 = {
  title: "my first blog",
  author: "john doe",
  body:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ea facilis dignissimos inventore at doloremque sunt sint numquam nemo quibusdam, cupiditate tenetur reiciendis cum commodi odit laudantium omnis officiis cumque?",
};
let blog2 = {
  title: "my second blog",
  author: "john doe",
  body: "Lorem que?",
};
