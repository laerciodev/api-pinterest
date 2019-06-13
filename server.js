const express = require('express');

const app = express();

app.get('/', (req, resp) => {
    resp.send('express rodando!');
});

app.listen(3000, () => {
    console.log('Rodando');
})