import React, { useState } from "react";
import styled from 'styled-components';
import { Button, TextField, FormControl, Select, InputLabel, MenuItem, Box } from "@mui/material";
import apiFullSports from "../../../../../api/apiFullSports";
import ApiCep from "../../../../../api/apiCep";
import DashboardSidenav from "../../../../Components/Sidenav";
const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const ExibeTitulo = styled.h3`
    margin: 2%;
    text-align: center;
    font-size: 25px;
`;
const FormCadastroAdmin = styled.div`
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
        border: 1px solid #aca5a5;
    }
    #menssagem-erro{
    color: #a23b3b;
    font-size: 20x;
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
const AtualizarImagemLabel = styled.label`
cursor: pointer;
text-transform: uppercase;
color: #0b0b0b;
border: solid 1px #7b7777;;
margin-top: 4%;
margin-bottom: 4%;
display: flex;
padding: 10px 10px;
border-radius: 5px;
`;
const CadastroAdministrador = () => {

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
    const [spinner, setSpinner] = useState(false);
    const [carregandoCep, setCarregandoCep] = useState(false)
    const [carregandoCepMenssagem, setCarregandoCepMessagem] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
    const [menssagemErro, setMenssagemErro] = useState('');
    const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (evento.target.files?.length) {
            setImagem(evento.target.files[0])
        } else {
            setImagem(null)
        }
    }

    function buscaCep() {
        setCarregandoCep(true)
        setCarregandoCepMessagem(false)
        console.log(cep)
        ApiCep.request({
            method: 'GET',
            url: cep,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        }).then(evento => {
            setCarregandoCep(false)
            setRua(evento.data.street);
            setBairro(evento.data.neighborhood);
            setEstado(evento.data.state);
            setCidade(evento.data.city)
        }).catch(err => {
            setCarregandoCep(false)
            setCarregandoCepMessagem(true)
            console.log(err)
        })
    }

    function aoSubmeterForm(event: React.FormEvent<HTMLFormElement>) {
        setSpinner(true);
        event.preventDefault();
        console.log(email, password)
        apiFullSports.request({
            method: "POST",
            url: 'login/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            data: {
                email: email,
                password: password,
                isAdmin: true
            }
        }).then(respostaLogin => {
            if (respostaLogin.data.message) {
                setSpinner(false)
                setMensagemErroBolean(true);
                setMenssagemErro(respostaLogin.data.message);
            } else {
                console.log(respostaLogin.data._id)
                const formData = new FormData();
                if (file) {
                    formData.append("file", file);
                    apiFullSports.request({
                        method: "POST",
                        url: "imagem/",
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'multipart/form-data'
                        },
                        data: formData
                    })
                        .then(respostaImagem => {
                            apiFullSports.request({
                                method: "POST",
                                url: "cadastrar-cliente/",
                                headers: {
                                    'Access-Control-Allow-Origin': '*'
                                },
                                data: {
                                    cpf: cpf,
                                    nome: nome,
                                    login: respostaLogin.data._id,
                                    dataNascimento: dataNascimento,
                                    sexo: sexo,
                                    cep: cep,
                                    endereco: `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`,
                                    dataCadastro: dataAtual,
                                    imagemPerfil: respostaImagem.data._id
                                }
                            }).then(() => setSpinner(false)).catch(err => { console.log(err) })
                        }).catch(err => { console.log(err) })
                } else {
                    apiFullSports.request({
                        method: "POST",
                        url: "cadastrar-cliente/",
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        },
                        data: {
                            cpf: cpf,
                            nome: nome,
                            login: respostaLogin.data._id,
                            dataNascimento: dataNascimento,
                            sexo: sexo,
                            cep: cep,
                            endereco: `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`,
                            dataCadastro: dataAtual
                        }
                    }).then(() => setSpinner(false)).catch(err => { console.log(err) })
                }
            }
        }).catch(err => { console.log(err) })

    }

    return (
        <>
            <DashboardSidenav />
            <Main id="main">
                <ExibeTitulo id="exibe-titulo" className="exibe-titulo">Cadastrar um Adimin</ExibeTitulo>
                <FormCadastroAdmin id="form-cadastro-cliente" className="form-cadastro-cliente">
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

                            <label className="col-form-label">Cep {carregandoCep && <p>buscando cep...</p>}{carregandoCepMenssagem && <p id="menssagem-erro">cep invalido</p>}</label>
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
                             <label className="col-form-label">E-mail</label>
                            <TextField
                                sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                onChange={evento => setEmail(evento.target.value)}
                                onClick={() => setMensagemErroBolean(false)}
                                className="txt-form"
                                label="email"
                                id="email"
                                type="email"
                                placeholder={'Insira seu e-mail'}
                                fullWidth
                                required
                            />

                            <label className="col-form-label">Senha</label>
                            <TextField
                                sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                onChange={evento => setPassword(evento.target.value)}
                                className="txt-form"
                                label="password"
                                id="password"
                                type="password"
                                placeholder={'Insira sua senha'}
                                fullWidth
                                required
                            />
                            <label className="col-form-label">Imagem de Perfil</label>
                            <AtualizarImagemLabel htmlFor="file" >Escolher foto...</AtualizarImagemLabel>
                            <input
                                onChange={selecionarArquivo}
                                className="txt-form"
                                id="file"
                                type="file"
                                name="file"
                                accept="image/jpeg, image/pjpeg, image/png, image/gif"
                            />
                            {spinner && (<p>carregando...</p>)}
                            {mensagemErroBolean && (<span id="menssagem-erro">{menssagemErro}</span>)}
                        </Row1grid>

                        <BttCadClienteGrid id="btt-cad-cliente-grid" className="btt-cad-cliente-grid">
                            <Button
                                sx={{
                                    justifyContent: 'center', display: 'block', height: '50px', borderRadius: '5px', color: '#fff',
                                    fontSize: '14px', backgroundColor: 'black', ":hover": 'backgroundColor: #313131, transform:translate(0.8s)'
                                }}
                                type="submit" id="btn-cad-forms" className="btn-cad-forms">
                                Cadastrar Administrador
                            </Button>
                            <Button
                                onClick={evento => window.location.href = '/dashboard/consulta-admin'}
                                sx={{
                                    justifyContent: 'center', display: 'block', height: '50px', borderRadius: '5px', color: '#fff',
                                    fontSize: '14px', backgroundColor: 'black', ":hover": 'backgroundColor: #313131, transform:translate(0.8s)'
                                }} type="button" id="btn-cad-forms" className="btn-cad-forms">
                                Consulta de Administradores
                            </Button>
                        </BttCadClienteGrid>
                    </Box>
                </FormCadastroAdmin>
            </Main>
        </>
    )
}

export default CadastroAdministrador;