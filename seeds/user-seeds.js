const { User } = require('../models');

const userData = [{
        username: 'alekhya',
        password: 'vinni12'

    },
    {
        username: 'amulya',
        password: 'amulya34'
    },
    {
        username: 'chandu',
        password: 'chadu10'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;