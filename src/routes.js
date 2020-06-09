const express = require('express'); 
const routes = express.Router();
const UserController = require('./Controllers/userController');
const jobsController = require('./Controllers/jobsController');

routes.post('/users',UserController.persistUser);
routes.get('/users',UserController.listUsers);
routes.get('/userGit',UserController.getUserGit);
routes.post('/GitUser',UserController.GitUser);
routes.get('/DataGit',UserController.getUserGit);
routes.post('/login/:username',UserController.login);
routes.get('/user/:id',UserController.listByID);

//Jobs
routes.post('/jobs',jobsController.store);
routes.get('/jobs',jobsController.listJobs);
module.exports = routes;