const express = require("express");
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Conexion exitosa a mongoDB');
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
