const { _, main, consts, utils, moment } = require('@yishitec/web/server');
const services = require('./services');
const { initDb, db, Op } = require('./clients/db');
const apis = require('./apis');

consts.dbConfig = {
  host: consts.env.DB_HOST || 'localhost',
  port: consts.env.DB_PORT || 3306,
  username: consts.env.DB_USERNAME || 'yschris',
  password: consts.env.DB_PASSWORD || 'Welcome@888',
  database: consts.env.DB_DATABASE || 'tt_accounting',
  debug: false,
};

let requestIndex = 0;

main({
  appName: 'TalenTick 记账',
  port: consts.env.PORT || 3000,
  serverStartup: async () => {
    await utils.withTry(async () => {
      await initDb();
      console.log('DB ready');
    });
    await Promise.all([]);
  },
  routers: router => {
    router.use(async (ctx, next) => {
      const startTime = Date.now();
      requestIndex += 1;
      console.log('req', {
        requestIndex,
        url: ctx.path, // todo
        params: ctx.params,
        query: ctx.request.query,
        body: ctx.request.body,
        time: moment().format('YYYY-MM-DD HH:mm:ss'),
      });
      await next();
      console.log('res', {
        requestIndex,
        duration: Date.now() - startTime,
      });
    });

    router.post('/login', async ctx => {
      const { username, password, appId = 1 } = ctx.request.body;
      if (!username) throw new Error('请输入用户名');
      if (!password) throw new Error('请输入密码');
      const findUser = await db.models.User.findOne({
        where: {
          username,
          password: utils.encodePassword(password),
          appId,
        },
      });
      if (!findUser) throw new Error('账号或密码错误');
      const user = findUser.toJSON();
      delete user.password;
      // eslint-disable-next-line no-param-reassign
      ctx.session.user = user;
      ctx.jsonOk(ctx.session.user);
    });

    const sessionAuth = async (ctx, next) => {
      if (!ctx.session.user) {
        ctx.jsonFail('请先登录', undefined, 401);
        return;
      }
      await next();
    };

    router.post('/whoami', sessionAuth, async ctx => {
      const findUser = await db.models.User.findOne({
        where: {
          id: ctx.session.user.id,
        },
        include: [],
      });
      if (!findUser) {
        // eslint-disable-next-line no-param-reassign
        delete ctx.session.user;
        throw new Error('找不到指定的用户');
      }
      const user = findUser.toJSON();
      // eslint-disable-next-line no-param-reassign
      delete user.password;
      ctx.jsonOk(user);
    });

    router.post('/change-password', sessionAuth, async ctx => {
      const { oldPassword, newPassword, newPassword2 } = ctx.request.body;
      if (!oldPassword) throw new Error('请输入旧密码');
      if (newPassword !== newPassword2) throw new Error('两次新密码输入不一致');
      if (!newPassword) throw new Error('请输入新密码');
      if (newPassword.length < 4)
        throw new Error('为了您的账号安全，密码长度应大于4位');
      await db.db.transaction(async transaction => {
        await db.models.User.update(
          {
            password: utils.encodePassword(newPassword),
          },
          {
            where: {
              id: ctx.session.user.id,
            },
            transaction,
          },
        );
      });
      ctx.jsonOk('OK');
    });

    router.post('/logout', async ctx => {
      // eslint-disable-next-line no-param-reassign
      delete ctx.session.user;
      ctx.jsonOk();
    });

    const syncDb = async () => {
      await db.db.sync({ alter: true });
      console.log('DML synced. ');
    };

    router.get('/migrate/sync', async ctx => {
      await syncDb();
      ctx.jsonOk('OK');
    });

    router.get('/migrate/seed', async ctx => {
      await db.models.User.findOrCreate({
        where: {
          username: 'admin',
          appId: 1,
        },
        defaults: {
          username: 'admin',
          password: utils.encodePassword('admin'),
          appId: 1,
        },
      });
      ctx.jsonOk('OK');
    });
  },
});
