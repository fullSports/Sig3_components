import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IFornecedor from "../../../../../utils/interfaces/IFornecedor";
import apiFullSports from "../../../../../api/apiFullSports";
import { Box, Button, Modal} from "@mui/material";
const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const ExibeTitulo = styled.h3`
     margin: 2%;
    text-align: center;
    font-size: 30px;
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


const ConsultarFornecedores = () =>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [spinner, setSpinner] = useState(false);
    const [fornecedores, setFornecedores] = useState<IFornecedor[]>([]);

    useEffect(() => {
        setSpinner(true)
        apiFullSports.get<IFornecedor[]>('listar-fornecedores/')
            .then(resposta =>{ setFornecedores(resposta.data); setSpinner(false)})
            .catch((err) => console.log(err))
    }, []);

    const deletar = (DeletarFornecedor: IFornecedor) => {
        setSpinner(true)
        apiFullSports.delete(`deletar-fornecedor/${DeletarFornecedor._id}`)
            .then(() => {
                setSpinner(false)
                window.location.reload();
            }).catch((err) => console.log(err))
    }

    return(
        <>
        <Main>
                <ExibeTitulo id="exibe-titulo" className="exibe-titulo">Lista de Fornecedores</ExibeTitulo>
                <PainelBody id="panel-body" className="panel-name" >
                    <div>
                        <TableExibe id="table-exibe" className="table-exibe">
                            <thead>
                                <tr>
                                    <th>CNPJ</th>
                                    <th>Nome da Empresa</th>
                                    <th>Cep</th>
                                    <th>Endereço</th>
                                    <th>Data de Cadastro</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fornecedores.map(item=>
                                    <tr key={item._id.toString()}>
                                        <th>{item.cnpj}</th>
                                        <th>{item.nomeEmpresa}</th>
                                        <th>{item.cep}</th>
                                        <th>{item.endereco}</th>
                                        <th>{item.dataCadastro}</th>
                                        <td>
                                        <BtnExibeGroup id="btn-exibe-group" className="btn-exibe-group">
                                                <a href={`/dashboard/atualizar-fornecedor/${item._id}`} >
                                                    <BtnExibe id="btn-exibe" className="btn-exibe"> Editar </BtnExibe></a>

                                                <React.Fragment>
                                                    <BtnExibe id="btn-exibe" className="btn-exibe" onClick={handleOpen}>Excluir</BtnExibe>
                                                    <Modal
                                                        hideBackdrop
                                                        open={open}
                                                        onClose={handleClose}
                                                        aria-labelledby="child-modal-title"
                                                        aria-describedby="child-modal-description"
                                                    >
                                                        <Box sx={{ ...estiloMenssagem, width: 650, display: 'flex',justifyContent:'center'}}>
                                                            <h2 id="child-modal-title">Deseja mesmo excluir a empresa {item.nomeEmpresa} ?</h2>
                                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                                        </Box>
                                                    </Modal>
                                                </React.Fragment>
                                            </BtnExibeGroup>
                                        </td>
                                    </tr>)}
                            </tbody>
                            {spinner && (<p>carregando...</p>)}
                        </TableExibe>
                    </div>
                </PainelBody>
            </Main>
        </>
)}
export default ConsultarFornecedores;