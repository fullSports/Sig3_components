import React, { useState } from "react";
import "./../../../styles.css"
import DashboardSidenav from '../../../Components/Sidenav'
import styled from 'styled-components';
import { TextField, FormControl, Select, InputLabel, MenuItem, Box } from "@mui/material";
import apiFullSports from "../../../../../api/apiFullSports";
import ApiCep from "../../../../../api/apiCep";
import DashboardHeader from "../../../Components/Header";

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
    let ID: any;
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
        if (cep === '') {
            setCarregandoCep(false)
            setRua('');
            setBairro('');
            setEstado('');
            setCidade('')
        } else {
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
    }

    function aoSubmeterForm(event: React.FormEvent<HTMLFormElement>) {
        setSpinner(true);
        event.preventDefault();
        console.log(email, password)
        if (file) {
            apiFullSports.request({
                url: 'imagem/',
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'multipart/form-data'
                },
                data: {
                    file: file
                }
            }).then(reposta => ID = reposta.data.image._id)
                .catch(err => {
                    console.log(err)
                    setMensagemErroBolean(true)
                    setMenssagemErro("Erro na requisição")
                })
        }
        apiFullSports.request({
            url: "/cadastrar-cliente",
            method: "POST",
            data: {
                cpf: cpf,
                nome: nome,
                login: {
                    email: email,
                    password: password,
                    isAdmin: true
                },
                dataNascimento: dataNascimento,
                sexo: sexo,
                cep: cep,
                endereco: `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`,
                imagemPerfil: ID ? ID : null
            }
        }).then(reposta => {
            if (reposta.data.registeredSuccess === false) {
                setSpinner(false);
                setMensagemErroBolean(true)
                setMenssagemErro(reposta.data.messagem)
            }
        }).catch(err => {
            console.log(err)
            setMensagemErroBolean(true)
            setMenssagemErro("Erro na requisição")
        })
    }

    return (
        <>
            <div className="flex">
                <DashboardSidenav />
                <div id="main" className="dashboard-body">
                    <DashboardHeader />
                    <div className="form-card">
                        <div id="form-cadastro-cliente" className="form-cadastro-cliente">
                            <span className="form-title">Cadastro de Administrador</span>
                            <Box component={'form'} onSubmit={aoSubmeterForm} encType="multipart/form-data">
                                <div className="form-rows">
                                </div>
                                <div className="row-grid">
                                    <label className="col-form-label">Nome Completo
                                        <TextField
                                            sx={{ boxSizing: 'border-box', margin: '8px 0 15px', width: '100%' }}
                                            onChange={evento => setNome(evento.target.value)}
                                            className="txt-form"
                                            id="nome"
                                            type="text"
                                            placeholder={'Digite o nome do admnistrador.'}
                                            fullWidth
                                            required
                                        />
                                    </label>
                                    <label className="col-form-label">CPF
                                        <TextField
                                            sx={{ boxSizing: 'border-box', margin: '8px 0 15px', width: '100%' }}
                                            onChange={evento => setCpf(evento.target.value)}
                                            className="txt-form"
                                            id="cpf"
                                            type="text"
                                            placeholder={'00.000.000-00'}
                                            fullWidth
                                            required
                                        />
                                    </label>
                                </div>
                                <div className="row-grid">
                                    <label className="col-form-label">Data de Nascimento
                                        <TextField
                                            sx={{ boxSizing: 'border-box', margin: '8px 0 15px', width: '100%' }}
                                            onChange={evento => setDataNascimento(evento.target.value)}
                                            className="txt-form"
                                            id="data"
                                            type="text"
                                            placeholder={'__/__/____'}
                                            fullWidth
                                            required
                                        />
                                    </label>

                                    <label className="col-form-label">Sexo
                                        <FormControl fullWidth margin="dense">
                                            <InputLabel id="sexo">Sexo</InputLabel>
                                            <Select className="txt-form" labelId="sexo" sx={{ boxSizing: 'border-box', margin: '8px 0 15px', width: '100%' }}
                                                value={sexo} onChange={evento => setSexo(evento.target.value)} required>
                                                <MenuItem key={''} value={''}></MenuItem>
                                                <MenuItem key={'M'} value={'M'}>Masculino</MenuItem>
                                                <MenuItem key={'F'} value={'F'}>Feminino</MenuItem>
                                                <MenuItem key={'O'} value={'O'}>Outros</MenuItem>
                                                <MenuItem key={'-'} value={'-'}>Prefiro não dizer</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </label>
                                </div>
                                <div className="row-grid">
                                    <label className="col-form-label">Cep {carregandoCep && <p>buscando cep...</p>}{carregandoCepMenssagem && <p id="menssagem-erro">cep invalido</p>}
                                        <TextField
                                            onChange={evento => setCep(evento.target.value)}
                                            sx={{ boxSizing: 'border-box', margin: '8px 0 15px', width: '100%' }}
                                            className="txt-form"
                                            id="cep"
                                            type="text"
                                            placeholder={'00000-000'}
                                            fullWidth
                                            required
                                            onBlur={buscaCep}
                                        />
                                    </label>

                                    <label className="col-form-label">Rua
                                        <TextField
                                            onChange={evento => setRua(evento.target.value)}
                                            sx={{ boxSizing: 'border-box', margin: '8px 0 15px', width: '100%' }}
                                            className="txt-form"
                                            id="rua"
                                            type="text"
                                            placeholder={'Digite sua rua'}
                                            fullWidth
                                            required
                                            value={rua}
                                        />
                                    </label>
                                </div>
                                <div className="row-grid">
                                    <label className="col-form-label">Bairro
                                        <TextField
                                            onChange={evento => setBairro(evento.target.value)}
                                            sx={{ boxSizing: 'border-box', margin: '8px 0 15px', width: '100%' }}
                                            className="txt-form"
                                            id="bairro"
                                            type="text"
                                            placeholder={'Digite seu Bairro'}
                                            fullWidth
                                            required
                                            value={bairro}
                                        />
                                    </label>

                                    <label className="col-form-label">Estado
                                        <TextField
                                            onChange={evento => setEstado(evento.target.value)}
                                            sx={{ boxSizing: 'border-box', margin: '8px 0 15px', width: '100%' }}
                                            className="txt-form"
                                            id="estado"
                                            type="text"
                                            placeholder={'Digite seu estado'}
                                            fullWidth
                                            required
                                            value={estado}
                                        />
                                    </label>
                                </div>
                                <div className="row-grid">
                                    <label className="col-form-label">Cidade
                                        <TextField
                                            onChange={evento => setCidade(evento.target.value)}
                                            sx={{ boxSizing: 'border-box', margin: '8px 0 15px', width: '100%' }}
                                            className="txt-form"
                                            id="cidade"
                                            type="text"
                                            placeholder={'Digite sua Cidade'}
                                            fullWidth
                                            required
                                            value={cidade}
                                        />
                                    </label>
                                    <label className="col-form-label">Número
                                        <TextField
                                            onChange={evento => setNumero(evento.target.value)}
                                            sx={{ boxSizing: 'border-box', margin: '8px 0 15px', width: '100%' }}
                                            className="txt-form"
                                            id="numero"
                                            type="number"
                                            fullWidth
                                            required
                                        />
                                    </label>

                                    <label className="col-form-label">Complemento
                                        <TextField
                                            onChange={evento => setComplemento(evento.target.value)}
                                            sx={{ boxSizing: 'border-box', margin: '8px 0 15px', width: '100%' }}
                                            className="txt-form"
                                            id="complemento"
                                            type="text"
                                            placeholder={'casa/apartamento'}
                                            fullWidth
                                            required
                                        />
                                    </label>
                                </div>
                                <div className="row-grid">
                                    <label className="col-form-label">E-mail
                                        <TextField
                                            sx={{ boxSizing: 'border-box', margin: '8px 0 15px', width: '100%' }}
                                            onChange={evento => setEmail(evento.target.value)}
                                            onClick={() => setMensagemErroBolean(false)}
                                            className="txt-form"
                                            id="email"
                                            type="email"
                                            placeholder={'Insira seu e-mail'}
                                            fullWidth
                                            required
                                        />
                                    </label>

                                    <label className="col-form-label">Senha
                                        <TextField
                                            sx={{ boxSizing: 'border-box', margin: '8px 0 15px', width: '100%' }}
                                            onChange={evento => setPassword(evento.target.value)}
                                            className="txt-form"
                                            id="password"
                                            type="password"
                                            placeholder={'Insira sua senha'}
                                            fullWidth
                                            required
                                        />
                                    </label>
                                </div>
                                <div className="row-grid-1">
                                    <label className="col-form-label">Imagem de Perfil
                                        <AtualizarImagemLabel htmlFor="file" >Escolher foto...</AtualizarImagemLabel>
                                        <input
                                            onChange={selecionarArquivo}
                                            className="txt-form"
                                            id="file"
                                            type="file"
                                            name="file"
                                            accept="image/jpeg, image/pjpeg, image/png, image/gif"
                                        />
                                    </label>
                                </div>
                                {spinner && (<p>carregando...</p>)}
                                {mensagemErroBolean && (<span id="menssagem-erro">{menssagemErro}</span>)}
                                <div className="btn-group">
                                    <button
                                        onClick={evento => window.location.href = '/dashboard/consultar-admin'}
                                        className="btn-cad-forms hallow-btn">
                                        Consultar Admins
                                    </button>
                                    <button
                                        type="submit" className="btn-cad-forms full-btn">
                                        Cadastrar Admin
                                    </button>
                                </div>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CadastroAdministrador;