const proxy = require('koa-proxies');

module.exports = {
  plugins: [
    // own plugin to change base href to "/" in dev runtime
    {
      transform(context) {
        if (context.response.is('html')) {
          return {
            body: context.body.replace(/<base href=".* \/>/, '<base href="/">'),
          };
        }
      },
    },
  ],
};
