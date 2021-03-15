console.log('test.js');

let x = 17; 
let y = 20;
let z = -4;

if (x > y) {
   // vyks jei true 
   console.log('x yra daugiau uz y');
} else {
    // vyks tik jei skiausteliuose yra false
    console.log('x nera daugiau uz y');
}


// palyginti ar z yra daugiau uz y
if (z > y) {
    console.log('z daugiau uz y');
} else {
    console.log('z nera daugiau uz y');

}

// palyginti ar x yra maziau uz y - z 
let yMinusZ = y - z;
if (x < yMinusZ) {
    console.log(x +' yra maziau uz ' + yMinusZ);
} else {
    console.log('x nera maziau uz y - z');
}

// palyginti ar visu kintamuju suma yra daugiau uz 34
if ( (x + y + z) > 34) {
    console.log('visu kintamuju suma yra daugiau uz 34');
} else {
    console.log('visu kintamuju suma nera daugiau uz 34', (x + y + z));
}

// palyginti ar z yra teigiamas
if (z > 0) {
} else {
    console.log('z teigiamas');
    console.log('z neigiamas');
}

// ar yra gaunama liekana x is 4 (teigiamo z) 

if ((x % (z * -1)) === 0) {
    console.log('nelieka');
} else {
    console.log('lieka');
}


if ( 5 < 1) {
    console.log('5 < 1');
}

let num1 = 0;

// patikrinti ar num1 yra teigiamas ir ar maziau uz 60

if (num1 > 0) {
    // num1 yra daugiau  uz 0 teigiamas
    console.log('teigiamas');
} else if (num1 < 60) {
    console.log('neigiamas ir maziau uz 60');
} else {
    console.log('nei teigiamas nei negiamas');
}
