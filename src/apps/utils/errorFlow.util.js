const createError = require('http-errors');

module.exports = function errorFlow(error, next) {
    console.log(error);
    if (error.response) {
        next(createError(error.response.status, error.response.data.message));
    } else {
        next(createError(500, 'Internal server error'));
    }
}
