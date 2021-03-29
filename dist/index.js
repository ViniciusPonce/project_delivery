"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importa todas as classes da dependência express
const express = require("express");
// importa o mongoose
const mongoose = require("mongoose");
// importa as rotas
const index_1 = require("./routes/index");
// cria uma instância do express
const servidor = express();
// configura o servidor com middleware para transformar em JSON
servidor.use(express.json());
servidor.use(express.urlencoded({ extended: false }));
// configura servidor com as rotas
servidor.use(index_1.default);
// define a porta
const porta = 3003;
const uriDB = 'mongodb://localhost:27017';
// conecta no mongodb e sobe o servidor
mongoose
    .connect(uriDB)
    .then(() => servidor.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
}))
    .catch(error => {
    throw error;
});
