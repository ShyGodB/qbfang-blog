const mongoose = require('mongoose');
const transform = require('./transform');

const schema = new mongoose.Schema({
    // 文件编号 - 32位随机字符串
    fileId: { type: String, index: true },
    // 文件类型: 文件夹 文档 表格 ...
    fileType: { type: String, index: true, default: 'Doc' },
    // 父级文件编号
    parentFileId: { type: String, index: true, default: 'Desktop' },
    // 父级文件类型
    parentFileType: { type: String, index: true, default: 'Desktop' },
    // 所属用户编号
    userId: { type: Number, index: true, default: 1 },
    // 所属用户姓名
    userName: { type: String, index: true, default: 'ROOT' },
    // 文件标题 || 文件夹的名字
    title: { type: String, index: true, default: '无标题' },
    // 内容
    content: { type: String, default: '' },
    // 逻辑删除与否
    off: { type: Boolean, default: false }
}, {
    ...transform,
    timestamps: true
});

module.exports = mongoose.model('File', schema);
