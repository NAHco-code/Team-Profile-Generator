// set dependencies
const inquirer = require('inquirer'); //*prompt functionality
const fs = require('fs'); //*access file system
const util = require('util'); //*needed for promisify
// const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const generateHTML = require('./src/generate-html');
const writeFileAsync = util.promisify(fs.writeFile);
const team = []

// write prompts //first prompts for manager information
const initialPrompt = () => {
    return inquirer.prompt([
        { type: 'input', name: 'name', message: 'What is your name?' },
        { type: 'input', name: 'ID', message: 'Please enter your employee ID number' },
        { type: 'input', name: 'email', message: 'Please enter your preferred email address' },
        { type: 'input', name: 'officeNumber', message: 'Please enter your office number' }
    ]);
};

const empType = [
    {
        type: 'list', name: 'role', message: 'Which kind of employee would you like to add?',
        choices: ['Engineer', 'Intern', 'Complete']
    }
];
const engQuestions = [
    { type: 'input', name: 'name', message: 'Engineer name?' },
    { type: 'input', name: 'ID', message: 'Please enter employee ID number of engineer' },
    { type: 'input', name: 'email', message: 'Please enter preferred email address of engineer' },
    { type: 'input', name: 'github', message: 'Please enter github username of engineer' }
];
const intQuestions = [
    { type: 'input', name: 'name', message: 'Intern name?' },
    { type: 'input', name: 'ID', message: 'Please enter employee ID number of intern:' },
    { type: 'input', name: 'email', message: 'Please enter preferred email address of intern:' },
    { type: 'input', name: 'school', message: 'Please enter intern`s associated school:' }
];

const addEmp = async () => {
    let answers = await inquirer.prompt(empType);
    try {
        switch (answers.role) {
            case "Engineer":
                answers = await inquirer.prompt(engQuestions);
                const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.github);
                await console.log(engineer);
                await team.push(engineer);
                await addEmp();
                break;
            case "Intern":
                answers = await inquirer.prompt(intQuestions);
                const intern = new Intern(answers.name, answers.ID, answers.email, answers.school);
                await console.log(intern);
                await team.push(intern);
                await addEmp();
                break;
            case "Complete":
                await console.log(team);
                break;
            default: '';
        }
    } catch (err) {
        console.error(err);
    } finally {
        console.log('Employee added to team');
    };
}

// writeFile async as a promise
const init = async () => {
    try {
        let answers = await initialPrompt();
        const manager = new Manager(answers.name, answers.ID, answers.email, answers.officeNumber);
        await console.log(manager);
        await team.push(manager);
        await addEmp();
        await writeFileAsync('./dist/teamprofile.html', generateHTML(team));
        await console.log('Successfully wrote to teamprofile.html');
    } catch (err) {
        await console.error(err);
    }
    console.log("Finished");
};

init();
