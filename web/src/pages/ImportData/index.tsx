import { UploadButton, Modal, Menu } from "../../components"
import "./index.css"
import Transacoes from "../../services/Transacoes"
import React, { useState } from 'react';

function ImportData() {
	
	const transacoes = new Transacoes();
	const [displayModal, setDisplayModal] = useState(false);
	const menu = [
		{
			label: "Importar Dados",
			link: "/"
		},
		{
			label: "Listar",
			link: "/list"
		},
	];

	const handleFileInput = async (file: any) => {
		const uploadOk = await transacoes.upload(file)
		if (uploadOk) {
			setDisplayModal(true)
		}
	}

	const closeModal = () =>{
		setDisplayModal(false)
	}


	return (
		<>
			<Menu menu={menu}/>
			<div className="body">
				<Modal display={displayModal} closeModal={closeModal}>
					Upload Feito com sucesso!
				</Modal>
				<UploadButton handleFileInput={handleFileInput} />
			</div>
		</>
	);
}

export default ImportData;
