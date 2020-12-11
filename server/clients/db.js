const { _, Sequelize, initDb, consts } = require('@yishitec/web/server');

const { Op } = Sequelize;

const ex = {
  Sequelize,
  Op,
  db: {
    db: {},
    models: {},
  },
};

const models = {};

ex.initDb = async () => {
  const res = initDb(
    {
      ...consts.dbConfig,
      constraints: false,
    },
    {
      models,
      associations: [],
    },
  );
  _.extend(ex.db, res);

  await ex.db.db.sync();

  consts.db = ex.db;

  return ex;
};

module.exports = ex;
