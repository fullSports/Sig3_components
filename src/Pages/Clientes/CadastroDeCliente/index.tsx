import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Cabecalho from '../../../Components/Cabecalho';
import Footer from '../../../Components/Footer';
import { Button, TextField, FormControl, Select, InputLabel, MenuItem, Box } from "@mui/material";
import apiFullSports from '../../../api/apiFullSports';
import Iimagem from "../../../interfaces/Iimagem";
const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const ExibeTitulo = styled.h3`
    margin: 2%;
    text-align: center;
`;
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
    .col-form-label{
        font-size: 20px;
    }
`;
const BttCadClienteGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(auto, auto);
    grid-gap: 2px;
`;
const CadastroCliente = () => {
    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const dataAtual = new Date().toLocaleDateString();
    const [sexo, setSexo] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [complemento, setComplemento] = useState('');
    const [numero, setNumero] = useState('');
    const [file, setImagem] = useState<File | null>(null)

    const [ImagemString, setImagemString] = useState('')
    const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (evento.target.files?.length) {
            setImagem(evento.target.files[0])
        } else {
            setImagem(null)
        }
    }   
    console.log(file)

    function aoSubmeterForm(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        // const formData = new FormData();
        const formData1 = new FormData()
        // formData.append('cpf', cpf);
        // formData.append('nome', nome);
        // formData.append('dataNascimento', dataNascimento);
        // formData.append('sexo', sexo);
        // formData.append('endereco', `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`);
        // formData.append('dataCadastro', dataAtual);
        if (file) {
            formData1.append('file', file)
        }   
        // apiFullSports.request({
        //     url: 'cadastrar-cliente/',
        //     method: 'POST',
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'multipart/form-data'
        //     },
        //     data: formData
        // })  
        // .then(() => {
        //     setCpf('');
        //     setNome('');
        //     setDataNascimento('');
        //     setSexo('');
        //     setCep('');
        //     setRua('');
        //     setBairro('');
        //     setEstado('');
        //     setCidade('');
        //     setComplemento('');
        //     setNumero('');
        //     alert('Cliente cadastrado com sucesso')
        // })
        // .catch(erro => console.log(erro));
        

        apiFullSports.request({
            url: 'imagem/',
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'multipart/form-data'
            },
            data: formData1
        })
        .then(response => 
            
            apiFullSports.request({
                url: `imagem/${response.data._id}`,
                method: 'GET',
                headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'multipart/form-data'
            },
            })
            .then(response=>

                apiFullSports.request({
                    url: 'cadastrar-cliente/',
                    method: 'POST',
                    data:{
                        cpf: cpf,
                        nome: nome,
                        dataNascimento: dataNascimento,
                        sexo: sexo,
                        cep: cep,
                        endereco: `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`,
                        dataCadastro: dataAtual,
                        imagePerfil:response.data
                }
            })).catch(erro => console.log(erro))
        ).catch(erro => console.log(erro))
        
        }
        function buscaCep(){
            console.log(cpf+cep)
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
                else if (req.status === 404) {
                    alert("cep invalido");
                }
                else {
                    alert("erro ao fazer a requisicao")
                }
            }
        }
        return (
            <>
                <Cabecalho />
                <Main>
                    <ExibeTitulo id="exibe-titulo" className="exibe-titulo">Cadastrar Cliente</ExibeTitulo>
                    <FormCadastroCliente id="form-cadastro-cliente" className="form-cadastro-cliente">
                        <Box component={'form'} onSubmit={aoSubmeterForm} encType="multipart/form-data">
                            <Row1grid id="row-1-grid" className="row-1-grid">
                                <label className="col-form-label">CPF</label>
                                <TextField
                                    sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                    onChange={evento => setCpf(evento.target.value)}
                                    className="txt-form"
                                    label="cpf"
                                    id="cpf"
                                    type="text"
                                    placeholder={'00.000.000-00'}
                                    fullWidth
                                    required
                                />

                                <label className="col-form-label">Nome</label>
                                <TextField
                                    sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                    onChange={evento => setNome(evento.target.value)}
                                    className="txt-form"
                                    label="Nome"
                                    id="nome"
                                    type="text"
                                    placeholder={'Digite seu nome'}
                                    fullWidth
                                    required
                                />

                                <label className="col-form-label">Data de Nascimento</label>
                                <TextField
                                    sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                    onChange={evento => setDataNascimento(evento.target.value)}
                                    className="txt-form"
                                    label="Data de Nascimento"
                                    id="data"
                                    type="text"
                                    placeholder={'__/__/____'}
                                    fullWidth
                                    required
                                />

                                <label className="col-form-label">Sexo</label>
                                <FormControl fullWidth margin="dense">
                                    <InputLabel id="sexo">Sexo</InputLabel>
                                    <Select className="txt-form" labelId="sexo" sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                        value={sexo} onChange={evento => setSexo(evento.target.value)} required>
                                        <MenuItem key={''} value={''}></MenuItem>
                                        <MenuItem key={'M'} value={'M'}>Masculino</MenuItem>
                                        <MenuItem key={'F'} value={'F'}>Feminino</MenuItem>
                                        <MenuItem key={'O'} value={'O'}>Outros</MenuItem>
                                        <MenuItem key={'-'} value={'-'}>Prefiro não dizer</MenuItem>
                                    </Select>
                                </FormControl>

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
                                />

                                <input type="file" accept="image/png,image/jpeg" name="file" onChange={selecionarArquivo}/>
                            </Row1grid>

                            <BttCadClienteGrid id="btt-cad-cliente-grid" className="btt-cad-cliente-grid">
                                <Button
                                    sx={{
                                        justifyContent: 'center', display: 'block', height: '50px', borderRadius: '5px', color: '#fff',
                                        fontSize: '14px', backgroundColor: 'black', ":hover": 'backgroundColor: #313131, transform:translate(0.8s)'
                                    }}
                                    type="submit" id="btn-cad-forms" className="btn-cad-forms">
                                    Cadastrar Cliente
                                </Button>
                                <Button
                                    onClick={evento => window.open('/sig/consulta-de-clientes')}
                                    sx={{
                                        justifyContent: 'center', display: 'block', height: '50px', borderRadius: '5px', color: '#fff',
                                        fontSize: '14px', backgroundColor: 'black', ":hover": 'backgroundColor: #313131, transform:translate(0.8s)'
                                    }} type="button" id="btn-cad-forms" className="btn-cad-forms">
                                    Consulta de Clientes
                                </Button>
                            </BttCadClienteGrid>
                            </Box>
                    </FormCadastroCliente>
                </Main>
                <Footer />
            </>
        );
    }
    export default CadastroCliente;