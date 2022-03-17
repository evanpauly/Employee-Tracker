const inquirer = require('inquirer');
const { up } = require('inquirer/lib/utils/readline');
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

//creating message variables
const message = {
    viewAllDepartments: 'View All Departments',
    viewAllRoles: 'View All Roles',
    viewAllEmployees: 'View All Employees',
    addDepartment: 'Add Department',
    addRole: 'Add Role',
    addEmployee: 'Add Employee',
    updateEmployeeRole: 'Update Employee Role'
}

//prompt menu
const menu = () => {
    return inquirer.prompt([
        {
            name: 'selection',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                message.viewAllDepartments,
                message.viewAllRoles,
                message.viewAllEmployees,
                message.addDepartment,
                message.addRole,
                message.addEmployee,
                message.updateEmployeeRole, 
                'Quit'
            ]
        }
    ])
    //returns function based on what was selected
    .then(answer => {
        switch (answer.selection) {
            case message.viewAllDepartments:
                viewAllDepartments();
                break;
        }
    })
};

//functions for selections
function viewAllDepartments() {
    const query = `SELECT * FROM department`;
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