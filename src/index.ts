// importa todas as classes da dependência express
import * as express from 'express'

// importa o mongoose
import mongoose = require("mongoose")

// importa as rotas
import vinicius from './routes/index'

// cria uma instância do express
const servidor: express.Application = express()

// configura o servidor com middleware para transformar em JSON
servidor.use(express.json())
servidor.use(express.urlencoded({extended: false}))

// configura servidor com as rotas
servidor.use(vinicius)

// define a porta
const porta = 3003
const uriDB: string = 'mongodb://localhost:27017'

// conecta no mongodb e sobe o servidor
mongoose
    .connect(uriDB)
    .then(() => 
    servidor.listen(porta, () => {
        console.log(`Servidor rodando na porta ${porta}`)
    }
    )
    )
    .catch(error => {
        throw error
    })
