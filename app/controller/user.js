'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const userId = this.ctx.query.id;
    await this.ctx.service.user.find(userId);
  }

  async insts() {
    const userId = this.ctx.query.id;
    await this.ctx.service.user.inster(userId);
  }

}

module.exports = UserController;
