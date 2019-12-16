const handler = module.exports = {};
const me = {};

const { knex } = require('../config');


handler.listAllMsg = async () => {
    return await knex('msg').select('*');
};
