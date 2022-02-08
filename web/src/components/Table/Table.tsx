import "./Table.css";
import { v4 as uuidv4 } from "uuid";

function Table(props: any) {

    const { tableData } = props
    const { headers, body, footer } = tableData 

    const footerItens = (footer : Array<string>)=>{
        return footer?.map((footer : string) =>{
            return (
                <th key={uuidv4()}>{footer}</th>
            )
        })
    }

    const headerItens = (headers : Array<string>)=>{
        return headers?.map((header : string) =>{
            return (
                <th key={uuidv4()}>{header}</th>
            )
        })
    }

    const bodyItens = (bodys : Array<Object>) => {
        const colunaItem = (coluna: Array<string>) => {
            return coluna?.map((colunaItem : string) => {
                return (
                    <td key={uuidv4()}>{colunaItem}</td>
                )
            })
        }
        return bodys?.map((body : any) => {
            return (
                <tr key={uuidv4()}>
                    {colunaItem(body.coluna)}
                </tr>
            )
        })
    }

    return (
        <table id="transacoes">
            <thead>
                <tr>
                    {headerItens(headers)}
                </tr>
            </thead>
            <tbody>
                {bodyItens(body)}
            </tbody>
            <tfoot>
                <tr>
                    {footerItens(footer)}
                </tr>
            </tfoot>
        </table>
    )
}

// Table.defaultProps = {
//     content: <></>,
// };

export default Table