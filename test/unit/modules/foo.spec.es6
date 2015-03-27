import foo from '../../../src/modules/foo';

console.log('foo.spec.es6');

describe('"foo" Module Test Suite', function() {
    it('should return foo', function () {
        console.log(foo);
        expect(true).to.be.true;
    });
});
