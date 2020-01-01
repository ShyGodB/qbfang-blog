const parse = async (ctx) => {
    ctx.params = {}
    if (ctx.method.toLowerCase() === 'get') {
        for (let key in ctx.query) {
            ctx.params[key] = ctx.query[key]
        }
    } else {
        for (let key in ctx.request.body) {
            ctx.params[key] = ctx.request.body[key]
        }
    }
}


module.exports = async (ctx, next) => {
    await parse(ctx)
    await next()
}