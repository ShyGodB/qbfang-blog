const handler = module.exports = {};
const { knex } = require('../config');


handler.listUser = async (pageIndex, pageSize) => {
    return await knex('user').select('*')
        .limit(pageSize)
        .offset((pageIndex - 1) * pageSize);
};

handler.countUser = async () => {
    return await knex('user').count('id as count').first().then(resp => {
        return resp && resp.count || 0;
    })
};
