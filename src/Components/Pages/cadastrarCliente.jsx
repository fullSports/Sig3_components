import React from "react";
import styled from "styled-components";
import Footer from "./../Footer/index";
import Cabecalho from "./../Cabecalho/index";

const Main = styled.main`
    wid 100%;
    min-height: 600px;
`;
const ExibeTitulo = styled.h3`
    margin: 2%;
    text-align: center;
`;
const FormCadastroCliente = styled.div`
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
        width 100%;
        height: 25px;
        border: 0;
        margin: 0 0 15px;
        box-sizing: border-box;
        font-size: 14px;
    }
    form input {
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
const Row1grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 5px;

    border-radius: 20px;
    wid auto;
    height: auto;
    margin: 1px;  
`;
const BttCadClienteGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 2px;
`;
const BtnCadCliente = styled.input`
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

const CadastrarCliente = () =>{
return(
    <>
    <Cabecalho />
    <Main>
        <ExibeTitulo id="exibe-titulo" className="exibe-titulo">Cadastrar Cliente</ExibeTitulo>
        <FormCadastroCliente id="form-cadastro-cliente" className="form-cadastro-cliente">
            <form action="#" object="${}" method="post">
                <Row1grid id="row-1-grid" className="row-1-grid">
                    <label for="cpf" class="col-form-label">CPF</label>
                    <div>
                        <span if="${#fields.hasErrors('cpf')}" errors="*{cpf}" class="txt-aviso">
                        </span>
                        <input type="text" field="*{cpf}" class="txt-form" id="cpf" placeholder="CPF"/>
                    </div>

                    <label for="nome" class="col-form-label">Nome</label>
                    <div>
                        <span if="${#fields.hasErrors('nome')}" errors="*{nome}" class="txt-aviso">
                        </span>
                        <input type="text" field="*{nome}" class="txt-form" id="nome" placeholder="Nome"/>
                    </div>

                    <label for="dataNascimento" class="col-form-label">Data Nascimento</label>
                    <div>
                        <span if="${#fields.hasErrors('dataNascimento')}" errors="*{dataNascimento}"
                            class="txt-aviso"></span>
                        <input  type="text" field="*{dataNascimento}" class="txt-form" id="dataNascimento"
                            placeholder="Data Nascimento"/>

                    </div>

                    <label for="dataNascimento" class="col-form-label">Sexo</label>
                    <div>
                        <span if="${#fields.hasErrors('sexo')}" errors="*{sexo}" class="txt-aviso">
                        </span>
                        <select name="sexo"  type="text" field="*{sexo}" class="txt-form" id="sexo" placeholder="M/F/O/Prefiro Não Dizer">
                            <option value="#"></option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                            <option value="O">Outros</option>
                            <option value="*">Prefiro Não Dizer</option>
                        </select>
                    </div>

                    <label for="cep" class="col-form-label">CEP</label>
                    <div>
                        <span if="${#fields.hasErrors('cep')}" errors="*{cep}" class="txt-aviso"></span>
                        <input type="text" field="*{cep}" class="txt-form" id="cep" placeholder="CEP"/>
                    </div>
                    
                    <label for="endereco" class="col-form-label">Endereço</label>
                    <div>
                        <span if="${#fields.hasErrors('endereco')}" errors="*{endereco}" class="txt-aviso"></span>
                        <input type="text" field="*{endereco}" class="txt-form" id="endereco" placeholder="Endereço"/>
                    </div>

                    <label for="complemento" class="col-form-label">Complemento</label>
                    <div>
                        <span if="${#fields.hasErrors('complemento')}" errors="*{complemento}"
                            class="txt-aviso"></span>
                        <input type="text" field="*{complemento}" class="txt-form" id="complemento"
                            placeholder="Complemento numero/apto"/>
                    </div>
                </Row1grid>  
                <BttCadClienteGrid id="btt-cad-cliente-grid" className="btt-cad-cliente-grid">
                <BtnCadCliente type="submit" id="btn-cad-cliente" class="btn-cad-cliente" value="Cadastrar cliente "/>
				<a href="/sig/consulta-clientes">
                <BtnCadCliente type="button" id="btn-cad-cliente" class="btn-cad-cliente" value="Consultar cliente"/></a>
                </BttCadClienteGrid>   
                     
            </form>
        </FormCadastroCliente>
    </Main>
    <Footer />
    </>

);
}
export default CadastrarCliente;