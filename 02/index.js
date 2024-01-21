const express = require('express')
const server = express()
let minutos = 0
let segundos = 0
let intervalo

function incrementar() {
    segundos++
    if (segundos >= 60) {
        minutos++
        segundos = 0
    }
}
server.get('/', (req, res) => {
    const minutosFormatado = String(minutos).padStart(2, "0")
    const segundosFormatado = String(segundos).padStart(2, "0")
    return res.send(`Tempo atual: ${minutosFormatado}:${segundosFormatado}`)
})
server.get('/iniciar', (req, res) => {
    if (!intervalo) { intervalo = setInterval(incrementar, 1000) }
    return res.send('iniciado')
})
server.get('/pausar', (req, res) => {
    if (intervalo) {
        clearInterval(intervalo)
        intervalo = null
    }
    return res.send('pausado')
})
server.get('/continuar', (req, res) => {
    if (!intervalo) { intervalo = setInterval(incrementar, 1000) }
    return res.send('continuado')
})
server.get('/zerar', (req, res) => {
    if (intervalo) {
        clearInterval(intervalo)
        intervalo = null
        segundos = 0
        minutos = 0
    }
    return res.send('zerado')
})
server.listen(8000, console.log('Servidor rodando'))