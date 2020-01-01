const Doc = require('../../model/Doc')

const createFile = async (ctx) => {
    const { fileId, fileType } = ctx.request.body;
    await Doc.create({
        fileId,
        fileType,
        userId: 1,
        title: '未命名',
        content: ''
    });
    ctx.body = { success: true };
}

const getFile = async (ctx) => {
    const { fileId } = ctx.request.body;
    const data = await Msg.findOne({ fileId }).lean();
    data.createAt = moment(data.createAt).format('YYYY-MM-DD HH:mm:ss');
    data.updateAt = moment(data.updateAt).format('YYYY-MM-DD HH:mm:ss');
    ctx.body = { success: true, data };
}

module.exports = {
    createFile,
    getFile
}