import React from "react";
import styled from "styled-components";

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
const Data =styled.div`
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

function FormsProduto(){
    const date = new Date().toLocaleDateString()
    return(
    <FormCadastroDeProduto id="form-cadastro-produto" className="form-cadastro-produto">
                <form action="#" object="${}" method="post" encType="multipart/form-data">
                    <Row2grid id="row-2-grid" className="row-1-grid">
                        <label for="cnpj" class="col-form-label">Nome do Produto</label>
                        <div>
                            <span if="${#fields.hasErrors('nome')}" errors="*{nome}" class="txt-aviso">
                            </span>
                            <input type="text" field="*{nome}" class="txt-form" id="nome"
                             placeholder="Nome Produto"/>
                        </div>

                        <label for="tipo" class="col-form-label">Tipo do Produto</label>
                        <div>
                            <span if="${#fields.hasErrors('tipo')}" errors="*{tipo}" class="txt-aviso">
                            </span>
                            <input type="text" field="*{tipo}" class="txt-form" id="nome" 
                            placeholder="Tipo do Produto"/>
                        </div>

                        <label for="cor" class="col-form-label">Cor do Produto</label>
                        <div>
                            <span if="${#fields.hasErrors('cor')}" errors="*{cor}" class="txt-aviso">
                            </span>
                            <input type="text" field="*{cor}" class="txt-form" id="nome" 
                            placeholder="Cor do Produto"/>
                        </div>

                        <label for="nome" class="col-form-label">Preço do Produto</label>
                        <div>
                            <span if="${#fields.hasErrors('preco')}" errors="*{preco}" class="txt-aviso">
                            </span>
                            <input type="text" field="*{preco}" class="txt-form" id="nome" 
                            placeholder="Preço Produto"/>
                        </div>

                        <label for="qtdEstoque" class="col-form-label">Quantidade de produtos</label>
                        <div>
                            <span if="${#fields.hasErrors('qtdEstoque')}" errors="*{qtdEstoque}" class="txt-aviso">
                            </span>
                            <input type="text" field="*{qtdEstoque}" class="txt-form" id="qtdEstoque"
                            placeholder="qtdEstoque"/>
                        </div>

                        <label for="data">Data de Cadastro do Produto</label>
                            <Data  id="dataCadastro" class="">
                            <p>{date}</p>
                            </Data>

                        <label for="cnpj">CNPJ</label>
                        <div>
                            <span if="${#fields.hasErrors('cnpj')}" errors="*{cnpj}" class="txt-aviso">
                            </span>
                            <input type="text" field="*{cnpj}" id="cnpj" class="txt-form"
                                placeholder="Informe o CPNJ do fornecedor"/>
                        </div>

                        <label for="nomeImagem">fotos do produto:</label> 
                        <div >
                            <span if="${#fields.hasErrors('nomeImagem')}" errors="*{nomeImagem}" class="txt-aviso">
                            </span>
                            <input type="file"  accept="image/png,image/jpeg" id="Cadastroimagem" name="file"
                            class="txt-form"/>
                        </div>
                    </Row2grid>

                    <BttCadPrdutoGrid id="btt-cad-cliente-grid" className="btt-cad-cliente-grid">
                        <BtnCadPrduto type="submit" id="btn-cad-forms" class="btn-cad-forms" 
                        value="Enviar"/>
                        <a href="/sig/consulta-de-produtos">
                        <BtnCadPrduto type="button" id="btn-cad-forms" class="btn-cad-forms" 
                        value="Consultar Produtos"/></a>
                    </BttCadPrdutoGrid>   
                </form>
            </FormCadastroDeProduto>

)};
export default FormsProduto;