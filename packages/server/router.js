const { Router } = require('express');
const userRouter = require('./routes/userRouter');
const taskRouter = require('./routes/taskRouter');

const router = Router();

// /api/users
router.use('/users', userRouter);

// /api/tasks
router.use('/tasks', taskRouter);

module.exports = router;
