import React, { useEffect, useState } from "react";
import ICliente from "../../../../utils/interfaces/ICliente";
import apiFullSports from "../../../../api/apiFullSports";
import styled from "styled-components";
import { Box, Button, Modal } from "@mui/material";
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


const TabelaCliente = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    
    const [spinner, setSpinner] = useState(false);   
    const [clientes, setClientes] = useState<ICliente[]>([]);
    useEffect(() => {
        setSpinner(true);
        apiFullSports.get<ICliente[]>('listar-clientes/')
            .then(resposta => {setSpinner(false); setClientes(resposta.data) })
            .catch((err) => console.log(err));
    }, []);

    const deletar = (DeletarCliente: ICliente) => {
        apiFullSports.delete(`deletar-cliente/${DeletarCliente._id}/`);
        window.location.reload();
    }

       return <>
       {spinner && (<p>carregando...</p>)}
       {
        
        clientes.map(item => {
            if (item.imagemPerfil == null) {
                return (
                    <tr key={item._id.toString()}>

                        <th>sem foto de perfil</th>

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

                                <React.Fragment>
                                    <BtnExibe id="btn-exibe" className="btn-exibe" onClick={handleOpen}>Excluir</BtnExibe>
                                    <Modal
                                        hideBackdrop
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="child-modal-title"
                                        aria-describedby="child-modal-description"
                                    >
                                        <Box sx={{ ...estiloMenssagem, width: 650, display: 'flex', justifyContent: 'center' }}>
                                            <h2 id="child-modal-title">Deseja mesmo excluir o cliente {item.nome} ?</h2>
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </BtnExibeGroup>
                        </td>
                    </tr>
                )
            } else {
                return (
                    <>
                    <tr key={item._id.toString()}>

                        <th><img src={item.imagemPerfil.url} alt="imagem de perfil" /></th>
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

                                <React.Fragment>
                                    <BtnExibe id="btn-exibe" className="btn-exibe" onClick={handleOpen}>Excluir</BtnExibe>
                                    <Modal
                                        hideBackdrop
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="child-modal-title"
                                        aria-describedby="child-modal-description"
                                    >
                                        <Box sx={{ ...estiloMenssagem, width: 650, display: 'flex', justifyContent: 'center' }}>
                                            <h2 id="child-modal-title">Deseja mesmo excluir o cliente {item.nome} ?</h2>
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </BtnExibeGroup>
                        </td>
                    </tr>
                    </>
                )
            }
        })
    }
        </>

    
}
export default TabelaCliente;