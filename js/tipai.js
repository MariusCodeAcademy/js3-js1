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






