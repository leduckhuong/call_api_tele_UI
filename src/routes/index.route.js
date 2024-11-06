const authRouter = require("./routers/auth.router.js");
const indexRouter = require("./routers/index.router.js");

const route = (app) => {
    app.use('/auth', authRouter);
    app.use('/', indexRouter);
}

module.exports = route;