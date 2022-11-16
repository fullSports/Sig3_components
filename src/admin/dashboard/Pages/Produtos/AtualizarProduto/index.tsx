import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Button, TextField, FormControl, Select, InputLabel, MenuItem, Box, Modal, Autocomplete } from "@mui/material";
import apiFullSports from "../../../../../api/apiFullSports";
import IFornecedor from '../../../../../utils/interfaces/IFornecedor';
import IProduto from '../../../../../utils/interfaces/IProduto';
import Iimagem from '../../../../../utils/interfaces/Iimagem';
import './styles.css';
const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const ExibeTitulo = styled.div`
    margin: 2%;
    display: flex;
    justify-content: center;
    h3{
        
        margin-right: 2%;
        font-size: 25px;
    }
`;
const FormAtualizarProduto = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    box-shadow: 1px 1px 8px rgb(70, 70, 70, 0.2);
    padding: 2%;
    width: 40%;
    height: auto;
    font-size: 12pt;
    border-radius: 10px;
    @media screen and (max-width: 1144px) {
        width: 90%;
        height: auto;
        font-size: 12px;
        border-radius: 10px;
    }
`;
const Row2grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 5px;
    border-radius: 20px;
    width: auto;
    height: auto;
    margin: 1px;  
    .col-form-label{
        font-size: 20px;
    }
    #imagemProduto{
        box-sizing: border-box;
        margin: 0 0 15px;
        width: 100%;
        padding: 15px;
        border-radius: 4px;
    }
`;
const BttCadPrdutoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 2px;
    #btn-cad-forms{
        justify-content: center;
        display: block;
        height: 50px;
        border-radius: 5px;
        color: #fff;
        font-size: 14px;
        background-color: black;
        :hover{
            background-color: #313131;
            text-decoration: 0.90s;
        }
    }
`;
const CadatrarImagemLabel = styled.label`
    cursor: pointer;
    text-transform: uppercase;
    color: #0b0b0b;
    border: solid 1px #7b7777;;
    margin-top: 4%;
    margin-bottom: 4%;
    display: flex;
    padding: 10px 10px;
    border-radius: 5px;
`;
const CadastrarNovaFotoInpult = styled.label`
    cursor: pointer;
    text-transform: uppercase;
    color: #0b0b0b;
    border: solid 1px #7b7777;;
    margin-top: 4%;
    margin-bottom: 4%;
    display: flex;
    text-align: center;
    padding: 10px 10px;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 20%;
`
const AtualizarProduto = () => {
    const parametros = useParams();
    const [listaFornecedores, setListaFornecedores] = useState<IFornecedor[]>([]);
    const [fornecedorID, setFornecedorID] = useState<string | undefined>(undefined)
    const [isLoading,] = useState(false);
    const [, setBusca] = useState('');
    const [produtos, setProdutos] = useState<IProduto[]>([]);
    const [nomeProduto, setNomeProduto] = useState('');
    const [categoriaProduto, setCategoriaProduto] = useState('');
    const [corProduto, setCorProduto] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [tamanhoProduto, setTamanhoProduto] = useState('');
    const [sexo, setSexo] = useState('');
    const [dataCadastro, setDataCadastro] = useState('')
    let imagens = [{},]
    let ImagensID = [{},]
    const [ImagemProduto, setImagemProduto] = useState<Iimagem[]>()
    const [spinner, setSpinner] = useState(false);
    const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
    const [menssagemErro, setMenssagemErro] = useState('');
    const [open, setOpen] = React.useState(false);
    const [messagemErroFoto, setmessagemErroFoto] = useState(false)
    const [categoriaID, setCategoriaID] = useState('');
    const handleClose = () => {
        setOpen(false);
    };
    const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        imagens = [{},];
        if (evento.target.files?.length) {
            for (var i = 0; i < evento.target.files.length; i++) {
                imagens.unshift(evento.target.files[i])
            }
            console.log(imagens);
        }
    }

    useEffect(() => {
        if (parametros.id) {
            apiFullSports.get<IFornecedor[]>('listar-fornecedores/')
                .then(resposta => { setListaFornecedores(resposta.data) })
                .catch((err) => console.log(err));

            apiFullSports.get<IProduto>(`listar-produto/${parametros.id}`)
                .then(resposta => {
                    setDataCadastro(resposta.data.dataCadastro)
                    const categoria = resposta.data.categoriaProduto
                    if (categoria.calcado !== undefined) {
                        setFornecedorID(categoria.calcado.fornecedor._id);
                        setNomeProduto(categoria.calcado.nome);
                        setSexo(categoria.calcado.sexo);
                        setCategoriaProduto("calcado");
                        setCorProduto(categoria.calcado.cor);
                        setPreco(categoria.calcado.preco);
                        setQuantidade(categoria.calcado.quantidade.toString());
                        setTamanhoProduto(categoria.calcado.tamanho.toString());
                        setImagemProduto(categoria.calcado.imagemProduto)

                    } else if (categoria.equipamento !== undefined) {
                        setFornecedorID(categoria.equipamento.fornecedor._id);
                        setNomeProduto(categoria.equipamento.nome);
                        setSexo(categoria.equipamento.sexo);
                        setCategoriaProduto("equipamento");
                        setCorProduto(categoria.equipamento.cor);
                        setPreco(categoria.equipamento.preco);
                        setQuantidade(categoria.equipamento.quantidade.toString());
                        setTamanhoProduto(categoria.equipamento.tamanho.toString());
                        setImagemProduto(categoria.equipamento.imagemProduto)

                    } else if (categoria.roupa !== undefined) {
                        setFornecedorID(categoria.roupa.fornecedor._id);
                        setNomeProduto(categoria.roupa.nome);
                        setSexo(categoria.roupa.sexo);
                        setCategoriaProduto("roupa");
                        setCategoriaID(categoria.roupa._id);
                        setCorProduto(categoria.roupa.cor);
                        setPreco(categoria.roupa.preco)
                        setQuantidade(categoria.roupa.quantidade.toString());
                        setTamanhoProduto(categoria.roupa.tamanho.toString());
                        setImagemProduto(categoria.roupa.imagemProduto)
                    } else if (categoria.suplemento !== undefined) {
                        setFornecedorID(categoria.suplemento.fornecedor._id);
                        setNomeProduto(categoria.suplemento.nome);
                        setSexo(categoria.suplemento.sexo);
                        setCategoriaProduto("suplemento");
                        setCorProduto(categoria.suplemento.cor);
                        setQuantidade(categoria.suplemento.quantidade.toString());
                        setTamanhoProduto(categoria.suplemento.tamanho.toString());
                        setImagemProduto(categoria.suplemento.imagemProduto)


                    } else {
                        return null
                    }

                    console.log(ImagemProduto)
                }).catch((err) => console.log(err));

        }
    }, [parametros])

    function cadastrarNovasFotos() {
        setmessagemErroFoto(false)
        setSpinner(true)
        if (imagens.length > 1) {
            imagens.pop();
            console.log(imagens);
            ImagemProduto?.map(item => {
                return ImagensID.unshift(item._id);
            });
            imagens.map(item => {
                return apiFullSports.request({
                    url: 'imagem/',
                    method: 'POST',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'multipart/form-data'
                    },
                    data: {
                        file: item
                    }
                }).then(response => {
                    apiFullSports.request({
                        url: `imagem/${response.data._id}`,
                        method: 'GET',
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        },
                    }).then(response => {
                        ImagensID.unshift(response.data._id)
                    }).catch(err => console.log(err))
                }).catch(err => console.log(err))
            })
            ImagensID.pop();
            console.log(ImagensID)
            setTimeout(function () {
                console.log(`atualizar-${categoriaProduto}/${categoriaID}`)
                apiFullSports.request({
                    url: `atualizar-${categoriaProduto}/${categoriaID}`,
                    method: "PUT",
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    },
                    data: {
                        imagemProduto: ImagensID
                    }
                }).then(() => { window.location.reload(); setSpinner(false) })
                    .catch(err => console.log(err));
            }, 5000)
        } else {
            setSpinner(false)
            setmessagemErroFoto(true)
        }
    }
    const deletarImagem = (DeletarImagem: string) => {
        apiFullSports.delete(`imagem/${DeletarImagem}/`)
        window.location.reload();
        setOpen(true)
    }
    function OpcoentesFotoProduto() {
        return <>
            <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center' }}>
                {ImagemProduto?.map(item =>
                    <Box component={'div'} sx={{ display: 'grid', margin: '1%', width: "20%", height: "10%" }}>
                        <img src={item.url} alt="imagem de produto" />
                        <Button onClick={() => deletarImagem(item._id)} color="error" variant="outlined" sx={{ border: "2px solid alert", margin: "2%" }} >Excluir foto</Button>
                    </Box>
                )}
            </Box>
        </>
    }
    const options = listaFornecedores.map((item) => {
        const firsLetter = item.nomeEmpresa[0].toLocaleUpperCase();
        return {
            firsLetter: /[0-9]/.test(firsLetter) ? '0-9' : firsLetter,
            ...item
        };
    })
    function aoSubmit(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setSpinner(true);
        if (categoriaProduto === '') {
            setMenssagemErro('escolha uma categoria de produto');
            setMensagemErroBolean(true);
        } else if (sexo === '') {
            setMenssagemErro('escolha uma sexo de produto');
            setMensagemErroBolean(true);
        } else {
            ImagensID = [{},];
            ImagemProduto?.map(item => {
                return ImagensID.unshift(item._id);
            });
            ImagensID.pop();
            console.log(ImagensID);
            setTimeout(function () {
                if (categoriaProduto === 'roupa') {
                    apiFullSports.request({
                        method: "PUT",
                        url: `atualizar-produto/${parametros.id}`,
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        },
                        data: {
                            categoriaProduto: {
                                roupa: {
                                    nome: nomeProduto,
                                    fornecedor: fornecedorID,
                                    cor: corProduto,
                                    sexo: sexo,
                                    tamanho: tamanhoProduto,
                                    preco: preco,
                                    quantidade: quantidade,
                                    imagemProduto: ImagensID
                                }
                            }
                        }
                    }).then(()=> window.location.href= '/dashboard/consultar-produtos')
                    .catch(err => console.log(err));
                }else if(categoriaProduto==='equipamento'){
                    apiFullSports.request({
                        method: "PUT",
                        url: `atualizar-produto/${parametros.id}`,
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        },
                        data: {
                            categoriaProduto: {
                                equipamento: {
                                    nome: nomeProduto,
                                    fornecedor: fornecedorID,
                                    cor: corProduto,
                                    sexo: sexo,
                                    tamanho: tamanhoProduto,
                                    preco: preco,
                                    quantidade: quantidade,
                                    imagemProduto: ImagensID
                                }
                            }
                        }
                    }).then(()=> window.location.href= '/dashboard/consultar-produtos')
                    .catch(err => console.log(err));
                }else if(categoriaProduto==='suplemento'){
                    apiFullSports.request({
                        method: "PUT",
                        url: `atualizar-produto/${parametros.id}`,
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        },
                        data: {
                            categoriaProduto: {
                                suplemento: {
                                    nome: nomeProduto,
                                    fornecedor: fornecedorID,
                                    cor: corProduto,
                                    sexo: sexo,
                                    tamanho: tamanhoProduto,
                                    preco: preco,
                                    quantidade: quantidade,
                                    imagemProduto: ImagensID
                                }
                            }
                        }
                    }).then(()=> window.location.href= '/dashboard/consultar-produtos')
                    .catch(err => console.log(err));
                }else if(categoriaProduto==='calcado'){
                    apiFullSports.request({
                        method: "PUT",
                        url: `atualizar-produto/${parametros.id}`,
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        },
                        data: {
                            categoriaProduto: {
                                calcado: {
                                    nome: nomeProduto,
                                    fornecedor: fornecedorID,
                                    cor: corProduto,
                                    sexo: sexo,
                                    tamanho: tamanhoProduto,
                                    preco: preco,
                                    quantidade: quantidade,
                                    imagemProduto: ImagensID
                                }
                            }
                        }
                    }).then(()=> window.location.href= '/dashboard/consultar-produtos')
                    .catch(err => console.log(err));
                }

            }, 200)
        }

    }
    return <>
        <Main>
            <ExibeTitulo id="exibe-titulo" className="exibe-titulo" >Cadastrar Produto</ExibeTitulo>
            <FormAtualizarProduto id="form-cadastro-produto" className="form-cadastro-produto">
                <form action="" method="post" encType="multipart/form-data" onSubmit={aoSubmit}>
                    <Row2grid id="row-2-grid" className="row-1-grid">
                        <label className="col-form-label">CNPJ do Fornecedor</label>
                        <Autocomplete
                            openText='Abrir'
                            closeText='Fechar'
                            noOptionsText='Sem opções'
                            loadingText='Carregando...'
                            disablePortal
                            groupBy={(option) => option.firsLetter}
                            options={options}
                            loading={isLoading}
                            getOptionLabel={(option) => option.nomeEmpresa + ' - ' + option.cnpj}
                            onInputChange={(_, newValue) => setBusca(newValue)}
                            onChange={(_, newValue) => { setFornecedorID(newValue?._id); }}
                            placeholder={'atualizar fornecedor'}

                            inputMode={'search'}
                            className="txt-form"
                            id='Auto-complete'
                            sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%', textAlign: 'center' }}
                            renderInput={(params) => (<TextField {...params} id='Auto-complete' label="Atualizar Fornecedor" />)}
                        />

                        <label className="col-form-label">Nome do Produto</label>
                        <TextField
                            sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                            className="txt-form"
                            label="Nome do Produto"
                            id="nomeProduto"
                            type="text"
                            placeholder={'Digite o nome do produto'}
                            fullWidth
                            onChange={evento => setNomeProduto(evento.target.value)}
                            value={nomeProduto}
                        />

                        <label className="col-form-label">Categoria do Produto</label>
                        <FormControl fullWidth margin='dense'>
                            <InputLabel id='categoria-produto'>Categoria</InputLabel>
                            <Select className='text-form' labelId='categoria-produto'
                                sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                value={categoriaProduto} onChange={envento => setCategoriaProduto(envento.target.value)}>
                                <MenuItem key={''} value={''}></MenuItem>
                                <MenuItem key={'roupa'} value={'roupa'}>Roupas</MenuItem>
                                <MenuItem key={'equipamento'} value={'equipamento'}>Equipamento</MenuItem>
                                <MenuItem key={'suplemento'} value={'suplemento'}>Suplementos</MenuItem>
                                <MenuItem key={'calcado'} value={'calcado'}>Caçados</MenuItem>
                            </Select>
                        </FormControl>

                        <label className="col-form-label">Sexo</label>
                        <FormControl fullWidth margin="dense">
                            <InputLabel id="sexo">Sexo</InputLabel>
                            <Select className="txt-form" labelId="sexo" sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                value={sexo} onChange={evento => setSexo(evento.target.value)} required>
                                <MenuItem key={''} value={''}></MenuItem>
                                <MenuItem key={'M'} value={'M'}>Masculino</MenuItem>
                                <MenuItem key={'F'} value={'F'}>Feminino</MenuItem>
                                <MenuItem key={'O'} value={'O'}>Outros</MenuItem>
                                <MenuItem key={'-'} value={'-'}>Prefiro não dizer</MenuItem>
                            </Select>
                        </FormControl>

                        <label className="col-form-label">Cor do Produto</label>
                        <TextField
                            sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                            className="txt-form"
                            label="Cor do Produto"
                            id="corProduto"
                            type="text"
                            placeholder={'Digite o tipo a cor do produto'}
                            fullWidth
                            onChange={evento => setCorProduto(evento.target.value)}
                            value={corProduto}
                        />

                        <label className="col-form-label">Preço do Produto</label>
                        <TextField
                            sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                            className="txt-form"
                            label="Preço do Produto"
                            id="precoProduto"
                            name='precoProduto'
                            type="text"
                            placeholder={'Digite o preço do produto'}
                            fullWidth
                            onChange={evento => setPreco(evento.target.value)}
                            value={preco}
                        />
                        <label className="col-form-label">Quantidade de Produtos</label>
                        <TextField
                            sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                            className="txt-form"
                            label="quantidade"
                            id="qtdProduto"
                            type="number"
                            placeholder={'Digite a quantidade de Produto'}
                            fullWidth
                            onChange={evento => setQuantidade(evento.target.value)}
                            value={quantidade}
                        />
                        <label className="col-form-label">Tamanho do Produto</label>
                        <TextField
                            sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                            className="txt-form"
                            label="tamanho"
                            id="tamanho"
                            type="number"
                            placeholder={'Digite a quantidade o tamanho do produto'}
                            fullWidth
                            onChange={evento => setTamanhoProduto(evento.target.value)}
                            value={tamanhoProduto}
                        />
                        <label className="col-form-label">Imagens do produto</label>
                        <CadatrarImagemLabel onClick={() => { setOpen(true) }}>Atualizar fotos do produto...</CadatrarImagemLabel>

                        {spinner && (<p>carregando...</p>)}
                        {mensagemErroBolean && (<span id="menssagem-erro">{menssagemErro}</span>)}
                    </Row2grid>


                    <BttCadPrdutoGrid id="btt-cad-cliente-grid" className="btt-cad-cliente-grid">
                        <Button
                            sx={{
                                justifyContent: 'center', display: 'block', height: '50px', borderRadius: '5px', color: '#fff',
                                fontSize: '14px', backgroundColor: 'black', ":hover": 'backgroundColor: #313131, transform:translate(0.8s)'
                            }}
                            type="submit" id="btn-cad-forms" className="btn-cad-forms">
                            atualizar Dados do Produto
                        </Button>
                        <Button
                            onClick={() => window.location.href = '/dashboard/consultar-produtos'}
                            sx={{
                                justifyContent: 'center', display: 'block', height: '50px', borderRadius: '5px', color: '#fff',
                                fontSize: '14px', backgroundColor: 'black', ":hover": 'backgroundColor: #313131, transform:translate(0.8s)'
                            }} type="button" id="btn-cad-forms" className="btn-cad-forms">
                            Consulta de Produtos
                        </Button>
                    </BttCadPrdutoGrid>
                </form>
            </FormAtualizarProduto>

        </Main>
        <Modal
            hideBackdrop
            open={open}
            onClose={handleClose}
            id="model"
        >
            <Box component={'div'} id="tela-imagem" className="tela-imagem" sx={{
                width: '70%', height: '80%',
                position: 'absolute' as 'absolute', top: '10%', left: '15%', display: '',
                backgroundColor: '#4e4a4a', border: '3px solid #000', borderRadius: '20px', pt: 2, px: 4, pb: 3
            }}>
                <OpcoentesFotoProduto />

                <CadastrarNovaFotoInpult htmlFor='file'>Escolher novas fotos...</CadastrarNovaFotoInpult>
                <input
                    onChange={selecionarArquivo}
                    className="txt-form"
                    id="file"
                    type="file"
                    name="file"
                    accept="image/jpeg, image/pjpeg, image/png, image/gif"
                    multiple
                />
                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant="outlined" sx={{ border: "2px solid", margin: "1%" }} onClick={cadastrarNovasFotos}>Cadastrar Nova Foto</Button>
                    <Button variant="outlined" sx={{ border: "2px solid", margin: "1%" }} onClick={handleClose}>Fechar</Button>
                </Box>
                <Box component={'div'} sx={{ display: 'flex', fontSize: '23px' }}>
                    {spinner && (<p>carregando...</p>)}
                    {messagemErroFoto && <p id='menssagem-erro'>selecione uma imagem...</p>}
                </Box>
            </Box>

        </Modal>
    </>
}
export default AtualizarProduto;