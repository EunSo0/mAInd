/* eslint-disable no-undef */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/", {
      target: "http://maind.site",
      changeOrigin: true,
    })
  );
};
