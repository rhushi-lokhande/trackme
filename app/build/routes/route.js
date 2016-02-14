var home = require('../controller/homeController');
var login = require('../controller/loginController');
var developer = require('../controller/developerController');
var project = require('../controller/projectController');
var Task = require('../controller/taskController');
var Leave = require('../controller/leaveController');
var express = require('express');
var router = express.Router();
router.get('/', home.getIndex);
router.post('/login', login.login);
router.post('/register', developer.registerDeveloper);
router.get('/developer/:id', developer.getUser);
router.get('/developer', developer.getDeveloper);
router.put('/developer', developer.updateDeveloper);
router.get('/project/:id', project.getProject);
router.get('/project', project.getAllProject);
router.post('/project', project.post);
router.put('/project', project.put);
router.delete('/project', project.delete);
router.post('/task', Task.post);
router.get('/task', Task.get);
router.put('/task', Task.put);
router.delete('/task/:id', Task.delete);
router.post('/leave', Leave.post);
module.exports = router;

//# sourceMappingURL=../../map/routes/route.js.map
