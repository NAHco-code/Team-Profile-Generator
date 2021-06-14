
//credit: semantic-ui framework

const generateHTML = (data) => {

    const generateManager = (emp) =>
        `<div>
            <div class="ui fluid card">
                <div class="content">
                    <div class="header">${emp.name}</div>
                    <h4 class="ui sub header">${emp.getRole()}</h4>
                </div>
                <div class="content">
                    <div class="ui small feed">
                        <div class="event">
                            <div class="content">
                                <div class="summary">
                                    <span>ID: ${emp.ID}</span>
                                </div>
                            </div>
                        </div>
                        <div class="event">
                            <div class="content">
                                <div class="summary">
                                    <span>Email: </span>
                                    <a href="mailto: ${emp.email }">${ emp.email}</a>
                                </div>
                            </div>
                        </div>
                        <div class="event">
                            <div class="content">
                                <div class="summary">
                                    <span>Office: ${emp.officeNumber}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="extra content"></div>
            </div>
        </div>
    `;

    const generateEmployees = (emps) => {
        let html = '';
        let engineerHTML =
            `<span>Github: <a href="https://github.com/${ emps[ i ].github }">${ emps[ i ].github }</a></span>`;
        let internHTML = `<span>School: ${ emps[ i ].school }</span>`;

        function renderCorrespondingLine () {
            if ( emps[ i ].getRole() === "Engineer" ) {
                return engineerHTML;
            }
            else {
                return internHTML;
            }
        }

        for (let i = 0; i < emps.length; i++) {
            html +=
            `<div>
                <div class="ui fluid card">
                    <div class="content">
                        <div class="header">${emps[ i ].name}</div>
                        <h4 class="ui sub header">${emps[ i ].getRole()}</h4>
                    </div>
                    <div class="content">
                        <div class="ui small feed">
                            <div class="event">
                                <div class="content">
                                    <div class="summary">
                                        <span>ID: ${emps[i].ID}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="event">
                                <div class="content">
                                    <div class="summary">
                                        <span>Email: </span>
                                        <a href="mailto: ${emps[ i ].email }">${ emps[ i ].email}</a>
                                    </div>
                                </div>
                            </div>
                            <div class="event">
                                <div class="content">
                                    <div class="summary">
                                        ${renderCorrespondingLine}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="extra content"></div>
                </div>
            </div>

            `
        }

        return html;
    }

    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossorigin="anonymous" />
            <link rel="stylesheet" href="style.css">
            <title>Team Profile</title>
            <style></style>
        </head>
        <body>
            <div class="pusher">
                <header data-text="Employees">
                    <div class="ui inverted vertical masthead center aligned segment">
                        <div class="ui text container">
                            <h1 class="ui inverted header">
                                Team Profile
                            </h1>
                            <h2>Viewing Team Members</h2>
                        </div>
                    </div>
                </header>
                <br/>
                <div class=" ui three column grid">
                    ${generateManager(data[0])}
                    ${generateEmployees(data.slice(1))}
                </div>
            </div>
        </body>
        <footer>
        </footer>
        </html>`
};

module.exports = generateHTML;
