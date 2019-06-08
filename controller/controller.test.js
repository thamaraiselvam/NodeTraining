const { expect } = require('chai');
const calculatorController =  require('./calculator');

describe('Calculator Test', () =>{
    it('should add 2 numbers', () => {
        expect(calculatorController.add(2, 5)).to.be.eql(7);
    })
})