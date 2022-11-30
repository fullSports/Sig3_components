import React, { useEffect, useState } from "react";
import IProduto from "../../../../../utils/interfaces/IProduto";
import apiFullSports from "../../../../../api/apiFullSports";
import './../../../styles.css'
import { Box, Button, Modal } from "@mui/material";
import { GoTrashcan } from "react-icons/go";
import { FiEdit } from "react-icons/fi";

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
        apiFullSports.delete(`deletar-produto/${DeletarProduto._id}/`).then(() => {
            window.location.reload();
        }).catch((err)=>console.log(err))
    }



    if (categoriaParam?.toString() === 'equipamento') {
        return <>
            {produto.map(item => {
                const categoriaDeproduto = item.categoriaProduto;
                if (categoriaDeproduto.equipamento !== undefined) {
                    return <tr key={item._id.toString()}>
                        <td>{categoriaDeproduto.equipamento.fornecedor.cnpj}</td>
                        <td>{categoriaDeproduto.equipamento.nome}</td>
                        <td>Equipamentos</td>
                        <td>{categoriaDeproduto.equipamento.sexo}</td>
                        <td>{categoriaDeproduto.equipamento.cor}</td>
                        <td>{categoriaDeproduto.equipamento.preco}</td>
                        <td>{item.dataCadastro}</td>
                        <td>{categoriaDeproduto.equipamento.quantidade}</td>
                        <td className="img-consulta"><img src={categoriaDeproduto.equipamento.imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></td>
                        <td>
                            <div className="acoes-btn-group">
                                <a href={`/dashboard/atualizar-produto/${item._id}`} >
                                    <button className="btn-edit"> <FiEdit/> </button>
                                </a>
                                <React.Fragment>
                                    <button className="btn-exclui" onClick={handleOpen}><GoTrashcan/></button>
                                    <Modal
                                        hideBackdrop
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="child-modal-title"
                                        aria-describedby="child-modal-description"
                                        className="modal-container"
>
                                         <Box className="confirma-menesagem">
                                            <h2 id="child-modal-title">Deseja mesmo  esse produto { } ?</h2>
                                            <div className="btns-confirma-cont">
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </div>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </div>
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
                            <td>{categoriaDeproduto.calcado.fornecedor.cnpj}</td>
                            <td>{categoriaDeproduto.calcado.nome}</td>
                            <td>Calçados</td>
                            <td>{categoriaDeproduto.calcado.sexo}</td>
                            <td>{categoriaDeproduto.calcado.cor}</td>
                            <td>{categoriaDeproduto.calcado.preco}</td>
                            <td>{item.dataCadastro}</td>
                            <td>{categoriaDeproduto.calcado.quantidade}</td>
                            <td className="img-consulta"><img src={categoriaDeproduto.calcado.imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></td>
                            <td>
                                <div className="acoes-btn-group">
                                    <a href={`/dashboard/atualizar-produto/${item._id}`} >
                                        <button className="btn-edit"> <FiEdit/> </button>
                                    </a>
                                    <React.Fragment>
                                        <button className="btn-exclui" onClick={handleOpen}><GoTrashcan/></button>
                                        <Modal
                                            hideBackdrop
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="child-modal-title"
                                            aria-describedby="child-modal-description"
                                            className="modal-container"
>
                                             <Box className="confirma-menesagem">
                                            <h2 id="child-modal-title">Deseja mesmo  esse produto { } ?</h2>
                                            <div className="btns-confirma-cont">
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </div>
                                        </Box>
                                        </Modal>
                                    </React.Fragment>
                                </div>
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
                        <td>{categoriaDeproduto.roupa.fornecedor.cnpj}</td>
                        <td>{categoriaDeproduto.roupa.nome}</td>
                        <td>Roupas</td>
                        <td>{categoriaDeproduto.roupa.sexo}</td>
                        <td>{categoriaDeproduto.roupa.cor}</td>
                        <td>{categoriaDeproduto.roupa.preco}</td>
                        <td>{item.dataCadastro}</td>
                        <td>{categoriaDeproduto.roupa.quantidade}</td>
                        <td className="img-consulta"><img src={categoriaDeproduto.roupa.imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></td>
                        <td>
                            <div className="acoes-btn-group">
                                <a href={`/dashboard/atualizar-produto/${item._id}`} >
                                    <button className="btn-edit"> <FiEdit/> </button>
                                </a>
                                <React.Fragment>
                                    <button className="btn-exclui" onClick={handleOpen}><GoTrashcan/></button>
                                    <Modal
                                        hideBackdrop
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="child-modal-title"
                                        aria-describedby="child-modal-description"
                                        className="modal-container"
>
                                         <Box className="confirma-menesagem">
                                            <h2 id="child-modal-title">Deseja mesmo  esse produto { } ?</h2>
                                            <div className="btns-confirma-cont">
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </div>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </div>
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
                        <td>{categoriaDeproduto.suplemento.fornecedor.cnpj}</td>
                        <td>{categoriaDeproduto.suplemento.nome}</td>
                        <td>Suplementos</td>
                        <td>{categoriaDeproduto.suplemento.sexo}</td>
                        <td>{categoriaDeproduto.suplemento.cor}</td>
                        <td>{categoriaDeproduto.suplemento.preco}</td>
                        <td>{item.dataCadastro}</td>
                        <td>{categoriaDeproduto.suplemento.quantidade}</td>
                        <td className="img-consulta"><img src={categoriaDeproduto.suplemento.imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></td>
                        <td>
                            <div className="acoes-btn-group">
                                <a href={`/dashboard/atualizar-produto/${item._id}`} >
                                    <button className="btn-edit"> <FiEdit/> </button>
                                </a>
                                <React.Fragment>
                                    <button className="btn-exclui" onClick={handleOpen}><GoTrashcan/></button>
                                    <Modal
                                        hideBackdrop
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="child-modal-title"
                                        aria-describedby="child-modal-description"
                                        className="modal-container"
>
                                         <Box className="confirma-menesagem">
                                            <h2 id="child-modal-title">Deseja mesmo  esse produto { } ?</h2>
                                            <div className="btns-confirma-cont">
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </div>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </div>
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
                        <td>{categoriaDeproduto.calcado.fornecedor.cnpj}</td>
                        <td>{categoriaDeproduto.calcado.nome}</td>
                        <td>Calçados</td>
                        <td>{categoriaDeproduto.calcado.sexo}</td>
                        <td>{categoriaDeproduto.calcado.cor}</td>
                        <td>{categoriaDeproduto.calcado.preco}</td>
                        <td>{item.dataCadastro}</td>
                        <td>{categoriaDeproduto.calcado.quantidade}</td>
                        <td className="img-consulta"><img src={categoriaDeproduto.calcado.imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></td>
                        <td>
                            <div className="acoes-btn-group">
                                <a href={`/dashboard/atualizar-produto/${item._id}`} >
                                    <button className="btn-edit"> <FiEdit/> </button>
                                </a>
                                <React.Fragment>
                                    <button className="btn-exclui" onClick={handleOpen}><GoTrashcan/></button>
                                    <Modal
                                        hideBackdrop
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="child-modal-title"
                                        aria-describedby="child-modal-description"
                                        className="modal-container"
>
                                         <Box className="confirma-menesagem">
                                            <h2 id="child-modal-title">Deseja mesmo  esse produto { } ?</h2>
                                            <div className="btns-confirma-cont">
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </div>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </div>
                        </td>
                    </tr>
                } else if (categoriaDeproduto.roupa !== undefined) {
                    return <tr key={item._id.toString()}>
                        <td>{categoriaDeproduto.roupa.fornecedor.cnpj}</td>
                        <td>{categoriaDeproduto.roupa.nome}</td>
                        <td>Roupas</td>
                        <td>{categoriaDeproduto.roupa.sexo}</td>
                        <td>{categoriaDeproduto.roupa.cor}</td>
                        <td>{categoriaDeproduto.roupa.preco}</td>
                        <td>{item.dataCadastro}</td>
                        <td>{categoriaDeproduto.roupa.quantidade}</td>
                        <td className="img-consulta"><img src={categoriaDeproduto.roupa.imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></td>
                        <td>
                            <div className="acoes-btn-group">
                                <a href={`/dashboard/atualizar-produto/${item._id}`} >
                                    <button className="btn-edit"> <FiEdit/> </button>
                                </a>
                                <React.Fragment>
                                    <button className="btn-exclui" onClick={handleOpen}><GoTrashcan/></button>
                                    <Modal
                                        hideBackdrop
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="child-modal-title"
                                        aria-describedby="child-modal-description"
                                        className="modal-container"
>
                                         <Box className="confirma-menesagem">
                                            <h2 id="child-modal-title">Deseja mesmo  esse produto { } ?</h2>
                                            <div className="btns-confirma-cont">
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </div>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </div>
                        </td>
                    </tr>
                } else if (categoriaDeproduto.equipamento !== undefined) {
                    return <tr key={item._id.toString()}>
                        <td>{categoriaDeproduto.equipamento.fornecedor.cnpj}</td>
                        <td>{categoriaDeproduto.equipamento.nome}</td>
                        <td>Equipamentos</td>
                        <td>{categoriaDeproduto.equipamento.sexo}</td>
                        <td>{categoriaDeproduto.equipamento.cor}</td>
                        <td>{categoriaDeproduto.equipamento.preco}</td>
                        <td>{item.dataCadastro}</td>
                        <td>{categoriaDeproduto.equipamento.quantidade}</td>
                        <td className="img-consulta"><img src={categoriaDeproduto.equipamento.imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></td>
                        <td>
                            <div className="acoes-btn-group">
                                <a href={`/dashboard/atualizar-produto/${item._id}`} >
                                    <button className="btn-edit"> <FiEdit/> </button>
                                </a>
                                <React.Fragment>
                                    <button className="btn-exclui" onClick={handleOpen}><GoTrashcan/></button>
                                    <Modal
                                        hideBackdrop
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="child-modal-title"
                                        aria-describedby="child-modal-description"
                                        className="modal-container"
>
                                         <Box className="confirma-menesagem">
                                            <h2 id="child-modal-title">Deseja mesmo  esse produto { } ?</h2>
                                            <div className="btns-confirma-cont">
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </div>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </div>
                        </td>
                    </tr>
                } else if (categoriaDeproduto.suplemento !== undefined) {
                    return <tr key={item._id.toString()}>
                        <td>{categoriaDeproduto.suplemento.fornecedor.cnpj}</td>
                        <td>{categoriaDeproduto.suplemento.nome}</td>
                        <td>Suplementos</td>
                        <td>{categoriaDeproduto.suplemento.sexo}</td>
                        <td>{categoriaDeproduto.suplemento.cor}</td>
                        <td>{categoriaDeproduto.suplemento.preco}</td>
                        <td>{item.dataCadastro}</td>
                        <td>{categoriaDeproduto.suplemento.quantidade}</td>
                        <td className="img-consulta"><img src={categoriaDeproduto.suplemento.imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></td>
                        <td>
                            <div className="acoes-btn-group">
                                <a href={`/dashboard/atualizar-produto/${item._id}`} >
                                    <button className="btn-edit"> <FiEdit/> </button>
                                </a>
                                <React.Fragment>
                                    <button className="btn-exclui" onClick={handleOpen}><GoTrashcan/></button>
                                    <Modal
                                        hideBackdrop
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="child-modal-title"
                                        aria-describedby="child-modal-description"
                                        className="modal-container"
>
                                        <Box className="confirma-menesagem">
                                            <h2 id="child-modal-title">Deseja mesmo  esse produto { } ?</h2>
                                            <div className="btns-confirma-cont">
                                            <Button onClick={() => deletar(item)} variant="outlined" color="error" >Excluir</Button>
                                            <Button onClick={handleClose} variant="outlined" >Cancelar</Button>
                                        </div>
                                        </Box>
                                    </Modal>
                                </React.Fragment>
                            </div>
                        </td>
                    </tr>
                }

            })}
        </>
    }

}
export default TabelaProduto;