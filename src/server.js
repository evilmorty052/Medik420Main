const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3001;
const apiKey = 'qp2hh3efxb2p';
const apiSecret = '7wrthex3vdmq7jf3zcnvq733ad8xtg3jhhfhsu42ugxchav78h2e9m3vkyfuu5d5';

app.get('/token', (req, res) => {
  const userId = req.query.userId;

  if (!userId) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  const token = jwt.sign({ user_id: userId }, apiSecret, { expiresIn: '1d' });

  res.json({ token });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
