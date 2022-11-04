import React from "react";
import styled from "styled-components";
import Cabecalho from "../../../Components/Cabecalho";
import Footer from "../../../Components/Footer";

const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const ExibeTitulo = styled.h3`
    margin: 2%;
    text-align: center;
`;



function AtualizaProduto() {

    return (
        <>
            <Cabecalho />
            <Main>
                <ExibeTitulo id="exibe-titulo" className="exibe-titulo" >Atualizar Produto</ExibeTitulo>

            </Main>
            <Footer />
        </>

    )
};
export default AtualizaProduto;