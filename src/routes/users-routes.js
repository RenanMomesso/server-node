module.exports = router => {
  router.get('/users', (req, res) => {
    return res.json({
      users: [
        { username: 'heldinho' },
        { username: 'miguel' },
        { username: 'mary' },
      ],
      error: false,
    });
  });
};
