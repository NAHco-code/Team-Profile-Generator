// set dependencies
const inquirer = require('inquirer'); //*prompt functionality
const fs = require('fs'); //*access file system
const util = require('util'); //*needed for promisify
// const Employee = require('./lib/Employee.js');
// const Manager = require('./lib/Manager.js');
// const Engineer = require('./lib/Engineer.js');
// const Intern = require('./lib/Intern.js');
const generateHTML = require('./src/generate-html');
const writeFileAsync = util.promisify(fs.writeFile);

// write prompts
const promptUser = () => {
    return inquirer.prompt([
        { type: 'input', name: 'name', message: '' },
        { type: 'input', name: 'name', message: '' },
        { type: 'input', name: 'name', message: '' },
        { type: 'input', name: 'name', message: '' },
        { type: 'input', name: 'name', message: '' },
    ])
}

// define functions to add employees




// writeFile async as a promise
const init = async () => {
    try {
        // const answers = await promptUser()
        const team = [
            {
                name: 'test1', role: "Manager", email: "test@gmail.com"
            },
            {
                name: 'test2', role: 'Engineer', email: "test2@gmail.com"
            },
            {
                name: 'test3', role: 'Intern', email: "test3@gmail.com"
            }
        ]
        console.log(generateHTML(team));
        await writeFileAsync('generateOutput.html', generateHTML(team))
        console.log('Successfully wrote to generateOutput.html')
    } catch (err) {
        console.error(err)
    }
    console.log("Finished")
};

init();
