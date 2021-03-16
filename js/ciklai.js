console.log('ciklai.js');

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






