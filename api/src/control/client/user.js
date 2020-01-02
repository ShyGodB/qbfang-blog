const Doc = require('../../model/Doc')
const moment = require('moment')

const createFile = async (ctx) => {
    const { fileId, fileType } = ctx.params;
    await Doc.create({
        fileId,
        fileType,
        userId: 1,
        title: '未命名',
        content: ''
    });
    ctx.body = true;
}

const updateFile = async (ctx) => {
    const { fileId, title, content } = ctx.params;
    await Doc.update({ fileId }, { $set: { title, content } });
    ctx.body = true;
}

const getFile = async (ctx) => {
    const { fileId } = ctx.params;
    const data = await Doc.findOne({ fileId }).lean();
    data.createAt = moment(data.createAt).format('YYYY-MM-DD HH:mm:ss');
    data.updateAt = moment(data.updateAt).format('YYYY-MM-DD HH:mm:ss');
    ctx.body = { success: true, data };
}

module.exports = {
    createFile,
    updateFile,
    getFile,
}