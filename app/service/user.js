'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  async find(uid) {
    console.log(uid);
    const client1 = await this.app.mysql.select('sent_auth_rule', {
      columns: [ 'title', 'name', 'group', 'id' ], // 要查询的表字段
      limit: 20 * uid, // 返回数据量
      offset: 10 * uid, // 数据偏移量
    });
    const client2 = await this.app.mysql.select('sent_auth_rule');
    const result = {
      dataCon: Math.ceil((client2.length + 20 - 1) / 20),
      data: client1,
      code: '2000',
      meg: '你好'
    };
    this.ctx.body = result;
  }
  async inster() {
    const results = await this.app.mysql.insert('sent_auth_rule', { title: 'Hello World' });
    console.log(results);
    this.ctx.body = results;
  }
}
module.exports = UserService;
