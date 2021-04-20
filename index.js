// set dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateHTML = require('./utils/generateHTML');

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

// define classes



// writeFile async as a promise
const init = async () => {
    try {
        // const answers = await promptUser()
        const team = [{ name: 'test1', role: "Manager", email: "test@gmail.com" }, { name: 'test2', role: 'Intern', email: "test2@gmail.com" }, { name: 'test3', role: 'Intern', email: "test3@gmail.com" }]
        console.log(generateHTML(team));
        await writeFileAsync('generateOutput.html', generateHTML(team))
        console.log('Successfully wrote to generateOutput.html')
    } catch (err) {
        console.error(err)
    }
    console.log("Finished")
};

init();
