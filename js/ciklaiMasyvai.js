console.log("------------- FOR CIKLAS Dirba su masyvais -------------");

//               0       1        2         3
let colors = ["blue", "green", "black", "white"];

// atspasdinam visa masyva paprastai
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log("--- FOR CIKLAS -----");
console.clear();
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.clear();
// in           0    1   2   ....
let numbers = [10, -46, -28, 8, -1, -44, 49, -24, 47, -41];
let numbers1 = [1, -43, -40, -14, -37, -8, 41, 27, -36, 36];

// atspausdinti visus masyvo elementus
function logArrayValues(masyvas) {
  // debugger;
  for (let i = 0; i < masyvas.length; i++) {
    // atliekam ka reikia kiekvienam masyvo elementui
    // el reiksme yra numbers[i]
    // index yra i
    console.log("reiksme:", masyvas[i]);
    // console.log("index:", i);
  }
}
logArrayValues(numbers);
console.log("-----------");

logArrayValues(numbers1);
console.clear();
// atspausdinti visus masyvo elementus padaugintus is dvieju
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}
console.clear();
console.log("------Skaiciai daugiau uz 8-----");

// atspausdinti visus masyvo elementus kurie yra didesni uz 8
for (let i = 0; i < numbers.length; i++) {
  // ar esamas einamas el yra daugiau uz 8
  if (numbers[i] > 8) {
    console.log(numbers[i]);
  }
}

// parasyti funkcija kuri grazina visu masyvo elem suma
function sumArray(masyvoPavadinmas) {
  let total = 0;
  // debugger;
  for (let i = 0; i < masyvoPavadinmas.length; i++) {
    // kiekvieno el reiksme norim prideti prie total
    total += masyvoPavadinmas[i];
  }
  return total;
}
console.log("sum array", sumArray(numbers));
console.log("sum array 1", sumArray(numbers1));

// parasyti funkcija kuri grazina visu masyvo elem didesniu uz 13 sandauga

function multiplyArrValues(masyvas) {
  let total = 1;
  for (let i = 0; i < masyvas.length; i++) {
    // jei skaiciu daugiau uz 13 tai dauginam jei ne praleidziam
    // if (masyvas[i] > 13) {
    //   total *= masyvas[i];
    // }
    // continue iskarto pereina prie step dalies (i++);
    if (masyvas[i] < 13) continue;
    total *= masyvas[i];
  }
  return total;
}
console.log("multiply", multiplyArrValues(numbers));

// parasyti funkcija kuri grazina masyvo elementu vidurki

// pseudo codas leidzia mums suprasti ir susiskaidyti
// problema ir tada lengviau ja isspresti

// pseudo kodo pavyzdys:

// 1. sukurti funkcija.
// 2. funkcija paima masyva kaip argumenta
function getAverage(masyvas) {
  // 3. f viduje mes turim susumuoti visus el
  let total = 0;
  // 3a. sukti cikla i sumuoti viska i total
  for (let i = 0; i < masyvas.length; i++) {
    total += masyvas[i];
  }
  console.log("total", total);
  // 4. padalinti suma is nariu skaiciau
  let average = total / masyvas.length;
  // 5. grazinti gauta rezultata
  return average;
  // return total / masyvas.length;
}

// iskviesti funkcija
console.log(getAverage(numbers));
