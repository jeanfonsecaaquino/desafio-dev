import axios from 'axios';

export default class Transacoes {

    async upload(file: any){
        const formData = new FormData();
        formData.append('transacoes', file);

        // TODO parametrizar endpoint
        const response = await axios.post("http://localhost:8090/transacoes", formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        return response.status === 200
    }

    async getTransacoes(){
        const result = await axios.get("http://localhost:8090/transacoes")

        var total = 0;
        result.data.forEach((data: any) =>{
            total += data.valor
        })

        const tableData = {
            loaded: true,
            headers: ["CPF", "DATA OCORRENCIA", "DONO LOJA", "HORA", "NOME LOJA", "TIPO TRANSACAO", "VALOR"],
            body: result.data.map((data: any) =>{
                return { 
                    coluna: [data.cpf, data.dataOcorrencia, data.donoLoja, data.hora, data.nomeLoja, data.tipoTransacao, data.valor]
                }
            }),
            footer: ["Total", `R$${total}`],
        }
        return tableData;
    }

}