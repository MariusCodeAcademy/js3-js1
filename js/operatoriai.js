console.log('operatoriai.js');

// Pradiniai kinamieji
let x = 16;
let y = 4;
let res;
console.log('-- Dvieju nariu operatoriai');
console.log('x:', x, 'y:', y);

res = x + y; console.log('x + y:', res); // Sudetis
res = x - y; console.log('x - y:', res); // Atimtis
res = x * y; console.log('x * y:', res); // Daygyba
res = x / y; console.log('x / y:', res); // Dalyba
res = x % y; console.log('x % y:', res); // Liekana
res = x ** y; console.log('x ** y:', res); // Kelimas laipsniu
res = x ** (1 / y); console.log('x ** (1 / y):', res); // Saknis

res = x + y / 2 + 3; console.log('x + y / 2 + 3:', res); // sudetingesins skaiciavimas
console.log('--- ---- ---- ----- ---- ---- -----');

// vieno nario operatoriai 
let c = 5;
console.log('-- Vieno nario operatoriai');
console.log('c =', c);
// console.log('c++', c++); // Ivygdyti komanda ir tada padidinti vienetu
// console.log('++c', ++c); // Pirmiausia padidinam tada ivygdom komanda
// console.log('c--', c--); // Ivygdyti komanda ir tada pamazinti vienetu
// console.log('--c', --c); // Ivygdyti komanda ir tada pamazinti vienetu

c += 2; console.log('c += 2; c:', c); // Prie esamos c reiksmes pridedam 2 ir irasom atagl i ta pati kintamaji c
c -= 2; console.log('c -= 2; c:', c); // Is esamos c reiksmes atimam 2 ir irasom atagl i ta pati kintamaji c
c *= 2; console.log('c *= 2; c:', c); // esama c reiksme padauginam is 2 ir irasom atagl i ta pati kintamaji c
c /= 2; console.log('c /= 2; c:', c); // esama c reiksme padalinam is 2 ir irasom atagl i ta pati kintamaji c
c %= 2; console.log('c %= 2; c:', c); // Skaiciuoti esamos c vertes liekana is dvieju ir irasom atagl i ta pati kintamaji c
console.log('--- ---- ---- ----- ---- ---- -----');



 
// -- Loginiai operatoriai
let lijoUzvakar = true;
let lijoVakar = false;
let uzvakarTemp = '5';
let vakarTemp = 5;
let siandienTemp = 3;

console.log('-- Loginiai operatoriai');
console.log('---- lygybes ir nelygybes, salyginiai palyginimai');
console.log(
    'lijoUzvakar:', lijoUzvakar, 
    'lijoVakar:', lijoVakar, 
    'uzvakarTemp:', uzvakarTemp,
    'vakarTemp:', vakarTemp,
    'siandienTemp:', siandienTemp
);
console.log('vakarTemp > siandienTemp; ', vakarTemp > siandienTemp);

