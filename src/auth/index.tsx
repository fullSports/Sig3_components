import React, { useEffect, useState } from "react";
import './styles.css';
import { TextField, Box } from "@mui/material";
import styled from "styled-components";
import apiFullSports from "../api/apiFullSports";
import ILogin from "../utils/interfaces/ILogin";
const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const ExibeTitulo = styled.div`
    margin: 2%;
    display: flex;
    justify-content: center;
    h3{
        
        margin-right: 2%;
        font-size: 25px;
    }
`;
const FormLogin = styled.div`
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


const AutenticacaoAdmin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [spinner, setSpinner] = useState(false);
    const [mensagemErroBolean, setMensagemErroBolean] = useState(false);
    const [menssagemErro, setMenssagemErro] = useState('');
    const emailCookies = JSON.parse(localStorage.getItem('email') as string)
    useEffect(() => {
        if (emailCookies) {
            console.log(emailCookies.toString())
            setEmail(emailCookies.toString())
        }
    }, [emailCookies])
    function realizarLogin(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setMensagemErroBolean(false)
        setSpinner(true);
        apiFullSports.post("realizar-login", {
            email: email,
            password: password
        }).then(resposta => {
            if (resposta.data.emailAndPassword === false) {
                setSpinner(false)
                setMensagemErroBolean(true);
                setMenssagemErro('email ou senha invalida!');
            } else {
                setMensagemErroBolean(false)
                localStorage.setItem('user', JSON.stringify(resposta.data.result));
                if (resposta.data.result.login.isAdmin) {
                    localStorage.removeItem("email");
                    window.location.href = '/dashboard/home/'
                } else {
                    localStorage.removeItem("email");
                    window.location.href = '/';
                }
            }
        }).catch(err => {
            console.log(err)
            setSpinner(false)
            setMensagemErroBolean(true)
            setMenssagemErro("erro na requisição")
        })
    }
    if (localStorage.getItem('user')) {
        console.log(JSON.parse(localStorage.getItem('user') as string));
    }

    return (
        <>
            <Main id="main">
                <ExibeTitulo id="exibe-titulo" className="exibe-titulo"><h3>Login</h3></ExibeTitulo>
                <FormLogin id="form-cadastro-cliente" className="form-cadastro-cliente">
                    <Box component={'form'} onSubmit={realizarLogin} encType="multipart/form-data">
                        <div className="row-grid">
                            <div>
                                <label className="col-form-label">E-mail
                                    <TextField
                                        sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                                        onChange={evento => setEmail(evento.target.value)}
                                        onClick={() => setMensagemErroBolean(false)}
                                        className="txt-form"
                                        id="email"
                                        type="email"
                                        placeholder={'Insira seu e-mail'}
                                        fullWidth
                                        required
                                        value={email}
                                    />
                                </label>
                                <label className="col-form-label">Senha
                                    <TextField
                                        sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
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
                        </div>
                        {spinner && (<p>carregando...</p>)}
                        {mensagemErroBolean && (<span id="menssagem-erro">{menssagemErro}</span>)}
                        <div className="btn-group">
                            <button
                                onClick={() => window.location.href = '/cadastrar-cliente'}
                                className="btn-cad-forms hallow-btn" type='button'>
                                Criar Conta
                            </button>
                            <button
                                type="submit" className="btn-cad-forms full-btn">
                                Login
                            </button>
                        </div>
                    </Box>
                </FormLogin>
            </Main>
        </>
    )
}

export default AutenticacaoAdmin;