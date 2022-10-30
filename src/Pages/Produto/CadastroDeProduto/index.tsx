import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Cabecalho from '../../../Components/Cabecalho';
import Footer from '../../../Components/Footer';
import { Button, TextField, Autocomplete } from "@mui/material";
import IFornecedor from '../../../interfaces/IFornecedor';
import apiFullSports from '../../../api/apiFullSports';
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
`;
const BttCadPrdutoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 2px;
`;


const CadastrarProduto = () => {
    const dataAtual = new Date().toLocaleDateString()
    const [listaFornecedores, setListaFornecedores] = useState<IFornecedor[]>([]);
    const [fornecedorID, setFornecedorID] = useState<string | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(false);
    const [busca, setBusca] = useState('');

    const [nomeProduto, setNomeProduto] = useState('');
    const [tipoProduto, setTipoProduto] = useState('');
    const [corProduto, setCorProduto]= useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade]= useState('');
    
    useEffect(() => {
        apiFullSports.get<IFornecedor[]>('listar-fornecedores/')
            .then(resposta => setListaFornecedores(resposta.data))
    }, [])
    console.log(listaFornecedores)
    const options = listaFornecedores.map((item) => {
        const firsLetter = item.nomeEmpresa[0].toLocaleUpperCase();
        const firsLetterId = item._id
        return {
            firsLetter: /[0-9]/.test(firsLetter) ? '0-9' : firsLetter,
            ...item,
            firsLetterId : firsLetterId
        };
    })
    function aoSubmit(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
    apiFullSports.request({
        method: 'POST',
        url: 'cadastrar-produto/',
        data:{
            nomeProduto: nomeProduto,
            tipoProduto: tipoProduto,
            corProduto: corProduto,
            preco: preco,
            quantidade: quantidade,
            dataCadastro: dataAtual,
            fornecedor: fornecedorID
        }
    }).then(()=>{
        setNomeProduto('');
        setTipoProduto('');
        setCorProduto('');
        setPreco('');
        setQuantidade('')
        alert('Produto cadastrado com sucesso')
    })
}
  console.log(fornecedorID)
    return (
        <>
            <Cabecalho />
            <Main>
                <ExibeTitulo id="exibe-titulo" className="exibe-titulo" >Cadastrar Produto</ExibeTitulo>
                <FormCadastroDeProduto id="form-cadastro-produto" className="form-cadastro-produto">
                    <form action="" method="post" encType="multipart/form-data" onSubmit={aoSubmit}>
                        <Row2grid id="row-2-grid" className="row-1-grid">
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

                            <label className="col-form-label">Tipo do Produto</label>
                            <TextField
                                sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                className="txt-form"
                                label="Tipo do Produto"
                                id="tipoProduto"
                                type="text"
                                placeholder={'Digite o tipo do produto'}
                                fullWidth
                                onChange={evento => setTipoProduto(evento.target.value)}
                            />

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
                                type="text"
                                placeholder={'R$:'}
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
                                // placeholder={'Digite a quantidade de Produto'}
                                fullWidth
                                onChange={evento => setQuantidade(evento.target.value)}
                            />

                            
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
                            getOptionLabel={(option) => option.nomeEmpresa +' - '+ option.cnpj}
                            onInputChange={(_,newValue)=> setBusca(newValue)}
                            onChange={(_,newValue)=> {setFornecedorID(newValue?._id); setBusca('');}}
                            className="txt-form"
                            id='Auto-complete'
                            sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%', textAlign: 'center' }}
                            renderInput={(params) => <TextField {...params} label="Nome/Cnpj" />}
                            />
                           
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
                                onClick={evento => window.open('/sig/consulta-de-produtos')}
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
            <Footer />
        </>
    );
};
export default CadastrarProduto;