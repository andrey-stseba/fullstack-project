const { Router } = require('express');
const { userController } = require('../controllers');

const userRouter = Router();

// /api/users
userRouter.get('/', userController.getUsers);
// /api/users/:userId
userRouter.get('/:userId', userController.getUserById);
// /api/users
userRouter.post('/', userController.createUser);
// /api/users/:userId
userRouter.patch('/:userId', userController.updateUser);
// /api/users/:userId
userRouter.put('/:userId', userController.updateUser);
// /api/users/:userId
userRouter.delete('/:userId', userController.deleteUser);
// /api/users/:userId/tasks
userRouter.get('/:userId/tasks', userController.getUserTasks);

module.exports = userRouter;
