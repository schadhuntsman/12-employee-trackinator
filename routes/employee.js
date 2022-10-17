const express = require('express');
const { default: inquirer } = require('inquirer');
const router = express.Router();
const db = require("../db/connection");
const inputCheck = require('../utils/inputCheck');

module.exports = function viewEmployees() {
    const request = "SELECT * FROM employees ORDER BY last name";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log('Showing All Employees');
        console.table(res);
        inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "Please choose an option.",
                choices: [
                    "menu"
                ],
            }
        ])
        .then((answers) => {
            switch(answer.choice) {
                case "menu":
                    Menu();
                    break;
            }
        })
    })
}
//add new employee
module.exports = function newEmployee() {
    console.log('employee')
    inquirer.prompt ([
        {
        type: 'input',
        message: 'Enter first name of the employee.',
        name: 'firstName'
        },
        {
            type: 'input',
            message: 'Enter last name of the employee.',
            name: 'lastName'
        },
        {
            type: 'input',
            message: 'Enter ID of the employee.',
            name: 'ID'
        },
        {
            type: 'input',
            message: 'Enter the  managers ID of the new employee',
            name: 'managerID'
        }
        
    ])
    .then(function (response) {
        connection.query('INSERT INTO employees(first_name, last_name, roles_id, manager_id) VALUES (?,?,?,?)', 
        [response.firstName, response.lastName, response.ID, response.managerID]), function(err,response) {
            if (err) throw err;
            console.table(res);
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'choice',
                    message: 'select an option.',
                    choices: [
                        'Menu'
                    ]
                }
            ])
           .then((answer) => {
               switch (answer.choice){
                   case 'Menu':
                    Menu();
                       break
               }
           })
        }
    })
}

// get all employees aphabetized by last name
router.get('/employees', (req, res) => {
    const sql = `SELECT * FROM employees ORDER BY last name`;
    return this.

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

// // add employee
// router.post('/employee', ({ body }, res) => {
//     const errors = inputCheck(body, 'first_name', 'last_name', 'id');
//     if (errors) {
//         res.status(400).json({ error: errors });
//         return;
//     }

//     const sql = `INSERT INTO employees (first_name, last_name, id) VALUES (?,?,?)`;
//     const params = [body.first_name, body.last_name, body.id];
    
//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: body
//         });
//     });
// });

// update employee role
// router.get('/employee/:id', ({ body }, res) => {
//     const errors = inputCheck(body, 'role');
//         if (errors) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         const sql = `UPDATE employees SET role = ? WHERE id = ?`;
//         const params = [req.body.role, req.params.role];

//         db.query(sql, params, (err, result) => {
//             if (errors) {
//                 res.status(400).json({ error: err.message });
//                 return;
//             }
//             res.json({
//                 message: 'success',
//                 data: body,
//                 changes: result.affectedRows
//             });
        
//             });
//         });

module.exports = router;
// module.exports = { viewEmployees };