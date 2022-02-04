import TransacaoDTO from "./TransacaoDTO";

export default class TransacaoModel {
    id?: number;
    cartao?: string;
    cpf?: string;
    donoLoja?: string;
    hora?: string;
    nomeLoja?: string;
    tipoTransacao?: number;
    valor?: number;
    dataAtualizacao?: Date;
    dataCriacao?: Date;
    dataOcorrencia?: Date;
    
    DtoToModel(transacaoDTO: TransacaoDTO){
        this.id = Number(transacaoDTO.id) || undefined;
        this.cartao = transacaoDTO.cartao;
        this.cpf = transacaoDTO.cpf;
        this.donoLoja = transacaoDTO.cpf;
        this.hora = transacaoDTO.hora;
        this.nomeLoja = transacaoDTO.nomeLoja;
        this.tipoTransacao = Number(transacaoDTO.tipoTransacao);
        this.valor = Number(transacaoDTO.valor);
        this.dataOcorrencia = transacaoDTO.dataOcorrencia ? new Date(transacaoDTO.dataOcorrencia.replace(/(\d{4})(\d{2})(\d{2})$/,"$1-$2-$3")) : undefined
    }

    rowToModel(row: any){
        this.id = row.id;
        this.cpf = row.cpf;
        this.dataAtualizacao = row.dataAtualizacao;
        this.dataCriacao = row.dataCriacao;
        this.dataOcorrencia = row.dataOcorrencia;
        this.donoLoja = row.donoLoja;
        this.hora = row.hora;
        this.nomeLoja = row.nomeLoja;
        this.tipoTransacao =Number(row.tipoTransacao);
        this.valor = Number(row.valor);
        return this;
    }
}