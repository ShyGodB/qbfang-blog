const handler = module.exports = {};  // 暴露出去的接口
const userService = require('../service/user');


handler.listUser = async (ctx) => {
    const { pageIndex, pageSize } = ctx.request.body;

    const list = await userService.listUser(pageIndex, pageSize);
    const count = await userService.countUser();
    ctx.body = { list, count };
};
