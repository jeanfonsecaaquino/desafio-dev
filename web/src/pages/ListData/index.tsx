import "./index.css"
import { Menu, Table } from "../../components"
import Transacoes from "../../services/Transacoes"
import React, { useState } from 'react';

function ListData() {

	const transacoes = new Transacoes();
	const [tableData, setTableData] = useState({loaded: false});

	const getData = async ()=>{
		const taleData = await transacoes.getTransacoes()
		setTableData(taleData)
	}

	tableData.loaded || getData();

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

	return (
		<>
			<Menu menu={menu} />
			<div>
				<Table tableData={tableData}/>
			</div>
		</>
	);
}

export default ListData;
