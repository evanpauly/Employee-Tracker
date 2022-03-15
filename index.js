const inquirer = require('inquirer');
const menu = require('node-menu');





menu.addDelimiter('-', 33, 'Employee Tracker')
    .addItem(
        'View All Employees'
    )
    .addItem(
        'Add Employee'
    );



menu.start();