import MapValue from "./unmarshal";

export default class TransacaoDTO {

    private linha : string;
    id : string = "";
    tipoTransacao : string = "";
    dataOcorrencia : string = "";
    valor : string = "";
    cpf : string = "";
    cartao : string = "";
    hora : string = "";
    donoLoja : string = "";
    nomeLoja : string = "";

    @MapValue(1,1, 'tipoTransacao')
    private setTipoTransacao(){}

    @MapValue(2,9, 'dataOcorrencia')
    private setDataOcorrencia(){}
    
    @MapValue(10,19, 'valor')
    private setValor(){}

    @MapValue(20,30, 'cpf')
    private setCpf(){}

    @MapValue(31,42, 'cartao')
    private setCartao(){}

    @MapValue(43,48, 'hora')
    private setHora(){}

    @MapValue(49,62, 'donoLoja')
    private setDonoLoja(){}

    @MapValue(63,81, 'nomeLoja')
    private setNomeLoja(){}


    constructor(linha: string){
        this.linha = linha;
        this.setTipoTransacao();
        this.setDataOcorrencia();
        this.setValor();
        this.setNomeLoja();
        this.setCpf();
        this.setCartao();
        this.setHora();
        this.setDonoLoja();
    }
}