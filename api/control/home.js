const handler = module.exports = {};  // 暴露出去的接口
const me = {};                        // 内部使用的方法，可以考虑另放在公共文件里
const msgService = require('../service/home');


handler.index = async (ctx) => {
    let a = await msgService.listAllMsg();
    ctx.body = a;
};
