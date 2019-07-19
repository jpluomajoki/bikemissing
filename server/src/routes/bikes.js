const getAllBikes = () => {
    return [];
}

module.exports = (router) => {
    console.log("asdasdads")
    router.get('/bikes', async ctx => {
        ctx.body = getAllBikes()
    });
}