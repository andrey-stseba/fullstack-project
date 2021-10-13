const { User } = require('./../models');
const _ = require('lodash');

module.exports.getUsers = async (req, res, next) => {
  try {
    const foundUsers = await User.findAll({
      raw: true,
      attributes: {
        exclude: ['id', 'passwordHash', 'createdAt', 'updatedAt'],
      },
      limit: 5,
    });

    res.status(200).send(foundUsers);
  } catch (e) {
    next(e);
  }
};

//  req.params.
module.exports.getUserById = async (req, res) => {
  const {
    params: { userId },
  } = req;

  try {
    const [foundUser] = await User.findAll({
      raw: true,
      where: { id: userId },
      attributes: {
        exclude: ['id', 'passwordHash', 'createdAt', 'updatedAt'],
      },
    });
    if (foundUser) {
      res.status(200).send(foundUser);
    } else {
      res.status(404).send('User not found');
    }
  } catch (e) {
    next(e);
  }
};
module.exports.createUser = async (req, res, next) => {
  const { body } = req;

  try {
    const createdUser = await User.create(body);

    const preparedUser = _.omit(createdUser.get(), [
      'id',
      'passwordHash',
      'createdAt',
      'updatedAt',
    ]);

    res.status(200).send(preparedUser);
  } catch (e) {
    next(e);
  }
};

module.exports.updateUser = async (req, res) => {
  console.log(`updateUser`);
};
module.exports.deleteUser = async (req, res) => {
  console.log(`deleteUser`);
};
module.exports.getUserTasks = async (req, res) => {
  console.log(`getUserTasks`);
};
