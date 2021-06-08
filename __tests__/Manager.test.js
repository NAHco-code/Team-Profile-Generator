const Manager = require('../lib/Manager');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should return object values', () => {

            const name = 'Zeus';
            const ID = 4;
            const email = 'lightning@gmail.com';
            const officeNumber = 10;

            const mangrObj = new Manager('Zeus', 4, 'lightning@gmail.com', 10);

            expect(mangrObj.getName()).toEqual(name);
            expect(mangrObj.getID()).toEqual(ID);
            expect(mangrObj.getEmail()).toEqual(email);
            expect(mangrObj.getOffice()).toEqual(officeNumber);
        });
    });
});
