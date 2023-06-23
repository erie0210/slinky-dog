import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/v1/follow', (req, res) => {
  res.json(req.body);
});

app.listen(3000, () => {
  console.log('Server is running');
});
