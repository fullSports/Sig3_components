import React from "react";
import styled from "styled-components";
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
        width :100%;
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
const Row1grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 5px;

    border-radius: 20px;
    width: auto;
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
function FormsCliente(){
    return(
        <FormCadastroCliente id="form-cadastro-cliente" className="form-cadastro-cliente">
            <form action="#"  method="post">
                <Row1grid id="row-1-grid" className="row-1-grid">
                    <label for="cpf" className="col-form-label">CPF</label>
                    <div>
                        <span if="${#fields.hasErrors('cpf')}" errors="*{cpf}" className="txt-aviso">
                        </span>
                        <input type="text" field="*{cpf}" className="txt-form" id="cpf" placeholder="000.000.000-00"/>
                    </div>

                    <label for="nome" className="col-form-label">Nome</label>
                    <div>
                        <span if="${#fields.hasErrors('nome')}" errors="*{nome}" className="txt-aviso">
                        </span>
                        <input type="text" field="*{nome}" className="txt-form" id="nome" placeholder="Nome"/>
                    </div>

                    <label for="dataNascimento" className="col-form-label">Data Nascimento</label>
                    <div>
                        <span if="${#fields.hasErrors('dataNascimento')}" errors="*{dataNascimento}"
                            className="txt-aviso"></span>
                        <input  type="text" field="*{dataNascimento}" className="txt-form" id="data"
                            placeholder="__/__/____"/>

                    </div>

                    <label for="dataNascimento" className="col-form-label">Sexo</label>
                    <div>
                        <span if="${#fields.hasErrors('sexo')}" errors="*{sexo}" className="txt-aviso">
                        </span>
                        <select name="sexo"  type="text" field="*{sexo}" className="txt-form" id="sexo" placeholder="M/F/O/Prefiro Não Dizer">
                            <option value="#"></option>
                            <option value="M">Masculino</option>
                            <option value="F">Feminino</option>
                            <option value="O">Outros</option>
                            <option value="*">Prefiro Não Dizer</option>
                        </select>
                    </div>

                    <label for="cep" className="col-form-label">CEP</label>
                    <div>
                        <span if="${#fields.hasErrors('cep')}" errors="*{cep}" className="txt-aviso"></span>
                        <input type="text" field="*{cep}" className="txt-form" onblur="pesquisacep(this.value);"
                         name="cep" id="cep" placeholder="00000-000"/>
                    </div>
                    
                    <label for="rua" className="col-form-label">Rua</label>
                    <div>
                        <span if="${#fields.hasErrors('rua')}" errors="*{rua}" className="txt-aviso"></span>
                        <input type="text" field="*{rua}" className="txt-form" id="rua" size="60" placeholder="rua" name="rua"/>
                    </div>

                    <label for="bairro" className="col-form-label">Bairro</label>
                    <div>
                        <span if="${#fields.hasErrors('bairro')}" errors="*{bairro}" className="txt-aviso"></span>
                        <input type="text" field="*{bairro}" className="txt-form" id="bairro" placeholder="bairro" name="bairro"/>
                    </div>

                    <label for="cidade" className="col-form-label">Cidade</label>
                    <div>
                        <span if="${#fields.hasErrors('cidade')}" errors="*{cidade}" className="txt-aviso"></span>
                        <input type="text" field="*{cidade}" className="txt-form" id="cidade" placeholder="cidade" name="cidade"/>
                    </div>

                    <label for="estado" className="col-form-label">Estado</label>
                    <div>
                        <span if="${#fields.hasErrors('estado')}" errors="*{estado}" className="txt-aviso"></span>
                        <input type="text" field="*{estado}" className="txt-form" id="estado" placeholder="estado" name="estado"/>
                    </div>

                    <label for="complemento" className="col-form-label">Complemento</label>
                    <div>
                        <span if="${#fields.hasErrors('complemento')}" errors="*{complemento}"
                            className="txt-aviso"></span>
                        <input type="text" field="*{complemento}" className="txt-form" id="complemento"
                            placeholder="Complemento numero/apto" name="complemento"/>
                    </div>
                </Row1grid>  

                <BttCadClienteGrid id="btt-cad-cliente-grid" className="btt-cad-cliente-grid">
                    <BtnCadCliente type="submit" id="btn-cad-forms" className="btn-cad-forms" 
                    value="Enviar"/>
                    <a href="/sig/consulta-de-cliente">
                    <BtnCadCliente type="button" id="btn-cad-forms" className="btn-cad-forms" 
                    value="Consultar cliente"/></a>
                </BttCadClienteGrid>   
                     
            </form>
        </FormCadastroCliente>
)};
export default FormsCliente;