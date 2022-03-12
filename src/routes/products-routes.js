const { v4: uuidv4 } = require('uuid');
module.exports = router => {
  router.get('/products', (req, res) => {
    const products = [];
    [...Array(100)].map((_, index) => {
      products.push({
        id: uuidv4(),
        name: `Teste ${index}`,
        description: `Teste de produto ${index}`,
      });
    });
    return res.json({
      products,
      error: false,
    });
  });
};
