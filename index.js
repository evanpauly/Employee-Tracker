const inquirer = require('inquirer');
const mysql = require('mysql2');
require('dotenv').config()

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASS,
    database: 'employees'
});

connection.execute(
    'SELECT * FROM `department` WHERE `id` = "?"',
    function(err, results, fields) {
        if (err) throw (err);
    }
);

const menu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'What would you like to do?',
            choices: [
                'View All Departments', 
                'View All Roles', 
                'View All Employees', 
                'Add Department', 
                'Add Role', 
                'Add Employee', 
                'Update Employee Role', 
                'Quit'
            ]
        },
    ])
}


function viewAllDepartments() {
    const query = `SELECT department.name, department.id FROM department`;
    connection.query(query, (err,data) => {
        if (err) throw err;
        console.table(data);
        inquirer.prompt();
    });
}

function viewAllRoles() {

}

function viewAllEmployees() {

}

function addDepartment() {

}

function addRole() {

}

function addEmployee() {

}

function updateEmployeeRole() {

}



menu();