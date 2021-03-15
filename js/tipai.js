console.log('tipai.js');

console.log('-- Duomenu tipai --');

console.log('-- -- primitievieji duomenu tipai');

console.log('-- -- -- Number');

let a = Number('7');
let b = 15.65;
let c = -6168465.351651496;

console.table([
    {variable: 'a', value: a, dataType: typeof a},
    {variable: 'b', value: b, dataType: typeof b},
    {variable: 'c', value: c, dataType: typeof c},
]);

console.clear()
console.log('-- -- -- String');
let e = 'labas';
let f = 'vakaras';
let ff = 'lietuva';
let g = e + ' ' + f + ' ' + ff + '!'; // senesnis budas sudurti stringus
let h = `${e} - ${f} ${ff}! papildomas textas`;
let hh = String(765);

console.log('e:', e, 'tipas:', typeof e );
console.log('f:', f, 'tipas:', typeof f );
console.log('ff:', ff, 'tipas:', typeof ff );
console.log('g:', g, 'tipas:', typeof g );
console.log('h:', h, 'tipas:', typeof h );
console.log('hh:', hh, 'tipas:', typeof hh );

console.clear()
console.log('-- -- -- Boolean');
// true arba false,  1 arba 0

let dabarLyja = false; 
let dabarPavasaris = Boolean(1);
let arSiandienSauleta = Boolean('false')

console.log('dabarLyja:', dabarLyja, 'tipas:', typeof dabarLyja);
console.log('dabarPavasaris:', dabarPavasaris, 'tipas:', typeof dabarPavasaris);
console.log('arSiandienSauleta:', arSiandienSauleta, 'tipas:', typeof arSiandienSauleta);








