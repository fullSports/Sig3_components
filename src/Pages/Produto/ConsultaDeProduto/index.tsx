import React from "react";
import styled from "styled-components";
import Footer from "../../../Components/Footer";
import Cabecalho from "../../../Components/Cabecalho";
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
	width: 80%;
	box-shadow: 1px 1px 8px rgb(70, 70, 70, 0.2);
	border-collapse: separate;
	border-spacing: 5px 0;
	padding-bottom: 5%;
	line-height: 35px;
    td{
        border-style: none;
        border-top: 2px solid rgb(167, 230, 89, 0.5);
    }
    th, td{
        padding: 4px;
        border-radius: 3px;
    }
    th {
        font-size: 13pt;
        color: rgb(232, 232, 232);
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
const ConsultaProduto = () => {
    const link = "#"
    return (
        <>
            <Cabecalho />
            <Main>
                <ExibeTitulo id="exibe-titulo" className="exibe-titulo">Lista de Produtos</ExibeTitulo>
                <PainelBody id="panel-body" className="panel-name" >
                    <div>
                        <TableExibe id="table-exibe" className="table-exibe">
                            <thead>
                                <tr>
                                    <th>CNPJ</th>
                                    <th>Nome</th>
                                    <th>Tipo</th>
                                    <th>Cor</th>
                                    <th>Preço</th>
                                    <th>Dt.Cadastro</th>
                                    <th>Qtd.Estoque</th>
                                    <th>ImagemProduto</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td >
                                        {/* <img src="@{/sig/produtos/mostrarImagem/{imagem}(imagem=${produto.nomeImagem})}" width="100" /> */}
                                    </td>
                                    <td>
                                        <BtnExibeGroup id="btn-exibe-group" className="btn-exibe-group">
                                            
                                                <BtnExibe id="btn-exibe" className="btn-exibe"><a href={link} > Editar </a></BtnExibe>
                                            
                                                <BtnExibe id="btn-exibe" className="btn-exibe"> <a href={link}>Excluir</a></BtnExibe>
                                        </BtnExibeGroup>
                                    </td>
                                </tr>
                                
                               
                            </tbody>
                        </TableExibe>
                    </div>
                </PainelBody>
            </Main>
            <Footer />
        </>
    );
}
export default ConsultaProduto;