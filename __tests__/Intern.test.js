const Intern = require('../lib/Intern');

describe('Employee', () => {
    describe('Initialization', () => {
        it('should return object values', () => {

            const name = 'Hermes';
            const ID = 3;
            const email = 'messenger@gmail.com';
            const school = 'Odyssey'

            const intObj = new Intern('Hermes', 3, 'messenger@gmail.com', 'Odyssey');

            expect(intObj.getName()).toEqual(name);
            expect(intObj.getID()).toEqual(ID);
            expect(intObj.getEmail()).toEqual(email);
            expect(intObj.getSchool()).toEqual(school);
        });
    });
});
