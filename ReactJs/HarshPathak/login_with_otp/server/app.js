require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4002;

// middleware
app.use(express.json());
app.use(cors());

// app.get('/', (req, res) => {
//   res.status(200).json('server start');
// });

app.listen(PORT, () => {
  console.log(`Server start at Port No: ${PORT}`);
});
