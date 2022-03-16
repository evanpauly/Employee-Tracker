const inquirer = require('inquirer');

const menu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'What would you like to do?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role']
        }
    ])
}


menu();