import React, { useState, useEffect } from "react";
import styled from "styled-components";
import apiFullSports from "../../../../../api/apiFullSports";
import IProduto from "../../../../../utils/interfaces/IProduto";
import { Box, Button, Modal } from "@mui/material";
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
    img {
        width: 100%;
        height: auto;
    }
    }
`;
const BtnExibeGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 2px;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;
`;
const BtnExibe = styled.button`
    border: none;
	border-radius: 5px;
    background-color: #313131;
    a{
        color: rgb(243, 243, 243);
    }
        font-size: 14px;
    width: 70px;
    height: 35px;
    :hover{
        text-decoration: none;
        background-color: rgb(0, 0, 0);
        transform:translate(0.3s);
    }
    @media screen and (max-width: 1144px) {
        width: 40px;
        justify-content: center;
    }
`;
const estiloMenssagem = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};
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
                                    <th>Cor</th>
                                    <th>Preço</th>
                                    <th>Dt.Cadastro</th>
                                    <th>Qtd.Estoque</th>
                                    <th>ImagemProduto</th>
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