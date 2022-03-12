const { Router } = require('express');
const fb = require('fast-glob');

module.exports = app => {
  const router = Router();
  app.use('/api', router);
  fb.sync('**/src/routes/**-routes.js').forEach(file => {
    require(`../../${file}`)(router);
  });
};
