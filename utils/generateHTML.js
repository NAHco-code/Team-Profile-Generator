const generateHTML = (data) => {

    const generateManager = (emp) =>
      `<div class="ui card">
        <div class="content">
            <div class="header">${emp.name}</div>
        </div>
        <div class="content">
            <h4 class="ui sub header">${emp.role}</h4>
            <div class="ui small feed">
                <div class="event">
                    <div class="content">
                        <div class="summary">
                            <a href="mailto: ${emp.email}">${emp.email}</a>
                        </div>
                    </div>
                </div>
                <div class="event">
                    <div class="content">
                        <div class="summary">
                            <a>${emp.name}</a> was added as an <a>${emp.role}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="extra content">
            <button class="ui button">Join Project</button>
        </div>
    </div>
    `;

    const generateEmployees = (emps) => {
        let html = '';

        for (let i = 0; i < emps.length; i++) {
            html +=
            `<div class="ui card">
                <div class="content">
                    <div class="header">${emps[i].name}</div>
                </div>
                <div class="content">
                    <h4 class="ui sub header">${emps[i].role}</h4>
                    <div class="ui small feed">
                        <div class="event">
                            <div class="content">
                                <div class="summary">
                                    <a href="mailto: ${emps[i].email}">${emps[i].email}</a>
                                </div>
                            </div>
                        </div>
                        <div class="event">
                            <div class="content">
                                <div class="summary">
                                    <a>${emps[i].name}</a> was added as an <a>${emps[i].role}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="extra content">
                    <button class="ui button">Join Project</button>
                </div>
            </div>
            `
        }

        return html;
    }

//TODO: must loop through an array for each employee and generate a card for each of them
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossorigin="anonymous" />
            <title>Document</title>
            <style></style>
        </head>
        <body>
            <header class="ui top banner test ad" data-text="Employees"></header>
            <div> ${generateManager(data[0])}</div>
            <div> ${generateEmployees(data.slice(1))}</div>
        </body>
        </html>`

};

module.exports = generateHTML;
