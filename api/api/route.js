const parse = require('co-body')
const raw = require('raw-body')
const inflate = require('inflation')
const url = require('url')
const filter = (ctx) => {
    const url = ctx.url.split('?')[0].toLowerCase()
    const actions = url.split('/')
    const methodUrl = '../src/control/' + actions[2] + '/' + actions[3]
    const methodName = actions[4]
    return { methodUrl, methodName }
}

module.exports = async (ctx, next) => {
    const { methodUrl, methodName } = filter(ctx)
    const a = await require(methodUrl)
    const b = a[methodName];
    await b(ctx);
    await next()
};
