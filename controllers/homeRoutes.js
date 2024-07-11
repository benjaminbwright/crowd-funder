const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('This will be the home page');
});

module.exports = router;
