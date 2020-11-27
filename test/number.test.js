const assert = require('assert')
const { handleNumber } = require('../function/number');
describe('INTEGER', function(){
    describe('addition', function(){
        it('add 5 to 3',function(){
            // GIVEN
            // WHEN 
            // THEN 
            assert.strictEqual(handleNumber('addition',5,3), 2)
        });
    });
    describe('soustraction', function() {

    });
});

// TDD => TEST DRIVEN DEVELOPPEMENT
// mocha chai, chai-as-promised sinon, sinon-chai , proxyquire, 