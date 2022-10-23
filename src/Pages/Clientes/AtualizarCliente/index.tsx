import React from "react";
import styled from "styled-components";
import Cabecalho from "../../../Components/Cabecalho";

const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const ExibeTitulo = styled.h3`
    margin: 2%;
    text-align: center;
`;


function AtualizaCliente(){return(
    <>
    <Cabecalho />
    <Main>
        <ExibeTitulo id="exibe-titulo" className="exibe-titulo">Atualizar Cliente</ExibeTitulo>

    </Main>
    </>
)};
export default AtualizaCliente;
