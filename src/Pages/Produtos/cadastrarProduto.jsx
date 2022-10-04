import React from "react";
import styled from "styled-components";
import Footer from "../../Components/Footer";
import Cabecalho from "../../Components/Cabecalho";
import FormsProduto from "../../Components/Forms/formsProduto";

const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const ExibeTitulo = styled.h3`
    margin: 2%;
    text-align: center;
`;

const CadastrarProduto = ()=>{
    return(
        <>
            <Cabecalho />
            <Main>
            <ExibeTitulo id="exibe-titulo" className="exibe-titulo" >Cadastrar Produto</ExibeTitulo>
            <FormsProduto />
        </Main>
        <Footer />
        </>
    );
}
export default CadastrarProduto;