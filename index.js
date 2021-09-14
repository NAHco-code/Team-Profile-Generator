// set dependencies
const inquirer = require('inquirer'); //*prompt functionality
const fs = require('fs'); //*access file system
const util = require('util'); //*needed for promisify
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const generateHTML = require('./src/generate-html');
const writeFileAsync = util.promisify(fs.writeFile);
const team = []

// write prompts //first prompts for manager information
const initialPrompt = () => {
    return inquirer.prompt([
        { type: 'input', name: 'name', message: 'Please enter - name of team manager:' },
        { type: 'input', name: 'ID', message: 'Please enter - employee ID number of team manager:' },
        { type: 'input', name: 'email', message: 'Please enter - preferred email address of team manager:' },
        { type: 'input', name: 'officeNumber', message: 'Please enter - office number of team manager:' }
    ]);
};

const empType = [
    {
        type: 'list', name: 'role', message: 'Would you like to add an Engineer or an Intern to the team?',
        choices: ['Engineer', 'Intern', 'Complete']
    }
];
const engQuestions = [
    { type: 'input', name: 'name', message: 'Please enter - name of engineer:' },
    { type: 'input', name: 'ID', message: 'Please enter - employee ID number of engineer:' },
    { type: 'input', name: 'email', message: 'Please enter - preferred email address of engineer:' },
    { type: 'input', name: 'github', message: 'Please enter - github username of engineer:' }
];
const intQuestions = [
    { type: 'input', name: 'name', message: 'Please enter - name of intern:' },
    { type: 'input', name: 'ID', message: 'Please enter - employee ID number of intern:' },
    { type: 'input', name: 'email', message: 'Please enter - preferred email address of intern:' },
    { type: 'input', name: 'school', message: 'Please enter - intern`s associated school:' }
];

const addEmp = async () => {
    let answers = await inquirer.prompt(empType);
    try {
        switch (answers.role) {
            case "Engineer":
                answers = await inquirer.prompt(engQuestions);
                const engineer = new Engineer(answers.name, answers.ID, answers.email, answers.github);
                await team.push(engineer);
                await addEmp();
                break;
            case "Intern":
                answers = await inquirer.prompt(intQuestions);
                const intern = new Intern(answers.name, answers.ID, answers.email, answers.school);
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
        console.log('Added Successfully');
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
        await console.log( 'Successfully wrote to teamprofile.html' );
        await console.log( 'Finished' );
    } catch (err) {
        await console.error(err);
    }
    console.log( 'Please navigate to the dist folder and open your new team profile in the browser to view' );
};

init();
