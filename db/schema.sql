DROP DATABASE IF EXISTS tracker;
CREATE DATABASE tracker;

USE tracker;

CREATE TABLE department (
        id INTEGER AUTO_INCREMENT PRIMARY KEY, 
        name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL (8,2), 
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
     id INTEGER AUTO_INCREMENT PRIMARY KEY,
   first_name VARCHAR(30) NOT NULL,
   last_name VARCHAR(30) NOT NULL,
   role_id INTEGER NOT NULL,
   FOREIGN KEY (role_id) REFERENCES 
   role(id) ON DELETE CASCADE,
    salary DECIMAL (8,2), 
    manager_id INTEGER
);