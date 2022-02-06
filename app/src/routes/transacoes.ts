import express from "express";
import TransacaoService from "../service/TransacaoService"

const getRoutes = (app : express.Application, extras: any) =>{

    const transacaoService = new TransacaoService()
    const [upload] = extras

    app.get('/transacoes', async (req : express.Request, res : express.Response) => {
        const transacoes = await transacaoService.getTransacoes()
        res.status(200).send(transacoes)
    });

    app.post('/transacoes', upload.single('transacoes'), async (req : express.Request, res : express.Response) => {
        transacaoService.insercaoEmMassa(req.file?.path)
        res.status(200).send({ mensagem : "Upload realizado, processamento em execução" })
    });
}

export default getRoutes