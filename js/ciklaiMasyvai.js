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

// parasyti funkcija kuri grazina masyvo elementu vidurki
