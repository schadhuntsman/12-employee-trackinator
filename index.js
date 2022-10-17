const inquirer = require ('inquirer');
const db = require('./db/connection');
const consoleTable = require('console.table');

// try{
 db.connect(function (err) {
        if (err) throw err;
        Menu();
      });
  
    
function Menu()  {
    console.log(` This is employee tracker `);
    //use inquirer to ask with different options
    return inquirer
        .prompt({
            type: "list",
            name: "menu",            
            message: "Please choose a selection",
            choices: [
                "View All Departments",
                "View All Roles",
                "View All Employees",
                "Add A Department",
                "Add A Role",
                "Add An Employee",
                "Update An Employee Role",                                      
            ],
})
.then(function (answers) {
    //use switch
    switch (answers.Menu) {
        
                case "View All Departments":
                    viewDepartments();
                break;                    
                case "View All Roles":
                    viewRoles();
                    // rolesController.showAll(Menu);
                    break;                  
                case "View All Employees":
                    viewEmployees();
                    // employeesController.showAll(Menu);
                    break;                
                case "Add A Department":
                        newDepartment();
                    break;                
                case "Add A Role":
                    newRole();
                    break;                   
                case "Add An Employee":
                    newEmployee();           break;             
                
                case "Update An Employee Role":
                    updateEmployeeRole();
                    // updateEmpRoleController.showAll(Menu);
                    break;
            }
    });
}


function viewDepartments() {
db.query("SELECT * FROM department", function(err, res) {
    if (err) throw err;
    console.log('Showing All Departments');
    console.table(res);
    Menu();
    // return Menu
});
}


function viewEmployees() {
    db.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.department_name AS department, role.salary FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department on role.department_id = department.id", function(err, res) {
        if (err) throw err;
        console.log('Showing All Employees');
        console.table(res);
        Menu();

     });
 }
    

    function viewRoles() {
    db.query("SELECT * FROM role", function(err, res) {
        if (err) throw err;
        console.log('Showing All Roles');
        console.table(res);
        Menu();
      
    });
 }

function newDepartment() {
    inquirer
    .prompt({
      type: "input",
      message: "Enter the name of new department",
      name: "departmentNew"
    })
    .then(function (res) {
      const departmentNew = res.newDept;
      db.query`(INSERT INTO department (department_name) VALUES 
      ("$("res.departmentNew")`, function (err, res) {
        if (err) {
          throw err;
        }
        console.table(res);
        Menu();
      };
    });
}

     function newRole() {
        inquirer.prompt ([
            {
            type: 'input',
            message: 'Enter employee title.',
            name: 'titleRole'
            },
            {
          type: 'input',
            message: 'Enter employee salary.',
            name: 'salaryRole'
            },
            {
            type: 'input',
            message: 'Enter employee department ID.',
            name: 'departmentRole'
            },
        ])
        .then(function (res) {
            db.query(`INSERT INTO role(title, salary, department_id) 
            VALUES("$("response.titleRole", "response.salaryRole", "response.departmentRole")` , (err,response) => {
                if (err) {
                    throw err;
                } 
                console.log('role added')
                console.table(response);
                Menu();
                 });
             });
            }

 function newEmployee() {
                inquirer.prompt ([
                    {
                    type: 'input',
                    message: 'Enter the employee first name.',
                    name: 'firstName'
                    },
                    {
                  type: 'input',
                    message: 'Enter employee last name.',
                    name: 'lastName'
                    },
                    {
                    type: 'input',
                    message: 'Enter employee role ID.',
                    name: 'newEmployeeRoleId'
                    },
                    {
                    type: 'input',
                    message: 'Enter employee manager ID.',
                     name: 'newEmployeeMngrID'
                    }
                ])
                .then(function (res) {
                 db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("res.firstName", "{"res.lastName", "res.newEmployeeRoleId"", "res.newEmployeeMngrID")`, function (err, res) {
                    (err,response) => {
                        if (err) {
                            throw err;
                        } 
                        console.log('employee added')
                        console.table(response);
                        Menu();
                    };
                    });  
                })
                
            
              

              function updateEmployeeRole() {
                inquirer.prompt ([
                    {
                    type: 'input',
                    message: 'Enter the employee ID you wish to update.',
                    name: 'employeeUpdate'
                    },
                    {
                        type: 'input',
                        message: 'Enter the new role ID for employee.',
                        name: 'newEmployeeRole'
                        }
                ])
                .then(function (res) {
                 db.query(`INSERT INTO employee SET role_id = "newEmployeeRole" WHERE id = "employeeUpdate"`,  function (err, res) {
                    (err,response) => {
                        if (err) {
                            throw err;
                        } 
                        console.log('employee added')
                        console.table(response);
                        Menu();
                    }
                })
                });
              }
            
            
            }   
