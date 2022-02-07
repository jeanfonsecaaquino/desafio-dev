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

}