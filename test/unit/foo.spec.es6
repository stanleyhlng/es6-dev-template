// console.log('HERE#1');
// require(['src/modules/foo.es5'], function(foo) {
//     console.log('HERE#2');
//     console.log('DEBUG', foo);
// });
//
//
// require(['src/modules/asap.es5'], function(asap) {
//     console.log('HERERERERE');
//     describe('asap.es5 test suite', function() {
//         it('should say sth', function(done) {
//             asap(function () {
//                 console.log('hello world');
//                 done();
//             });
//         });
//     });
// });

import foo from './modules/foo';

describe('foo module', function() {
    it('should return foo', function () {
        console.log(foo);
        expect(true).to.be.true;
    });
});
