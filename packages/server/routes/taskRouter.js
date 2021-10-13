const { Router } = require('express');
const { taskController } = require('../controllers');

const taskRouter = Router();

// /api/tasks
taskRouter.get('/', taskController.getTasks);

module.exports = taskRouter;
