const handler = module.exports = {};
const me = {};

const { knex } = require('../config');


handler.listOrder = async (pageIndex, pageSize) => {
    return await knex('order').select('*')
        .limit(pageSize)
        .offset((pageIndex - 1) * pageSize);
};

handler.countOrder = async () => {
    return await knex('order').count('orderNo as count').first().then(resp => {
        return resp && resp.count || 0;
    })
};
