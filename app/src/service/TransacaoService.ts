import TransacaoRepository from "../repository/TransacaoRepository";

export default class TransacaoService {

    trasacaoRepository: TransacaoRepository = new TransacaoRepository();

    constructor(){

    }

    getTransactions(){
        return this.trasacaoRepository.getTransactions()
    }

}