import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import apiFullSports from "../../../api/apiFullSports";
import Cabecalho from "../../../Components/Cabecalho";
import ICliente from "../../../interfaces/ICliente";

const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const ExibeTitulo = styled.h3`
    margin: 2%;
    text-align: center;
`;


function AtualizaCliente() {
    const parametros = useParams();
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [sexo, setSexo] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [complemento, setComplemento] = useState('');

    // useEffect(()=>{
    //     if(parametros.id){
    //         apiFullSports.get<ICliente>(`/atualizar-cliente/${parametros.id}`)
    //         .then(resposta => setNome(resposta.data.nome))
    //     }
    // },[parametros])    
    return (
        <>
            <Cabecalho />
            <Main>
                <ExibeTitulo id="exibe-titulo" className="exibe-titulo">Atualizar Cliente</ExibeTitulo>

            </Main>
        </>
    )
};
export default AtualizaCliente;
