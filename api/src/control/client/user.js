const File = require('../../model/File')
const moment = require('moment')

const createFile = async (ctx) => {
    const { fileId, fileType } = ctx.params;
    await File.create({
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
    await File.update({ fileId }, { $set: { title, content } });
    ctx.body = true;
}

const getFile = async (ctx) => {
    const { fileId } = ctx.params;
    const data = await File.findOne({ fileId }).lean();
    data.createAt = moment(data.createAt).format('YYYY-MM-DD HH:mm:ss');
    data.updateAt = moment(data.updateAt).format('YYYY-MM-DD HH:mm:ss');
    ctx.body = { success: true, data };
}

const listFile = async (ctx) => {
    const { userId } = ctx.params
    const data = await File.find({ userId }).lean()
    ctx.body = {
        success: true,
        list: data && data.length > 0 ? data.map(item => {
            return {
                _id: item._id.toString(),
                fileId: item.fileId,
                fileType: item.fileType,
                userId: item.userId,
                title: item.title,
                content: item.content,
                createAt: moment(item.createAt).format('YYYY-MM-DD HH:mm:ss'),
                updateAt: moment(item.updateAt).format('YYYY-MM-DD HH:mm:ss'),
            }
        }) : []
    }
}

module.exports = {
    createFile,
    updateFile,
    getFile,
    listFile
}