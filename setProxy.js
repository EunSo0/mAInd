/* eslint-disable no-undef */
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://maind.site",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api2", {
      target: "http://maind-meeting.shop:5001",
      changeOrigin: true,
    })
  );
};
