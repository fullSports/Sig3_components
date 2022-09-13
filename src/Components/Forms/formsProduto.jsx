import React from "react";
import styled from "styled-components";
import Inpults from "../Inpults";

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

    form select {
        font-family: "Roboto", sans-serif;
        outline: 0;
        width:100%;
        height: 25px;
        border: 0;
        margin: 0 0 15px;
        box-sizing: border-box;
        font-size: 14px;
    }
    form input {
        border-radius: 5px;
        font-family: "Roboto", sans-serif;
        outline: 0;
        width: 100%;
        border: 0;
        margin: 0 0 15px;
        padding: 15px;
        box-sizing: border-box;
        font-size: 14px;
       }
    @media screen and (max-width: 1144px) {
        width: 90%;
        height: auto;
        font-size: 12px;
        border-radius: 10px;

         form select {
                width: 90%;
                font-family: "Roboto", sans-serif;
                outline: 0;
                height: 25px;
                border: 0;
                margin: 0 0 15px;
                box-sizing: border-box;
                font-size: 14px;
            }

        form input {
            font-family: "Roboto", sans-serif;
            outline: 0;
            border: 0;
            margin: 0 0 15px;
            padding: 15px;
            box-sizing: border-box;
            font-size: 14px;
        }
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
    
`;
const Data = styled.div`
    text-align: center;
    border-radius: 5px;
    margin-bottom: 3%;
`;
const BttCadPrdutoGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 2px;
`;
const BtnCadPrduto = styled.input`
    justify-content: center;
	margin-right: auto;
	margin-left: auto;
    display: block;
    border: none;
    font-size: 14px;
    width: 160px;
    height: 44px;
    :hover{
        text-decoration: none;
        background-color: rgb(0, 0, 0);
        transform:translate(0.3s);
        color: #fff;
    }
`;

function FormsProduto() {
    const date = new Date().toLocaleDateString()
    return (
        <FormCadastroDeProduto id="form-cadastro-produto" className="form-cadastro-produto">
            <form action="" object="" method="post" encType="multipart/form-data">
                <Row2grid id="row-2-grid" className="row-1-grid">
                    <Inpults label="Nome do Produto" for="nomeProduto" type="text"
                        id="nomeProduto" placeholder="nome do produto"  
                    />

                    <Inpults label="Tipo do Produto" for="tipoProduto" type="text" 
                        id="tipoProduto" placeholder="tipo do produto"
                    />

                    <Inpults label="Cor do Produto" for="corProduto" type="text"
                        id="corProduto" placeholder="cor do produto"
                    />

                    <Inpults label="Preço do Produto" for="procoProduto" type="text"
                        id="precoProduto" placeholder="preço do produto"
                    />

                    <Inpults label="Quantidade de Produtos" for="qtdProduto" type="text"
                        id="qtdProduto" placeholder="quantidade de produtos" 
                    />

                    <label>Data de Cadastro do Produto</label>
                    <Data id="dataCadastro" className="">
                        <p>{date}</p>
                    </Data>
                    

                    <Inpults label="CNPJ" for="cnpj" type="text"
                        id="cnpj" placeholder="00.000.000./0000-00"
                    />
                </Row2grid>

                <BttCadPrdutoGrid id="btt-cad-cliente-grid" className="btt-cad-cliente-grid">
                    <BtnCadPrduto type="submit" id="btn-cad-forms" className="btn-cad-forms"
                        value="Enviar" />
                    <a href="/sig/consulta-de-produtos">
                        <BtnCadPrduto type="button" id="btn-cad-forms" className="btn-cad-forms"
                            value="Consultar Produtos" /></a>
                </BttCadPrdutoGrid>
            </form>
        </FormCadastroDeProduto>

    )
};
export default FormsProduto;