import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Footer from "../../../Components/Footer";
import Cabecalho from "../../../Components/Cabecalho";
import ICliente from "../../../interfaces/ICliente";
import apiFullSports from "../../../api/apiFullSports";
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
    color: rgb(243, 243, 243);
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
const ConsultaCliente = () => {
    const [clientes, setClientes] = useState<ICliente[]>([]);

    useEffect(()=>{
        apiFullSports.get<ICliente[]>('listar-clientes/')
            .then(resposta => setClientes(resposta.data));
    },[]);
    
    const deletar = (DeletarCliente: ICliente)=>{
        apiFullSports.delete(`deletar-cliente/${DeletarCliente._id}/`);
        window.location.reload();
    }
    console.log(clientes.map(item=>item.dataCadastro))
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
                                {clientes.map(item=> 
                                
                                <tr key={item._id.toString()}> 
                                    <th>{`${item.dataCadastro.toLocaleString()}`}</th>
                                    <th>{item.cpf}</th>
                                    <th>{item.nome}</th>
                                    <th>{item.dataNascimento}</th>
                                    <th>{item.sexo}</th>
                                    <th>{item.cep}</th>
                                    <th>{item.endereco}</th>

                                    <td>
                                        <BtnExibeGroup id="btn-exibe-group" className="btn-exibe-group">
                                            <a href={`/sig/atualizar-cliente/${item._id}`} >
                                                <BtnExibe id="btn-exibe" className="btn-exibe"> Editar </BtnExibe></a>
                                    
                                                <BtnExibe id="btn-exibe" className="btn-exibe" onClick={()=> deletar(item)}>Excluir</BtnExibe>
                                        </BtnExibeGroup>
                                    </td>
                                </tr>)}

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