const Engineer = require('../lib/Engineer');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should return object values', () => {

            const name = 'Davy Jones';
            const ID = 2;
            const email = 'djLocker@gmail.com';
            const github = 'flyingDutchman';

            const engObj = new Engineer('Davy Jones', 2, 'djLocker@gmail.com', 'flyingDutchman');

            expect(engObj.getName()).toEqual(name);
            expect(engObj.getID()).toEqual(ID);
            expect(engObj.getEmail()).toEqual(email);
            expect(engObj.getGithub()).toEqual(github);
        });
    });
});
