const File = require('../../model/File')
const moment = require('moment')
const util = require('../../util')

const create = async (ctx) => {
    const { fileType, fileName, parentFileId, parentFileType } = ctx.params;
    const fileId = util.getRandomStr(10) + moment().format('YYYYMMDDHHmmss')
    await File.create({
        fileId,
        fileType,
        parentFileId,
        parentFileType,
        title: fileName ? fileName : '无标题',
    });
    ctx.body = { success: true, fileId };
}

const update = async (ctx) => {
    const { fileId, title, content } = ctx.params;
    await File.update({ fileId }, { $set: { title, content } });
    ctx.body = true;
}

const get = async (ctx) => {
    const { userId, fileId, fileType } = ctx.params;
    const data = await File.findOne({ fileId }).lean();
    data.createAt = moment(data.createAt).format('YYYY-MM-DD HH:mm:ss');
    data.updateAt = moment(data.updateAt).format('YYYY-MM-DD HH:mm:ss');
    ctx.body = { success: true, data };
}

const list = async (ctx) => {
    const { userId, fileId, fileType } = ctx.params
    let filter = {}
    if (userId) filter.userId = userId
    if (fileType === 'Desktop' || fileType === 'Folder') filter.parentFileType = fileType
    if (fileType === 'Folder') filter.parentFileId = fileId
    const data = await File.find(filter).lean()
    ctx.body = {
        success: true,
        list: data && data.length > 0 ? data.map(item => {
            return {
                _id: item._id.toString(),
                fileId: item.fileId,
                fileType: item.fileType,
                parentFileId: item.parentFileId,
                parentFileType: item.parentFileType,
                userId: item.userId,
                userName: item.userName,
                title: item.title,
                content: item.content,
                createAt: moment(item.createAt).format('YYYY-MM-DD HH:mm:ss'),
                updateAt: moment(item.updateAt).format('YYYY-MM-DD HH:mm:ss'),
            }
        }) : []
    }
}

module.exports = {
    create,
    update,
    get,
    list
}