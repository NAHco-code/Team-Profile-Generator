const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, ID, email, github) {
        super(name, ID, email)
        this.github = github;
    }
    getRole() {
        return "Engineer";
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer;
