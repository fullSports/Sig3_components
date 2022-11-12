import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import apiFullSports from "../../../../../api/apiFullSports";

import { Button, TextField} from "@mui/material";

import IFornecedor from "../../../../../utils/interfaces/IFornecedor";
import { Box } from "@mui/system";
const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const ExibeTitulo = styled.h3`
    margin: 2%;
    text-align: center;
`;
const FormCadastroFornecedor = styled.div`
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
const Row2grid = styled.div`
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
`;
const BttCadClienteGrid = styled.div`
     display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 2px;
    #btn-cad-forms{
        justify-content: center;
        display: block;
        height: 50px;
        border-radius: 5px;
        color: #fff;
        font-size: 14px;
        background-color: black;
        :hover{
            background-color: #313131;
            text-decoration: 0.90s;
        }
    }
`;
const AtualizarFornecedor = () => {
    const parametros = useParams();
    const [cnpj, setCnpj] = useState('');
    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [complemento, setComplemento] = useState('');
    const [numero, setNumero] = useState('');
    const dataAtual = new Date().toLocaleDateString();
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        if (parametros.id) {
            apiFullSports.get<IFornecedor>(`listar-fornecedor/${parametros.id}`)
                .then(resposta =>{setSpinner(false); setCnpj(resposta.data.cnpj)})
                .catch((err) => console.log(err));

            apiFullSports.get<IFornecedor>(`listar-fornecedor/${parametros.id}`)
                .then(resposta =>{setSpinner(false); setNomeEmpresa(resposta.data.nomeEmpresa)})
                .catch((err) => console.log(err));

                apiFullSports.get<IFornecedor>(`listar-fornecedor/${parametros.id}`)
                .then(resposta =>{setSpinner(false); setCep(resposta.data.cep)})
                .catch((err) => console.log(err));
        }
    }, [parametros])
    function buscaCep() {
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();
        req.onload = function () {
            if (req.status === 200) {
                let endereco = JSON.parse(req.response);
                setRua('')
                setBairro('')
                setEstado('')
                setCidade('')
                setRua(endereco.street);
                setBairro(endereco.neighborhood);
                setEstado(endereco.state);
                setCidade(endereco.city)
            }
            else if (req.status === 404) {
                alert("cep invalido");
            }
            else {
                alert("erro ao fazer a requisicao")
            }
        }

    }
    function buscaCepCarregarPage() {
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();
        req.onload = function () {
            if (req.status === 200) {
                let endereco = JSON.parse(req.response);
                setRua(endereco.street);
                setBairro(endereco.neighborhood);
                setEstado(endereco.state);
                setCidade(endereco.city)
            }
        }
    }
    setTimeout(buscaCepCarregarPage, 0)

    function aoSubmeterForm(evento: React.FormEvent<HTMLFormElement>) {
        setSpinner(true)
        evento.preventDefault();
        if (parametros.id) {
            apiFullSports.put(`atualizar-fornecedor/${parametros.id}`, {
                cnpj: cnpj,
                nomeEmpresa: nomeEmpresa,
                cep: cep,
                endereco: `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`
            })
                .then(() => {
                    setSpinner(false);
                    // alert("Fornecedor atualizado com sucesso");
                    window.location.href='/dashboard/consultar-fornecedores'
                }).catch(err => console.log(err));
        } else {
            apiFullSports.post('cadastrar-fornecedor/', {
                cnpj: cnpj,
                nomeEmpresa: nomeEmpresa,
                cep: cep,
                endereco: `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`,
                dataCadastro: dataAtual
            })
                .then(() => {
                    setSpinner(false);
                    // alert("Fornecedornovo cadastrado com sucesso");
                    window.open('/dashboard/consultar-fornecedores');
                }).catch(err => console.log(err));
        }

    }
    return (
        <>
            <Main>
                <ExibeTitulo id="exibe-titulo" className="exibe-titulo">Atualizar Fornecedor</ExibeTitulo>
                <FormCadastroFornecedor id="form-fornecedor" className="form=fornecedor">
                <Box component={'form'} onSubmit={aoSubmeterForm}>
                <Row2grid id="row-2-grid" className="row-1-grid">
                            <label className="col-form-label">CNPJ do Fornecedor</label>
                            <TextField
                                sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                className="txt-form"
                                label="CNPJ"
                                id='cnpj'
                                type="text"
                                placeholder={'Digite o CNPJ do fornecedor'}
                                fullWidth
                                onChange={evento => setCnpj(evento.target.value)}
                                value={cnpj}
                            />
                            <label className="col-form-label">Nome do Fornecedor</label>
                            <TextField
                                sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                className="txt-form"
                                label="Nome Fornecedor"
                                id='nomeFornecedor'
                                type="text"
                                placeholder={'Digite o nome do fornecedor'}
                                fullWidth
                                onChange={evento => setNomeEmpresa(evento.target.value)}
                                value={nomeEmpresa}
                          />
                            <label className="col-form-label">Cep</label>
                            <TextField
                                onChange={evento => setCep(evento.target.value)}
                                sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                className="txt-form"
                                label="Cep"
                                id="cep"
                                type="text"
                                placeholder={'00000-000'}
                                fullWidth
                                required
                                onBlur={buscaCep}
                                value={cep}
                            />

                            <label className="col-form-label">Rua</label>
                            <TextField
                                onChange={evento => setRua(evento.target.value)}
                                sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                className="txt-form"
                                label="Rua"
                                id="rua"
                                type="text"
                                placeholder={'Digite sua rua'}
                                fullWidth
                                required
                                value={rua}
                            />

                            <label className="col-form-label">Bairro</label>
                            <TextField
                                onChange={evento => setBairro(evento.target.value)}
                                sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                className="txt-form"
                                label="Bairro"
                                id="bairro"
                                type="text"
                                placeholder={'Digite seu Bairro'}
                                fullWidth
                                required
                                value={bairro}
                            />

                            <label className="col-form-label">Estado</label>
                            <TextField
                                onChange={evento => setEstado(evento.target.value)}
                                sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                className="txt-form"
                                label="Estado"
                                id="estado"
                                type="text"
                                placeholder={'Digite seu estado'}
                                fullWidth
                                required
                                value={estado}
                            />

                            <label className="col-form-label">Cidade</label>
                            <TextField
                                onChange={evento => setCidade(evento.target.value)}
                                sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                className="txt-form"
                                label="Cidade"
                                id="cidade"
                                type="text"
                                placeholder={'Digite sua Cidade'}
                                fullWidth
                                required
                                value={cidade}
                            />
                            <label className="col-form-label">Número</label>
                            <TextField
                                onChange={evento => setNumero(evento.target.value)}
                                sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                className="txt-form"
                                label="Nº"
                                id="numero"
                                type="number"
                                fullWidth
                                required
                            />

                            <label className="col-form-label">Complemento</label>
                            <TextField
                                onChange={evento => setComplemento(evento.target.value)}
                                sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                className="txt-form"
                                label="Complemento"
                                id="complemento"
                                type="text"
                                placeholder={'casa/apartamento'}
                                fullWidth
                                required
                                value={complemento}
                            />
                            {spinner && (<p>carregando...</p>)}
                        </Row2grid>
                        <BttCadClienteGrid id="btt-cad-fornecedor-grid" className="btt-cad-fornecedor-grid">
                            <Button
                                sx={{
                                    justifyContent: 'center', display: 'block', height: '50px', borderRadius: '5px', color: '#fff',
                                    fontSize: '14px', backgroundColor: 'black', ":hover": 'backgroundColor: #313131, transform:translate(0.8s)'
                                }}
                                type="submit" id="btn-cad-forms" className="btn-cad-forms">
                                Atualizar Fornecedor
                            </Button>
                            <Button
                                onClick={() => window.location.href ='/dashboard/consultar-fornecedores'}
                                sx={{
                                    justifyContent: 'center', display: 'block', height: '50px', borderRadius: '5px', color: '#fff',
                                    fontSize: '14px', backgroundColor: 'black', ":hover": 'backgroundColor: #313131, transform:translate(0.8s)'
                                }} type="button" id="btn-cad-forms" className="btn-cad-forms">
                                Consulta de Fornecedores
                            </Button>
                        </BttCadClienteGrid>
                </Box>
                </FormCadastroFornecedor>
            </Main>
        </>
    )
}
export default AtualizarFornecedor;