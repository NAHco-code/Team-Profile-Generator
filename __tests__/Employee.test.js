const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should return object values', () => {

            const name = 'Calypso';
            const ID = 1;
            const email = 'Calypso@gmail.com';

            const empObj = new Employee('Calypso', 1, 'Calypso@gmail.com');

            expect(empObj.getName()).toEqual(name);
            expect(empObj.getID()).toEqual(ID);
            expect(empObj.getEmail()).toEqual(email);
        });
    });
});
