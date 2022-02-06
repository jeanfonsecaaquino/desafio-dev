import DataBaseConnection from "../database/DatabaseConnection"
import TransacaoModel from "../model/Transacoes/TransacaoModel"

export default class TransacaoRepository {

    private mysqlConnection = DataBaseConnection;

    getTransacoes(): Promise<Array<TransacaoModel>> {
        return new Promise((resolve, reject) => {
            this.mysqlConnection.query(
                'SELECT * FROM Transacoes',
                function (err: any, results: any) {
                    console.log(results);
                    if (err) {
                        reject(err);
                    }
                    const transacoes = results.map((result : any) =>{
                        return new TransacaoModel().rowToModel(result);
                    })
                    resolve(transacoes);
                }
            );
        })
    }

    //TODO PENSAR EM EXPURGAR O ARQUIVO DA PASTA QUANDO OK E COMO LOGAR PROCESSAMENTO NAO OK
    salvarTransacao(transacaoModel: TransacaoModel): Promise<TransacaoModel> {
        return new Promise((resolve, reject) => {
            const set = transacaoModel.ModelToSet();
            this.mysqlConnection.query(
                'INSERT INTO Transacoes SET ?',
                set,
                function (err: any, results: any) {
                    if (err) {
                        reject(err);
                    }
                    resolve(results);
                }
            );
        })
    }

}