import express from "express";
import TransacaoService from "../service/TransacaoService"

const getRoutes = (app : express.Application) =>{

    const transacaoService = new TransacaoService()

    app.get('/transacoes', async (req : express.Request, res : express.Response) => {
        const transacoes = await transacaoService.getTransactions();
        res.status(200).send(transacoes)
    });
}

export default getRoutes