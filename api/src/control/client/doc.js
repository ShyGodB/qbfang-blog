const File = require('../../model/File')
const moment = require('moment')

const list = async (ctx) => {
    const { userId, pageIndex } = ctx.params
    const filter = {
        userId: userId ? userId : 1,
        fileType: 'Doc'
    }
    const skip = (Number(pageIndex || 1) - 1) * 20
    const sort = { createAt: -1 }
    const docs = await File.find(filter).skip(skip).sort(sort).limit(20).lean()
    ctx.body = {
        list: docs && docs.length > 0 ? docs.map(item => {
            return {
                fileId: item.fileId,
                fileType: item.fileType,
                parentFileId: item.parentFileId,
                parentFileType: item.parentFileType,
                userId: item.userId,
                userName: item.userName,
                title: item.title,
                content: item.content,
                createAt: moment(item.createAt).format('YYYY-MM-DD HH:mm:ss'),
                updateAt: moment(item.updateAt).format('YYYY-MM-DD HH:mm:ss')
            }
        }) : []
    }
}

module.exports = {
    list,
}