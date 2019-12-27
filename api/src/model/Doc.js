const mongoose = require('mongoose');
const transform = require('./transform');

const schema = new mongoose.Schema({
    // 文件编号 - 32位随机字符串
    fileId: { type: String, index: true },
    // 文件类型
    fileType: { type: String, index: true },
    // 所属用户编号
    userId: { type: Number, index: true },
    // 文件标题
    title: { type: String, index: true },
    // 内容
    content: String
}, {
    ...transform,
    timestamps: true
});

module.exports = mongoose.model('Doc', schema);
