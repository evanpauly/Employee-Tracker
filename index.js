const inquirer = require('inquirer');
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: '',
      database: 'employees'
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