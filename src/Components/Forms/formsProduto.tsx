import React from 'react';
import styled from 'styled-components';
import { Box, Button, TextField, FormControl, Select, InputLabel, MenuItem } from "@mui/material";

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

const FormsProduto = () => {
    const date = new Date().toLocaleDateString()
    return (
        <FormCadastroDeProduto id="form-cadastro-produto" className="form-cadastro-produto">
            <form action="" method="post" encType="multipart/form-data">
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
                    />

                    <label className="col-form-label">Data de Cadastro</label>
                    <TextField
                        sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%', textAlign: 'center'}}
                        className="txt-form"
                        label="Data"
                        id="tipoProduto"
                        value={date}
                        type="text"
                        // placeholder={'Digite o tipo do produto'}
                        fullWidth
                    />
                    <label className="col-form-label">CNPJ do Fornecedor</label>
                    <TextField
                        sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                        className="txt-form"
                        label="CNPJ"
                        id="cnpj"
                        type="text"
                        placeholder={'00.000.000./0000-00'}
                        fullWidth
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
    );
};
export default FormsProduto;