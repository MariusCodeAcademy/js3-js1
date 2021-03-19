const peopleArray = [
  {
    id: 1,
    name: "Serbentautas",
    surname: "Bordiūras",
    age: 31,
  },
  {
    id: 2,
    name: "Monitorė",
    surname: "Vaizdinienė",
    age: 28,
  },
  {
    id: 3,
    name: "Sandra",
    surname: "Barantaitė",
    age: 32,
  },
  {
    id: 4,
    name: "Velinas",
    surname: "Dviratis",
    age: 25,
  },
  {
    id: 5,
    name: "Vajetauskas",
    surname: "Ištiktenis",
    age: 11,
  },
  {
    id: 6,
    name: "Kęstas",
    surname: "Paskęstas",
    age: 12,
  },
  {
    id: 7,
    name: "Marytė",
    surname: "Grėblytė",
    age: 44,
  },
];

console.log("peopleArray:", peopleArray);

// atspausdini monitore vaizdienes amziu
console.log("monitore", peopleArray[1].age);
console.log("monitore", peopleArray[5].surname);

// 1. Atspausdintikie consoleje visus vardus,
function prinMeNames(arr) {
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index].name);
  }
}
prinMeNames(peopleArray);

// 2. sukurkite nauja masyva ir uzpildykite ji pavardemis,

// 3. sukurkite funkcija, kuri prideda prie kiekvieno amziaus texta ' metai'

// 4. sukurkite funkcija kuri ima peopleArray kaip argumenta ir grazina li elementus su 'vardas pavarde yra metai amziaus' reiksmemis

// 5 . Atrinkite naują žmonių masyvą, kuriame būtų tik jaunesni nei 30 metų žmonės. Atspausdinkite.

// 6. Suskaičiuokite visų žmonių esančių 'peopleArray' amžiaus vidurkį. Atspausdinkite.

// 7 . parasyti funkcija kuri pasiima masyva kaip argumenta ir grazina nauja masyva isrikiuota pagal
// name
// kitu atveju pagal age
