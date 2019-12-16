const handler = module.exports = {};  // 暴露出去的接口
const me = {};                        // 内部使用的方法，可以考虑另放在公共文件里
const orderService = require('../service/order');


handler.listOrder = async (ctx) => {
    const { pageIndex, pageSize } = ctx.request.body;

    const list = await orderService.listOrder(pageIndex, pageSize);
    const count = await orderService.countOrder();
    ctx.body = { list, count };
};
