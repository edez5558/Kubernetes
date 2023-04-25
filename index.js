const express = require('express');
const os = require('os');

const app = express();

app.get('/',(req,res) => {
  var value = req.query['value'];
  if(value == null)
    res.send('Ingrese un valor con el parametro value');
  else
    res.send(`El valor elevado al cuadrado es : ${value * value}`);
});

const port = 3000;
app.listen(port, () => console.log(`listening o port ${port}`));