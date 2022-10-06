import React from 'react';
import styled from 'styled-components';
import Cabecalho from '../../../Components/Cabecalho';
import Footer from '../../../Components/Footer';
import FormsCliente from '../../../Components/Forms/formsCliente';
const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const ExibeTitulo = styled.h3`
    margin: 2%;
    text-align: center;
`;

const CadastroCliente = () =>{
    return(
    <>
    <Cabecalho/>
    <Main>
    <ExibeTitulo id="exibe-titulo" className="exibe-titulo">Cadastrar Cliente</ExibeTitulo>
        <FormsCliente />
    </Main>
    <Footer />
    </>
    );
}
export default CadastroCliente;