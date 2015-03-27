import foo from './modules/foo';
console.log('From module foo >>> ', foo);

import bar from './modules/bar';
console.log('From module bar >>> ', bar);

import * as math from './modules/math';
console.log('2π = ' + math.sum(math.pi, math.pi));

import asap from './modules/asap';
asap(function() {
    console.log('From module asap >>> ', 'hello async world!');
});
