module.exports = router => {
  router.get('/exemplo1', (req, res) => {
    return res.json({
      message: 'ok',
    });
  });
};
