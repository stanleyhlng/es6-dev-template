import Animal from '../../../src/modules/Animal';

describe('Animal Module Test Suite', function() {
    describe('#name', function() {
        it('should return Animal', function () {
            var animal = new Animal();
            expect(animal.name()).equal('Animal');
        });
    })
});
