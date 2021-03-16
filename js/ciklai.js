console.log('ciklai.js');
/*  Dažnai programavime reikia kartoti kodą (su mažom variacijom) daug kartų:
  - rikiavimui, filtravimui, atrinkimui, validacijai, ir kitiems algoritmams.
  Tokiam tikslui mums praverčia progravaimo įrankis - ciklas.
  Ciklai yra kelių rūšių, bet pasižymi tais pačias kriterijais. 
  Ciklas privalo turėti tokius 3 logines sudedamąsias dalis:
  -- tęstinumo/baigtinė salyga -> Nurodo ar ciklas tęsis, ar užsibaigs/
  -- pradinis/darbinis kitamasis -> Kintamasis kuris privalo dalyvauti tęstinumo/baigties salygoje.
  -- žingsnis -> tai pradinio/darbinio kintamojo kitimas, jog jis įtakotų tęstinumo salygą, ir artėtų link baigtinės salygos.
*/


console.log('-------------WHILE CIKLAS-------------');


let kartai = 0;

while (kartai < 10) {
    // loop body - vygdomas tol kol salyga skliausteliuose yra true
    // console.log('testing', kartai);
    console.log(`<li>item ${kartai}</li>`);
    kartai++;
}


console.clear();
console.log('------------- DO WHILE CIKLAS-------------');
let num = 0;
do {
    // loop body
    console.log('do while works', num);
    num++
    
} while(num < 10);

console.clear();
console.log('------------- FOR CIKLAS -------------');

// for (<inicijuojam kintamaji>; <salyga iki kada vyks ciklas>; <pokytis arba step>) { // loop body }

for (let i = 0; i < 10; i++) {
    // loop body
    console.log('for ciklas works', i);
}


// for ciklo pagalba atspausdinti console skaicius nuo 0 iki 56
// for ciklo pagalba atspausdinti console skaicius nuo 34 iki 100

for(let i = 34; i < 100 ; i++) {
    // console.log(i);
}
// for ciklo pagalba atspausdinti console skaicius nuo 99 iki 23
for(let i = 99; i >= 23 ; i--) {
    // console.log(i);
}
// for ciklo pagalba atspausdinti console skaicius nuo 0 iki 72 kas trecia sk
for (let i = 0; i <= 72; i++) {
    if (i % 3 !== 0) {
        continue;
    } else {
        console.log(i);
    }
    
}

// for ciklo pagalba li elemetus su pavadinimu  10
// <li>elementas 0 </li>
// <li>elementas 1 </li>
// <li>elementas 2 </li>
console.clear();
let sarasas = '';
for (let i = 0; i <= 10; i++) {
    // console.log(i);
    // console.log(`<li>elementas ${i} </li>`);
    sarasas = sarasas + `<li>elementas ${i} </li>`;
}
console.log(sarasas);


const appDivas = document.getElementById('app');

console.log(appDivas);

appDivas.innerHTML = sarasas;








