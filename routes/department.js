const express = require('express');
const router = express.Router();
const db = require("../db/connection");
const inputCheck = require('../utils/inputCheck');
// const department = require('../routes')

module.exports = function viewDepartments() {
    const request = "SELECT * FROM departments ORDER BY last name";
    db.query(request, function(err, res) {
        if (err) throw err;
        console.log('Showing All Departments');
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
    })
}

// add department
function newDepartment() {
    console.log('')
    inquirer.prompt ([
        {
        type: 'input',
        message: 'Enter department name.',
        name: 'department_name'
        },
    ])
    .then(function (response) {
        connection.query('INSERT INTO department(department_name) VALUES (?)', 
        [response.departmentName]), function(err,response) {
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
// router.post('/department'), ({ body }, res) => {
//     const errors = inputCheck(body, "department_id", "department_name");
//     if (err) {
//         res.status(400).json({ error: errors });
//         return;
//     }

//     const sql = `INSERT INTO department (department_id, deapartment_name) VALUES (?,?)`;
//     const params = [body.department_id, body.department_name]

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

// module.exports = { viewDepartments }
module.exports = router;
// add department
// router.post('/department', ({ body }, res) => {
//     const errors = inputCheck(body, 
//     'department_id', 'department_name');
//     if (errors) {
//         res.status(400).json({ error: errors });
//         return;
//     }

//     const sql = `INSERT INTO department (department_id, department_name) VALUES (?,?)`;
//     const params = [body.department_id, department_name];
    
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