const express = require('express');
const router = require('express').Router();
const routes = require('../routes');
const departmentRoutes = require('./department');
const employeeRoutes = require('./employees')
const roleRoutes = require('./role');

router.use(require('./department'), departmentRoutes);
router.use(require('./employees'), employeeRoutes);
router.use(require('./role'), roleRoutes);

module.exports = router;

// Express middleware
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
// // app.use('/routes', routes);
// app.use('./')
// app.use('../routes', routes);
// app.use('./department', departmentRoutes);
// app.use('./employees', employeeRoutes);
// app.use('./role', roleRoutes); 
// module.exports = inquirer;
// module.exports = routes;


// const inquirer = require('inquirer')
// const router = express.Router();
// const departmentRoutes = require('./department');
// const employeeRoutes = require('./employees')
// const roleRoutes = require('./role');
 

// router.use(require('./department', departmentRoutes));
// router.use(require('./employees', employeeRoutes));
// router.use(require('./role', roleRoutes));

// module.exports = router;
// module.exports = inquirer;