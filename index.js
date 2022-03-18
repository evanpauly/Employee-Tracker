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
    updateEmployeeRole: 'Update Employee Role',
    quit: 'Quit'
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
                message.quit,
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
        switch (answer.selection) {
            case message.viewAllRoles:
                viewAllRoles();
                break;
        }
        switch (answer.selection) {
            case message.viewAllEmployees:
                viewAllEmployees();
                break
        }
        switch (answer.selection) {
            case message.addDepartment:
                addDepartment();
                break;
        }
        switch (answer.selection) {
            case message.addRole:
                addRole();
                break;
        }
        switch (answer.selection) {
            case message.addEmployee:
                addEmployee();
                break;
        }
        switch (answer.selection) {
            case message.updateEmployeeRole:
                updateEmployeeRole();
                break;
        }
        switch (answer.selection) {
            case message.quit:
                quit();
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
        menu();
    });
}

function viewAllRoles() {
    const query = `SELECT * FROM role`;
    connection.query(query, (err, data) => {
        if (err) throw err;
        console.table(data);
        menu();
    });
}

function viewAllEmployees() {
    const query = `SELECT * FROM employee`;
    connection.query(query, (err, data) => {
        if (err) throw err;
        console.table(data)
        menu();
    });
}

function addDepartment() {
    inquirer.prompt([
        {
            name: 'department',
            type: 'input',
            message: 'What is the name of the department you want to add?'
        }
    ])
        .then((answer) => {
            //interpolate answer into SQL script
            const newDepartment = `INSERT INTO department (name) VALUES ('${answer.department}')`
            connection.query(newDepartment, (err) => {
                if (err) throw err;
                menu();
            })
        })
}

function addRole() {
    //declare variables for user selection and interpolation
    var departmentChoices = []
    var newDepartment = `SELECT * FROM department`
    //get information
    connection.query(newDepartment, (err, data) => {
        if (err) throw err;
        departmentChoices = data.map(({ id, department }) => (
            {
                name: department,
                value: id
            }
        ))
//prompt user
    inquirer.prompt([
        {
            name: 'role',
            type: 'input',
            message: 'What is the name of the role you want to add?'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'What is the salary of the new role?'
        },
        {
            name: 'department',
            type: 'list',
            message: 'What department will the role be added to?',
            choices: departmentChoices
        }
    ])
    //interpolate and add to table
    .then((answer) => {
        const newRole = `INSERT INTO role (title, salary, department_id) VALUES ('${answer.role}',${answer.salary}',${answer.department}')`
        connection.query(newRole, (err) => {
            if (err) throw err;
            menu();
        })
    })
});
}

function addEmployee() {

}

function updateEmployeeRole() {

}

function quit() {
    connection.end();
}


menu();