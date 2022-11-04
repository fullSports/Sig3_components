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
const FormProduto = styled.div`
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
    .col-form-label{
        font-size: 20px;
    }
    #imagemPerfil{
        box-sizing: border-box;
        margin: 0 0 15px;
        width: 100%;
        padding: 15px;
        border-radius: 4px;
    }
`;
const BttCadClienteGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 2px;
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