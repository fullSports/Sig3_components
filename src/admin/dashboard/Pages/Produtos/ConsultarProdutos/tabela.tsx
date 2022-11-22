import React, { useEffect, useState } from "react";
import IProduto from "../../../../../utils/interfaces/IProduto";
import apiFullSports from "../../../../../api/apiFullSports";
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


const TabelaProduto = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const urlParams = new URLSearchParams(window.location.search);
    const categoriaParam = urlParams.get('categoria');
    const handleClose = () => {
        setOpen(false);
    };
    console.log(categoriaParam)
    const [spinner, setSpinner] = useState(false);
    const [produto, setProduto] = useState<IProduto[]>([]);
    useEffect(() => {
        setSpinner(true)
        apiFullSports.get<IProduto[]>('listar-produtos/')
            .then(response => {
                setProduto(response.data);
                setSpinner(false);
            }).catch((err) => { console.log(err) });
    }, [])

    const deletar = (DeletarProduto: IProduto) => {
        apiFullSports.delete(`deletar-produto/${DeletarProduto._id}/`);
        window.location.reload();
    }


    if (categoriaParam?.toString() === 'equipamento') {
        return <>
            {produto.map(item => {
                const categoriaDeproduto = item.categoriaProduto;
                if (categoriaDeproduto.equipamento !== undefined) {
                    return <tr key={item._id.toString()}>
                        <th>{categoriaDeproduto.equipamento.fornecedor.cnpj}</th>
                        <th>{categoriaDeproduto.equipamento.nome}</th>
                        <th>Equipamentos</th>
                        <th>{categoriaDeproduto.equipamento.sexo}</th>
                        <th>{categoriaDeproduto.equipamento.cor}</th>
                        <th>{categoriaDeproduto.equipamento.preco}</th>
                        <th>{item.dataCadastro}</th>
                        <th>{categoriaDeproduto.equipamento.quantidade}</th>
                        <th><img src={categoriaDeproduto.equipamento.imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></th>
                        <td>
                            <BtnExibeGroup id="btn-exibe-group" className="btn-exibe-group">
                                <a href={`/dashboard/atualizar-produto/${item._id}`} >
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
                                            <h2 id="child-modal-title">Deseja mesmo excluir esse produto { } ?</h2>
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </BtnExibeGroup>
                        </td>
                    </tr>
                }
            })}
        </>
    } else if (categoriaParam?.toString() === 'calcado') {
        return <>
            {
                produto.map(item => {
                    const categoriaDeproduto = item.categoriaProduto;
                    if (categoriaDeproduto.calcado !== undefined) {
                        return <tr key={item._id.toString()}>
                            <th>{categoriaDeproduto.calcado.fornecedor.cnpj}</th>
                            <th>{categoriaDeproduto.calcado.nome}</th>
                            <th>Calçados</th>
                            <th>{categoriaDeproduto.calcado.sexo}</th>
                            <th>{categoriaDeproduto.calcado.cor}</th>
                            <th>{categoriaDeproduto.calcado.preco}</th>
                            <th>{item.dataCadastro}</th>
                            <th>{categoriaDeproduto.calcado.quantidade}</th>
                            <th><img src={categoriaDeproduto.calcado.imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></th>
                            <td>
                                <BtnExibeGroup id="btn-exibe-group" className="btn-exibe-group">
                                    <a href={`/dashboard/atualizar-produto/${item._id}`} >
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
                                                <h2 id="child-modal-title">Deseja mesmo excluir esse produto { } ?</h2>
                                                <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                                <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                            </Box>
                                        </Modal>
                                    </React.Fragment>
                                </BtnExibeGroup>
                            </td>
                        </tr>
                    }
                })
            }
        </>
    } else if (categoriaParam?.toString() === 'roupa') {
        return <>
            {produto.map(item => {
                const categoriaDeproduto = item.categoriaProduto;
                if (categoriaDeproduto.roupa !== undefined) {
                    return <tr key={item._id.toString()}>
                        <th>{categoriaDeproduto.roupa.fornecedor.cnpj}</th>
                        <th>{categoriaDeproduto.roupa.nome}</th>
                        <th>Roupas</th>
                        <th>{categoriaDeproduto.roupa.sexo}</th>
                        <th>{categoriaDeproduto.roupa.cor}</th>
                        <th>{categoriaDeproduto.roupa.preco}</th>
                        <th>{item.dataCadastro}</th>
                        <th>{categoriaDeproduto.roupa.quantidade}</th>
                        <th><img src={categoriaDeproduto.roupa.imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></th>
                        <td>
                            <BtnExibeGroup id="btn-exibe-group" className="btn-exibe-group">
                                <a href={`/dashboard/atualizar-produto/${item._id}`} >
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
                                            <h2 id="child-modal-title">Deseja mesmo excluir esse produto { } ?</h2>
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </BtnExibeGroup>
                        </td>
                    </tr>
                }
            })}
        </>
    } else if (categoriaParam?.toString() === 'suplemento') {
        return <>
            {produto.map(item => {
                const categoriaDeproduto = item.categoriaProduto;
                if (categoriaDeproduto.suplemento !== undefined) {
                    return <tr key={item._id.toString()}>
                        <th>{categoriaDeproduto.suplemento.fornecedor.cnpj}</th>
                        <th>{categoriaDeproduto.suplemento.nome}</th>
                        <th>Suplementos</th>
                        <th>{categoriaDeproduto.suplemento.sexo}</th>
                        <th>{categoriaDeproduto.suplemento.cor}</th>
                        <th>{categoriaDeproduto.suplemento.preco}</th>
                        <th>{item.dataCadastro}</th>
                        <th>{categoriaDeproduto.suplemento.quantidade}</th>
                        <th><img src={categoriaDeproduto.suplemento.imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></th>
                        <td>
                            <BtnExibeGroup id="btn-exibe-group" className="btn-exibe-group">
                                <a href={`/dashboard/atualizar-produto/${item._id}`} >
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
                                            <h2 id="child-modal-title">Deseja mesmo excluir esse produto { } ?</h2>
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </BtnExibeGroup>
                        </td>
                    </tr>
                }
            })}
        </>
    } else {
        return <>
            {spinner && (<p>carregando...</p>)}
            {produto.map(item => {
                const categoriaDeproduto = item.categoriaProduto;
                if (categoriaDeproduto.calcado !== undefined) {
                    return <tr key={item._id.toString()}>
                        <th>{categoriaDeproduto.calcado.fornecedor.cnpj}</th>
                        <th>{categoriaDeproduto.calcado.nome}</th>
                        <th>Calçados</th>
                        <th>{categoriaDeproduto.calcado.sexo}</th>
                        <th>{categoriaDeproduto.calcado.cor}</th>
                        <th>{categoriaDeproduto.calcado.preco}</th>
                        <th>{item.dataCadastro}</th>
                        <th>{categoriaDeproduto.calcado.quantidade}</th>
                        <th><img src={categoriaDeproduto.calcado.imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></th>
                        <td>
                            <BtnExibeGroup id="btn-exibe-group" className="btn-exibe-group">
                                <a href={`/dashboard/atualizar-produto/${item._id}`} >
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
                                            <h2 id="child-modal-title">Deseja mesmo excluir esse produto { } ?</h2>
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </BtnExibeGroup>
                        </td>
                    </tr>
                } else if (categoriaDeproduto.roupa !== undefined) {
                    return <tr key={item._id.toString()}>
                        <th>{categoriaDeproduto.roupa.fornecedor.cnpj}</th>
                        <th>{categoriaDeproduto.roupa.nome}</th>
                        <th>Roupas</th>
                        <th>{categoriaDeproduto.roupa.sexo}</th>
                        <th>{categoriaDeproduto.roupa.cor}</th>
                        <th>{categoriaDeproduto.roupa.preco}</th>
                        <th>{item.dataCadastro}</th>
                        <th>{categoriaDeproduto.roupa.quantidade}</th>
                        <th><img src={categoriaDeproduto.roupa.imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></th>
                        <td>
                            <BtnExibeGroup id="btn-exibe-group" className="btn-exibe-group">
                                <a href={`/dashboard/atualizar-produto/${item._id}`} >
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
                                            <h2 id="child-modal-title">Deseja mesmo excluir esse produto { } ?</h2>
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </BtnExibeGroup>
                        </td>
                    </tr>
                } else if (categoriaDeproduto.equipamento !== undefined) {
                    return <tr key={item._id.toString()}>
                        <th>{categoriaDeproduto.equipamento.fornecedor.cnpj}</th>
                        <th>{categoriaDeproduto.equipamento.nome}</th>
                        <th>Equipamentos</th>
                        <th>{categoriaDeproduto.equipamento.sexo}</th>
                        <th>{categoriaDeproduto.equipamento.cor}</th>
                        <th>{categoriaDeproduto.equipamento.preco}</th>
                        <th>{item.dataCadastro}</th>
                        <th>{categoriaDeproduto.equipamento.quantidade}</th>
                        <th><img src={categoriaDeproduto.equipamento.imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></th>
                        <td>
                            <BtnExibeGroup id="btn-exibe-group" className="btn-exibe-group">
                                <a href={`/dashboard/atualizar-produto/${item._id}`} >
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
                                            <h2 id="child-modal-title">Deseja mesmo excluir esse produto { } ?</h2>
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </BtnExibeGroup>
                        </td>
                    </tr>
                } else if (categoriaDeproduto.suplemento !== undefined) {
                    return <tr key={item._id.toString()}>
                        <th>{categoriaDeproduto.suplemento.fornecedor.cnpj}</th>
                        <th>{categoriaDeproduto.suplemento.nome}</th>
                        <th>Suplementos</th>
                        <th>{categoriaDeproduto.suplemento.sexo}</th>
                        <th>{categoriaDeproduto.suplemento.cor}</th>
                        <th>{categoriaDeproduto.suplemento.preco}</th>
                        <th>{item.dataCadastro}</th>
                        <th>{categoriaDeproduto.suplemento.quantidade}</th>
                        <th><img src={categoriaDeproduto.suplemento.imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></th>
                        <td>
                            <BtnExibeGroup id="btn-exibe-group" className="btn-exibe-group">
                                <a href={`/dashboard/atualizar-produto/${item._id}`} >
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
                                            <h2 id="child-modal-title">Deseja mesmo excluir esse produto { } ?</h2>
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </BtnExibeGroup>
                        </td>
                    </tr>
                }

            })}
        </>
    }

}
export default TabelaProduto;