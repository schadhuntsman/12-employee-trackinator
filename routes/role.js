const express = require('express');
const router = express.Router();
const db = require("../db/connection");
const inputCheck = require('../utils/inputCheck');

//view all roles
module.exports = function viewRoles() {
    const request = "SELECT * FROM roles";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log('Showing All Roles');
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

// add role
function newRole() {
    console.log('')
    inquirer.prompt ([
        {
        type: 'input',
        message: 'Enter job titel.',
        name: 'job_title'
        },
        {
            type: 'input',
            message: 'Enter overseeing department.',
            name: 'overseeing_department'
            },
            {
                type: 'input',
                message: 'Enter salary of role',
                name: 'salary'
                }
    ])
    .then(function (response) {
        connection.query('INSERT INTO roles(job_title, overseeing_department, salary) VALUES (?)', 
        [response.roleName]), function(err,response) {
            if (err) throw err;
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
                switch(answers.choice) {
                    case "menu":
                        Menu();
                        break;
                    }
                })
             }
         })
     }
// // Get all roles
// router.get('/role'), (req, res) => {
//     const sql = `SELECT * FROM roles`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: rows
//         })
//         return this.role.name;
//         });
//     }; 

    // Create new role

// router.post('/role'), ({ body }, res) => {
//     const errors = inputCheck(body, "role_id", "overseeing_department", "salary");
//     if (err) {
//         res.status(400).json({ error: errors });
//         return;
//     }

//     const sql = `INSERT INTO roles (role_id, overseeing_department, salary) VALUES (?,?,?)`;
//     const params = [body.role_id, body.overseeing_department, body.salary]

//     db.query(sql, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: body
//         });
//     });
// };

module.exports = router;
// module.exports = { viewRoles };