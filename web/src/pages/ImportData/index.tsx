import { UploadButton } from "../../components"
import "./index.css"
import Transacoes from "../../services/Transacoes"

function ImportData() {

  const transacoes = new Transacoes();

  const handleFileInput = (file :any)=>{
    transacoes.upload(file)
  }
  

  return (
    <div className="body">
      <UploadButton handleFileInput={handleFileInput}/>
    </div>
  );
}

export default ImportData;
