import React from "react";
import styled from "styled-components";
import TabelaProduto from "./tabela";
const Main = styled.main`
    width: 100%;
    min-height: 600px;
    font-size: 24px;
`;
const ExibeTitulo = styled.h3`
    margin: 2%;
    text-align: center;
`;
const PainelBody = styled.div`
`;
const TableExibe = styled.table`
    border-color: rgb(174, 174, 174);
	margin-right: auto;
	margin-left: auto;
	width: 70%;
	box-shadow: 1px 1px 8px rgb(70, 70, 70, 0.2);
	border-collapse: separate;
	border-spacing: 5px 5px;
	padding-bottom: 5%;
	line-height: 35px;
    td{
        border-style: none;
        border-top: 2px solid rgb(167, 230, 89, 0.5);
    }
    th, td{
        padding: 1px;
        border-radius: 3px;
        border-top: 2px solid rgb(167,230,89,0.5);
    }
    th {
        font-size: 13pt;
        color: rgb(232, 232, 232);
        background-color: #4c4f54;
        img{
            padding: 0;
            margin-left: auto;
            margin-right: auto;
            width: 120px;
            height: 70px;
        }
    }
    tr{
        background-color: #4c4f54;
    }
    
    @media screen and (max-width: 900px) {
       
    width: auto;
    position: static;
    overflow-x: auto;
    width: 100%;
    display: block;
    padding: 20px .625em .625em .625em;
    
    thead, tbody, thead, th {
    display: block;
    }
    thead {
    float: left;
    }
    tbody {
    width: auto;
    position: static;
    overflow-x: auto;
    }
    td, th {

    height: 60px;
    vertical-align: middle;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100px;
    font-size: 12px;
    }
    tbody tr {
    display: table-cell;
    }
    tbody td {
    display: block;
    text-align: center;
    }
    tr:nth-child(even) {
    background: transparent;
    }

    tr td:nth-child(even) {
    border-right: 1px solid #493e3e;
    }
   
    }
`;
const ConsultaProduto = () => {

    return (
        <>
            <Main>
                <ExibeTitulo id="exibe-titulo" className="exibe-titulo">Lista de Produtos</ExibeTitulo>
                <PainelBody id="panel-body" className="panel-name" >
                    <div>
                        <TableExibe id="table-exibe" className="table-exibe">
                            <thead>
                                <tr>
                                    <th>CNPJ do Fornecedor</th>
                                    <th>Nome</th>
                                    <th>Categoria</th>
                                    <th>Sexo alvo</th>
                                    <th>Cor</th>
                                    <th>Preço</th>
                                    <th>Dt.Cadastro</th>
                                    <th>Qtd.Estoque</th>
                                    <th>1º ImagemProduto</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TabelaProduto />
                            </tbody>

                        </TableExibe>
                    </div>
                </PainelBody>
            </Main>
        </>
    );
}
export default ConsultaProduto