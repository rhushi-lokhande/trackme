//<reference path="../typings/node/node.d.ts" />
import home = require('../controller/homeController');
import login = require('../controller/loginController');
import developer = require('../controller/developerController');
import project = require('../controller/projectController');
import Task = require('../controller/taskController');
import Leave = require('../controller/leaveController');


import express = require('express');

let router: express.Router = express.Router();

//home controller routes 
router.get('/', home.getIndex);

//login controller routes
router.post('/login', login.login);

//developer controller routes
router.post('/register', developer.registerDeveloper);
router.get('/developer/:id', developer.getUser);
router.get('/developer', developer.getDeveloper);
router.put('/developer', developer.updateDeveloper);


//project controller routes
router.get('/project/:id', project.getProject);
router.get('/project', project.getAllProject);
router.post('/project', project.post);
router.put('/project', project.put);
router.delete('/project', project.delete);


//task controller routes
router.post('/task', Task.post);
router.get('/task', Task.get);
router.put('/task', Task.put);
router.delete('/task/:id', Task.delete);

//leaves controller routing
router.post('/leave', Leave.post);
//router.get('/leaves', Leave.get);
//router.put('/leaves', Leave.put);
//router.delete('/leaves/:id', Leave.delete);

module.exports = router;


