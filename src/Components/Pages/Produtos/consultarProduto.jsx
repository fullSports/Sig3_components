import React from "react";
import styled from "styled-components";
import Footer from "./../../Footer/index";
import Cabecalho from "./../../Cabecalho/index";
const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const ExibeTitulo = styled.h3`
    margin: 2%;
    text-align: center;
`;

const ConsultaProduto = ()=>{
    return(
        <>
        <Cabecalho />
        <Main>
        <ExibeTitulo id="exibe-titulo" className="exibe-titulo">Lista de Produtos</ExibeTitulo>
        
        </Main>
        <Footer />
        </>
    );
}
export default ConsultaProduto;