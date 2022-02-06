import axios from 'axios';

export default class Transacoes {

    upload(file: any){
        const formData = new FormData();
        formData.append('transacoes', file);

        axios.post("http://localhost:8090/transacoes", formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            // TODO Criar Mensagem de sucesso quando dados foram importados
            console.warn(response)
        } )
    }

}