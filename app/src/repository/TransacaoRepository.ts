import { resolve } from "path/posix";
import DataBaseConnection from "../database/DatabaseConnection"
import TransacaoModel from "../model/Transacoes/TransacaoModel"

export default class TransacaoRepository {

    private mysqlConnection = DataBaseConnection;

    getTransactions(): Promise<Array<TransacaoModel>> {
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

}