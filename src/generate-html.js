
//credit: semantic-ui framework

const generateHTML = (data) => {

    const generateManager = ( emp ) =>
        `
        <div>
            <div class="ui fluid card card-body">
                <div class="content card-header">
                    <div class="header">${ emp.name }</div>
                    <h4 class="ui sub header">${ emp.getRole() }</h4>
                </div>
                <div class="content">
                    <div class="ui small feed card-content">
                        <div class="event gray top">
                            <div class="content">
                                <div class="summary">
                                    <span>ID: ${ emp.ID }</span>
                                </div>
                            </div>
                        </div>
                        <div class="event white">
                            <div class="content">
                                <div class="summary">
                                    <span>Email: </span>
                                    <a href="mailto: ${ emp.email }">${ emp.email }</a>
                                </div>
                            </div>
                        </div>
                        <div class="event gray bottom">
                            <div class="content">
                                <div class="summary">
                                    <span>Office: ${ emp.officeNumber }</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="extra content card-footer"><img class="badge" src="./icons/team-manager.png"/></div>
            </div>
        </div>
        `;


    const generateEmployees = (emps) => {
        let html = '';
        // const engineerHTML =
        //     `<span>Github: <a href="https://github.com/${ emps[ i ].github }">${ emps[ i ].github }</a></span>`;
        // const internHTML = `<span>School: ${ emps[ i ].school }</span>`;

        // const renderCorrespondingLine = () => {
        //     if ( emps[ i ].getRole() === "Engineer" ) {
        //         return engineerHTML;
        //     }
        //     else {
        //         return internHTML;
        //     }
        // }

        // const engineerBadge = `<img class="badge" src="./icons/engineer.png" />`;
        // const internBadge = `<img class="badge" src="./icons/intern1.png" />`;
        // const renderCorrespondingBadge = () => {

        // }

        for (let i = 0; i < emps.length; i++) {
            html += `
            <div>
                <div class="ui fluid card card-body">
                    <div class="content card-header">
                        <div class="header">${emps[ i ].name}</div>
                        <h4 class="ui sub header">${emps[ i ].getRole()}</h4>
                    </div>
                    <div class="content">
                        <div class="ui small feed card-content">
                            <div class="event gray top">
                                <div class="content">
                                    <div class="summary">
                                        <span>ID: ${emps[i].ID}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="event white">
                                <div class="content">
                                    <div class="summary">
                                        <span>Email: </span>
                                        <a href="mailto: ${emps[ i ].email }">${ emps[ i ].email}</a>
                                    </div>
                                </div>
                            </div>
                            <div class="event gray bottom">
                                <div class="content">
                                    <div class="summary">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="extra content">

                    </div>
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
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
            <title>Team Profile</title>
        </head>
        <body>
            <div class="pusher">
                <header data-text="Employees">
                    <div class= "header-wrapper ui inverted vertical masthead center aligned segment">
                        <div class="ui text container page-header">
                            <h1 class="ui inverted header header-font">
                                Team Profile
                            </h1>
                        </div>
                        <div class="page-sub-header">
                            <h2 class="sub-header-font">- Viewing Team Members -</h2>
                        </div>
                    </div>
                </header>
                <br /><br />
                <br /><br />
                <div class=" ui three column grid" id="center">
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
