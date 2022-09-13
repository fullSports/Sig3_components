import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Inpults from "../Inpults";
import Selects from "../Selects";
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
    @media screen and (max-width: 1144px) {
        width: 90%;
        height: auto;
        font-size: 12px;
        border-radius: 10px;
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

function FormsCliente() {
    const sexo = ['', 'M', 'F', 'O', 'Prefiro não dizer']
    // const aoSalvar = (evento) => {
    //     evento.preventDefault()
    //     alert('e')
    // }
    return (
        <FormCadastroCliente id="form-cadastro-cliente" className="form-cadastro-cliente">
            <form action="#" method="post" >
                <Row1grid id="row-1-grid" className="row-1-grid">
                    <Inpults label="CPF" for="cpf"
                        type="text"  id="cpf" placeholder="00.000.000-00"
                    />

                    <Inpults label="Nome do produto" for="nomeProduto"
                        type="text"  id="nome" placeholder="Nome do Produto"
                    />
                    <Inpults label="Data de Nascimento" for="dataNascimento"
                         id="data" placeholder="__/__/____"
                    />
                    <Selects label="Sexo" name="sexo" type="text" field="*{sexo}" class="txt-form" id="sexo"
                        placeholder="M/F/O/Prefiro Não Dizer" itens={sexo} />

                    <Inpults label="CEP" for="cep"  type="text" id="cep" placeholder="00000-00"
                    />

                    <Inpults label="Rua" for="rua"  type="text" id="rua" placeholder="rua"
                    />

                    <Inpults label="Bairro" for="bairro"  type="text" id="bairro" placeholder="bairro"
                    />

                    <Inpults label="Estado" for="estado"  type="text" id="estado" placeholder="estado"
                    />

                    <Inpults label="Cidade" for="cidade"  type="text" id="cidade" placeholder="cidade"
                    />

                    <Inpults label="Complemento" for="complemento"  type="text" 
                        id="complemento" placeholder="casa/apartamento"
                    />
                </Row1grid>

                <BttCadClienteGrid id="btt-cad-cliente-grid" className="btt-cad-cliente-grid">
                    <Button type="submit" id="btn-cad-forms" className="btn-cad-forms">
                        Cadastrar Cliente
                    </Button>
                    <a href="/sig/consulta-de-cliente">
                        <Button type="button" id="btn-cad-forms" className="btn-cad-forms" >
                            Consultar Cliente
                        </Button>
                    </a>
                </BttCadClienteGrid>

            </form>
        </FormCadastroCliente>
    )
};
export default FormsCliente;