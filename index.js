const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config()

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employee'
});

connection.query(
    'SELECT * FROM `department` WHERE `id` = "1"',
    function(err, results, fields) {
        console.log(results);
        console.log(fields);
    }
);

const menu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'What would you like to do?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Quit']
        },
        //{
        //    type: 'input',
        //    name: 'Add Department',
        //    message: 'What is the name of the department?'
        //}
    ])
}




menu();