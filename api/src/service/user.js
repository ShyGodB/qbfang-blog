const handler = module.exports = {};
const { knex } = require('../../config');


handler.createFile = async (fileId, fileType) => {
    return await knex('file').insert({ fileId, fileType, content: '' });
};