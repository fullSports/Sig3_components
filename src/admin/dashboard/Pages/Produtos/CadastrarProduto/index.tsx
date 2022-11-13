import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Button, TextField, Autocomplete, Modal,Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import IFornecedor from '../../../../../utils/interfaces/IFornecedor';
import apiFullSports from '../../../../../api/apiFullSports';
const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const ExibeTitulo = styled.h3`
    margin: 2%;
    text-align: center;
`;
const FormCadastroDeProduto = styled.div`
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

// const Loadiing = styled.div`
// position: absolute;
// padding-left: auto;
// padding-top: auto;
// padding-right: auto;
// width: 40%;
// height: 10%;
// h1{
//     text-align: center;
// }
//`
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

const CadastrarProduto = () => {
    const dataAtual = new Date().toLocaleDateString();
    const [listaFornecedores, setListaFornecedores] = useState<IFornecedor[]>([]);
    const [fornecedorID, setFornecedorID] = useState<string | undefined>(undefined)
    const [isLoading,] = useState(false);
    const [, setBusca] = useState('');

    const [nomeProduto, setNomeProduto] = useState('');
    const [categoriaProduto, setCategoriaProduto] = useState('');
    const [corProduto, setCorProduto] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [ tamanhoProduto,setTamanhoProduto] = useState('');
    const [file, setImagem] = useState<File | null>(null);
    const [sexo, setSexo] = useState('');
    let ImagensID = [{},]
    let imagens = [{},]
    const [statusId, setStatusId] = useState(Number)
    const [spinner, setSpinner] = useState(false);
    const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
    const [menssagemErro, setMenssagemErro] = useState('');
    const [IdCategoria,setIdCategoria] = useState('');
    const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        imagens = [{},]
        if (evento.target.files?.length) {
            for (var i = 0; i < evento.target.files.length; i++) {
                imagens.unshift(evento.target.files[i])
            }
            imagens.pop()
            console.log(imagens)
        }
    }

    useEffect(() => {
        apiFullSports.get<IFornecedor[]>('listar-fornecedores/')
            .then(resposta => setListaFornecedores(resposta.data))
    }, [])
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
        if(categoriaProduto===''){
            setMenssagemErro('escolha uma categoria de produto');
            setMensagemErroBolean(true);
        }else if(sexo===''){
            setMenssagemErro('escolha uma sexo de produto');
            setMensagemErroBolean(true);
        }else{
            imagens.map(item => {
                apiFullSports.request({
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
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'multipart/form-data'
                        },
                    }).then(response => {
                        ImagensID.unshift(response.data._id)
                    }).catch(err => console.log(err))
                }).catch(err => console.log(err))
            })
       }
       setTimeout(function(){
        if(categoriaProduto==='roupa'){
            if(spinner===false){
                ImagensID.pop();
                setTimeout(function(){
                console.log(ImagensID)
                apiFullSports.request({
                    url:'cadastrar-roupa/',
                    method: 'POST',
                    data:{
                        nome: nomeProduto,
                        fornecedor: fornecedorID,
                        cor: corProduto,
                        sexo: sexo,
                        tamanho: tamanhoProduto,
                        preco: preco,
                        quantidade: quantidade,
                        imagemProduto: ImagensID
                    }
                }).then( resposta =>{
                    apiFullSports.request({
                        method: "POST",
                        url: "cadastrar-produto/",
                        data:{
                            categoriaProduto:{
                                roupa: resposta.data._id
                            },
                            dataCadastro: dataAtual
                        }
                    }).then(()=>{
                        setSpinner(false);
                        window.location.href = '/dashboard/consultar-produtos'
                    }).catch(err => console.log(err))
                }).catch(err => console.log(err))
            },2000)
            }
        }else if(categoriaProduto === 'equipamento'){
            if(spinner===false){
                ImagensID.pop();
                setTimeout(function(){
                console.log(ImagensID)
                apiFullSports.request({
                    url:'cadastrar-equipamento/',
                    method: 'POST',
                    data:{
                        nome: nomeProduto,
                        fornecedor: fornecedorID,
                        cor: corProduto,
                        sexo: sexo,
                        tamanho: tamanhoProduto,
                        preco: preco,
                        quantidade: quantidade,
                        imagemProduto: ImagensID
                    }
                }).then( resposta =>{
                    apiFullSports.request({
                        method: "POST",
                        url: "cadastrar-produto/",
                        data:{
                            categoriaProduto:{
                                equipamento: resposta.data._id
                            },
                            dataCadastro: dataAtual
                        }
                    }).then(()=>{
                        setSpinner(false);
                        window.location.href = '/dashboard/consultar-produtos'
                    }).catch(err => console.log(err))
                }).catch(err => console.log(err))
            },2000)
            }
        }else if(categoriaProduto === 'suplemento'){
            if(spinner===false){
                ImagensID.pop();
                setTimeout(function(){
                console.log(ImagensID)
                apiFullSports.request({
                    url:'cadastrar-suplemento/',
                    method: 'POST',
                    data:{
                        nome: nomeProduto,
                        fornecedor: fornecedorID,
                        cor: corProduto,
                        sexo: sexo,
                        tamanho: tamanhoProduto,
                        preco: preco,
                        quantidade: quantidade,
                        imagemProduto: ImagensID
                    }
                }).then( resposta =>{
                    apiFullSports.request({
                        method: "POST",
                        url: "cadastrar-produto/",
                        data:{
                            categoriaProduto:{
                                suplemento: resposta.data._id
                            },
                            dataCadastro: dataAtual
                        }
                    }).then(()=>{
                        setSpinner(false);
                        window.location.href = '/dashboard/consultar-produtos'
                    }).catch(err => console.log(err))
                }).catch(err => console.log(err))
            },2000)
            }
        }else if(categoriaProduto === 'calcado'){
            if(spinner===false){
                ImagensID.pop();
                setTimeout(function(){
                console.log(ImagensID)
                apiFullSports.request({
                    url:'cadastrar-calcado/',
                    method: 'POST',
                    data:{
                        nome: nomeProduto,
                        fornecedor: fornecedorID,
                        cor: corProduto,
                        sexo: sexo,
                        tamanho: tamanhoProduto,
                        preco: preco,
                        quantidade: quantidade,
                        imagemProduto: ImagensID
                    }
                }).then( resposta =>{
                    apiFullSports.request({
                        method: "POST",
                        url: "cadastrar-produto/",
                        data:{
                            categoriaProduto:{
                                calcado: resposta.data._id
                            },
                            dataCadastro: dataAtual
                        }
                    }).then(()=>{
                        setSpinner(false);
                        window.location.href = '/dashboard/consultar-produtos'
                    }).catch(err => console.log(err))
                }).catch(err => console.log(err))
            },2000)
            }
        }
    },2000)

        }

    return (
        <>
            <Main>
                <ExibeTitulo id="exibe-titulo" className="exibe-titulo" >Cadastrar Produto</ExibeTitulo>
                <FormCadastroDeProduto id="form-cadastro-produto" className="form-cadastro-produto">
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
                                onChange={(_, newValue) => { setFornecedorID(newValue?._id); setBusca(''); }}
                                className="txt-form"
                                id='Auto-complete'
                                sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%', textAlign: 'center' }}
                                renderInput={(params) => <TextField {...params}  id='Auto-complete' label="Nome/Cnpj" />}
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
                            />
                            <label className="col-form-label">Imagens do produto</label>
                            <CadatrarImagemLabel htmlFor="file" >Escolher foto...</CadatrarImagemLabel>
                            <input
                                onChange={selecionarArquivo}
                                className="txt-form"
                                id="file"
                                type="file"
                                name="file"
                                accept="image/jpeg, image/pjpeg, image/png, image/gif"
                                multiple
                            />
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
                                Cadastrar Produto
                            </Button>
                            <Button
                                onClick={()=>  window.location.href = '/dashboard/consultar-produtos'}
                                sx={{
                                    justifyContent: 'center', display: 'block', height: '50px', borderRadius: '5px', color: '#fff',
                                    fontSize: '14px', backgroundColor: 'black', ":hover": 'backgroundColor: #313131, transform:translate(0.8s)'
                                }} type="button" id="btn-cad-forms" className="btn-cad-forms">
                                Consulta de Produto
                            </Button>
                        </BttCadPrdutoGrid>
                    </form>
                </FormCadastroDeProduto>
            </Main>
        </>
    );
};
export default CadastrarProduto;