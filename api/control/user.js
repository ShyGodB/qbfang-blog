const handler = module.exports = {};  // 暴露出去的接口
const userService = require('../service/user');


handler.createFile = async (ctx) => {
    const { fileId, fileType } = ctx.request.body;
    await userService.createFile(fileId, fileType);
    ctx.body = true;
};
