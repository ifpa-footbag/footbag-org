const proxy = require('koa-proxies');

module.exports = {
  middlewares: [
    proxy('/footbag-org/', {
      target: '/',
    }),
  ],
};
