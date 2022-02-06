require('dotenv').config()
import TransacaoRepository from "./repository/TransacaoRepository"
import Transacoes from "./model/Transacoes/TransacaoDTO";
import TransacaoModel from "./model/Transacoes/TransacaoModel";

import multer from "multer";
import express from "express";
import transacaoRoute from './routes/transacoes'
import cors from "cors"

const upload = multer({ dest: 'uploads/' })
const app = express();
app.use(cors())

transacaoRoute(app, [upload]);
const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
