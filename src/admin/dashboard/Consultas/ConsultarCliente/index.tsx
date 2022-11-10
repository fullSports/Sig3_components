import React from "react";
import styled from "styled-components";
import Footer from "../../../../Components/Footer";
import Cabecalho from "../../../../Components/Menu/Header";

import TabelaCliente from "./tabela";
const Main = styled.main`
    width: 100%;
    min-height: 600px;
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
            margin: 0;
            width: 120px;
            height: 70px;
        }
    }
    tr{
        background-color: #4c4f54;
    }
    
    @media screen and (max-width: 1144px) {
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
        padding: 20px .625em .625em .625em;
        height: 60px;
        vertical-align: middle;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        width: 120px;
        font-size: 13px;
        text-overflow: ellipsis;
        }
        thead th {
        text-align: left;
        border-bottom: 1px solid #f7f7f9;
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
        tr td:nth-child(odd) {
        background: #F8F8F8;
        border-right: 1px solid #E6E4E4;
        }
        tr td:nth-child(even) {
        border-right: 1px solid #E6E4E4;
        }

    }
`;


const ConsultaCliente = () => {
    return (
        <>
            <Cabecalho />
            <Main>
                <ExibeTitulo id="exibe-titulo" className="exibe-titulo">Lista de Cliente</ExibeTitulo>
                <PainelBody id="panel-body" className="panel-name">

                    <div>
                        <TableExibe id="table-exibe" className="table-exibe">
                            <thead>
                                <tr>
                                    <th>foto de perfil</th>
                                    <th>Data de Cadastro</th>
                                    <th>CPF</th>
                                    <th>Nome</th>
                                    <th>Dt. Nascimento</th>
                                    <th>Sexo</th>
                                    <th>CEP</th>
                                    <th>Endereço</th>
                                </tr>
                            </thead>

                            <tbody>
                             <TabelaCliente/>
                            </tbody>
                        </TableExibe>
                    </div>
                </PainelBody>
            </Main>
            <Footer />
        </>
    );
}
export default ConsultaCliente;