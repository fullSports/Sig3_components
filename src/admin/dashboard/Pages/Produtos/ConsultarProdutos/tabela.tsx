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
        }).catch((err) => console.log(err))
    }



    return <>
        {produto.map(item => {
            const categoriaDeproduto = item.categoriaProduto as any;
            const obj = Object.keys(categoriaDeproduto)[0].toString()
            return <tr key={item._id.toString()}>
                <td>{categoriaDeproduto[obj].fornecedor.cnpj}</td>
                <td>{categoriaDeproduto[obj].nome}</td>
                <td>{obj}</td>
                <td>{categoriaDeproduto[obj].sexo}</td>
                <td>{categoriaDeproduto[obj].cor}</td>
                <td>{categoriaDeproduto[obj].preco}</td>
                <td>{categoriaDeproduto[obj].tamanho}</td>
                <td>{categoriaDeproduto[obj].quantidate}</td>

                <td>{item.dataCadastro}</td>
                <td className="img-consulta"><img src={categoriaDeproduto[obj].imagemProduto[0].url} width='100' alt="primeira imagem de produto" /></td>
                <td>
                    <div className="acoes-btn-group">
                        <a href={`/dashboard/atualizar-produto/${item._id}`} >
                            <button className="btn-edit"> <FiEdit /> </button>
                        </a>
                        <React.Fragment>
                            <button className="btn-exclui" onClick={handleOpen}><GoTrashcan /></button>
                            <Modal
                                hideBackdrop
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="child-modal-title"
                                aria-describedby="child-modal-description"
                                className="modal-container"
                            >
                                <Box className="confirma-menesagem">
                                    <h2 id="child-modal-title">Deseja mesmo  esse produto {categoriaDeproduto[obj].nome} ?</h2>
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

        })}
    </>


}
export default TabelaProduto;