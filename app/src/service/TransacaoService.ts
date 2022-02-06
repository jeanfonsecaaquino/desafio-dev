import TransacaoRepository from "../repository/TransacaoRepository";
import lineReader from "line-reader"
import TransacaoModel from "../model/Transacoes/TransacaoModel";
import TransacaoDTO from "../model/Transacoes/TransacaoDTO";
import fs from "fs"
export default class TransacaoService {

    trasacaoRepository: TransacaoRepository = new TransacaoRepository();

    getTransacoes(){
        return this.trasacaoRepository.getTransacoes()
    }

    insercaoEmMassa(filePath?: string){
        lineReader.eachLine(filePath!!, async (line, last) => {
            const dto = new TransacaoDTO(line);
            const transacao = new TransacaoModel().DtoToModel(dto)!!
            await this.trasacaoRepository.salvarTransacao(transacao)
            if(last){
                fs.unlinkSync(filePath!!)
            }
        });
    }

}