'use strict';
module.exports = appInfo => {
  const config = {
    // 数据库配置
    mysql: {
      client: {
        // host
        host: 'localhost',
        // 端口号
        port: '8889',
        // 用户名
        user: 'root',
        // 密码
        password: 'root',
        // 数据库名
        database: 'cms',
      },
      app: true,
      agent: false,
    },
  };


  config.keys = appInfo.name + '_1489393729180_4559';

  // 跨域请求设置
  // config.security = {
  //   csrf: {
  //     enable: false,
  //     ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
  //   },
  //   domainWhiteList: [ 'http://localhost:3001' ],
  // };
  // config.cors = {
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  // };
  return config;
};
