require('dotenv').config()
import TransacaoRepository from "./repository/TransacaoRepository"
import Transacoes from "./model/Transacoes/TransacaoDTO";
import TransacaoModel from "./model/Transacoes/TransacaoModel";

import express from "express";
const app = express();

import transacaoRoute from './routes/transacoes'
transacaoRoute(app);

const PORT = process.env.APP_PORT;

// app.get('/', (req : any, res : any) => {
//   var temp = new Transacoes("3201903010000014200096206760174753****3153153453JOÃO MACEDO   BAR DO JOÃO       ");
//   const conn = new TransacaoRepository().getTransactions()
//   res.send('Express + TypeScript Server')
// });
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
