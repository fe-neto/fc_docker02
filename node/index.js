const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db', 
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req, res) => {
  

    connection.query(`CREATE TABLE IF NOT EXISTS people(nome varchar(255))`)

    connection.query(`INSERT INTO people (nome) VALUES ('Maria${Math.floor((Math.random() * 10) + 1)}')`)
  
    connection.query(`SELECT nome FROM people`, (error, results) => {
      res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>
          ${results.map(el => `<li>${el.nome}</li>`).join('')}
        </ul>
      `)
    })
  })
  

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})