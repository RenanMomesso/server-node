module.exports = router => {
  router.get('/exemplo2', (req, res) => {
    return res.json({
      message: 'exemplo número 2',
    });
  });
};
