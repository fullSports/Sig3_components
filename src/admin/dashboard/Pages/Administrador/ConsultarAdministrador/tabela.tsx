import React, { useEffect, useState } from "react";
import ICliente from "../../../../../utils/interfaces/ICliente";
import apiFullSports from "../../../../../api/apiFullSports";
import styled from "styled-components";

const Icone = styled.div`
    background-color: #796969;
    height: 50px;
    width: 50px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    font-size: 22px;
`;
const TabelaAdimistrador = () => {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => {
    //     setOpen(true);
    // };
    // const handleClose = () => {
    //     setOpen(false);
    // };
    const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
    const [menssagemErro, setMenssagemErro] = useState('');
    const [spinner, setSpinner] = useState(false);
    const [clientes, setClientes] = useState<ICliente[]>([]);
    useEffect(() => {
        setSpinner(true);
        apiFullSports.get<ICliente[]>('listar-clientes/')
            .then(resposta => { setSpinner(false); setClientes(resposta.data) })
            .catch(err => {
                console.log(err)
                setMensagemErroBolean(true)
                setMenssagemErro("Erro na requisição")
            })
    }, []);

    // const deletar = (DeletarCliente: ICliente) => {
    //     apiFullSports.delete(`deletar-cliente/${DeletarCliente._id}/`);
    //     window.location.reload();
    // }

    return <>
        {spinner && (<p>carregando...</p>)}
        {mensagemErroBolean && (<span id="menssagem-erro">{menssagemErro}</span>)}

        {

            clientes.map(item => {
                if (item.login.isAdmin) {
                    if (item.imagemPerfil === null || item.imagemPerfil === undefined || !item.imagemPerfil) {
                        return (
                            <tr key={item._id.toString()}>

                                <td>
                                    <Icone className="icone">
                                        <p className="text-black">{item.nome.charAt(0)}</p>
                                    </Icone>
                                </td>

                                {/* <td>{`${item.dataCadastro}`}</td> */}
                                <td>{`${item.cpf.charAt(0)}${item.cpf.charAt(1)}${item.cpf.charAt(2)}. *** . *** -${item.cpf.charAt(12)}${item.cpf.charAt(13)}`}</td>
                                <td>{item.nome}</td>
                                <td>{item.dataNascimento}</td>
                                <td>{item.sexo}</td>
                                <td>{item.cep}</td>
                                <td>{item.endereco}</td>
                                {/* <td>
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
                                        <Box id="menssageAlert">
                                            <h2 id="child-modal-title">Deseja mesmo excluir o cliente {item.nome} ?</h2>
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </BtnExibeGroup>
                        </td> */}
                            </tr>
                        )
                    } else {
                        return (
                            <>
                                <tr key={item._id.toString()}>

                                    <td>
                                        <div className="consulta-img-container">
                                            <img src={item.imagemPerfil.url} />
                                        </div>
                                    </td>
                                    {/* <td>{`${item.dataCadastro}`}</td> */}
                                    <td>{item.cpf}</td>
                                    <td>{item.nome}</td>
                                    <td>{item.dataNascimento}</td>
                                    <td>{item.sexo}</td>
                                    <td>{item.cep}</td>
                                    <td>{item.endereco}</td>
                                    {/* <td>
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
                                        <Box id="menssageAlert">
                                            <h2 id="child-modal-title">Deseja mesmo excluir o cliente {item.nome} ?</h2>
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </BtnExibeGroup>
                        </td> */}
                                </tr>
                            </>
                        )
                    }
                }
            })
        }
    </>


}
export default TabelaAdimistrador;
