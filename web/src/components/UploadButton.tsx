import React from "react";
import "./UploadButton.css"
import svg from "../assets/file-upload.svg"

function UploadButton(props : any) {

    const { handleFileInput } = props;
    
    const onChange = (event : any) => {
        const [file] = event.target.files
        handleFileInput && handleFileInput(file)
    }

    const fireEvent= () =>{
        document.getElementById('fileUpload')!!.click();
    }

    return (
        <div className="uploader" onClick={fireEvent}>
            <input type="file" name="fileUpload" id="fileUpload" onChange={onChange}/>
            <label>
                <div id="upload-component">
                    <img src={svg} alt="Upload" width="50" height="50"/>
                    <span id="file-upload-btn" className="btn btn-primary">Selecione um arquivo</span>
                </div>
            </label>
        </div>
    );
  }
  
  UploadButton.defaultProps = {
    handleFileInput: () =>{},
  };
  
  export default UploadButton;
  