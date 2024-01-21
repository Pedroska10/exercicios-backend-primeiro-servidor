const express = require('express');

const app = express();

const jogadores = ['José', 'Maria', 'João', 'Marcos', 'Fernanda'];
let indice = 0

app.get('/', (req, res) => {
    if (indice >= jogadores.length) {
        indice = 0
    }
    let nomeJogador = jogadores[indice]
    indice++
    return res.send(`É a vez de ${nomeJogador} jogar!`);
});

app.listen(3000);