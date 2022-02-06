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
        this.cartao = transacaoDTO.cartao.trim();
        this.cpf = transacaoDTO.cpf.trim();
        this.donoLoja = transacaoDTO.cpf.trim();
        this.hora = transacaoDTO.hora.trim();
        this.nomeLoja = transacaoDTO.nomeLoja.trim();
        this.tipoTransacao = Number(transacaoDTO.tipoTransacao);
        this.valor = Number(transacaoDTO.valor);
        this.dataOcorrencia = transacaoDTO.dataOcorrencia ? new Date(transacaoDTO.dataOcorrencia.replace(/(\d{4})(\d{2})(\d{2})$/,"$1-$2-$3")) : undefined
        return this;
    }

    rowToModel(row: any){
        this.id = row.id;
        this.cpf = row.cpf.trim();
        this.dataAtualizacao = row.dataAtualizacao;
        this.dataCriacao = row.dataCriacao;
        this.dataOcorrencia = row.dataOcorrencia;
        this.donoLoja = row.donoLoja.trim();
        this.hora = row.hora.trim();
        this.nomeLoja = row.nomeLoja.trim();
        this.tipoTransacao =Number(row.tipoTransacao);
        this.valor = Number(row.valor);
        return this;
    }

    ModelToSet(){
        return { 
            tipoTransacao: this.tipoTransacao, 
            dataOcorrencia: this.dataOcorrencia,
            valor: this.valor,
            cpf: this.cpf,
            cartao: this.cartao,
            hora: this.hora,
            donoLoja: this.donoLoja,
            nomeLoja: this.nomeLoja
        }
    }
}