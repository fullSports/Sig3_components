import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import apiFullSports from "../../../api/apiFullSports";
import Cabecalho from "../../../Components/Menu/Header";
import ICliente from "../../../utils/interfaces/ICliente";
import ApiCep from "../../../api/apiCep";
import { Button, TextField, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
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
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const dataAtual = new Date().toLocaleDateString();
    const [spinner, setSpinner] = useState(false);
    const [imagemId, setImagemID] = useState('');
    const [file, setImagem] = useState<File | null>(null)
    const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
        if (evento.target.files?.length) {
            setImagem(evento.target.files[0])
        } else {
            setImagem(null)
        }
    }
    console.log(imagemId)
    useEffect(() => {
        if (parametros.id) {
            apiFullSports.get<ICliente>(`listar-cliente/${parametros.id}`)
                .then(resposta => setCpf(resposta.data.cpf))
                .catch((err) => console.log(err));

            apiFullSports.get<ICliente>(`listar-cliente/${parametros.id}`)
                .then(resposta => setNome(resposta.data.nome))
                .catch((err) => console.log(err));

            apiFullSports.get<ICliente>(`listar-cliente/${parametros.id}`)
                .then(resposta => setDataNascimento(resposta.data.dataNascimento))
                .catch((err) => console.log(err));

            apiFullSports.get<ICliente>(`listar-cliente/${parametros.id}`)
                .then(resposta => setSexo(resposta.data.sexo))
                .catch((err) => console.log(err));

            apiFullSports.get<ICliente>(`listar-cliente/${parametros.id}`)
                .then(resposta => setCep(resposta.data.cep))
                .catch((err) => console.log(err));

            apiFullSports.get<ICliente>(`listar-cliente/${parametros.id}`)
                .then(resposta => setImagemID(resposta.data.imagemPerfil._id))
                .catch((err) => console.log(err));
        }

    }, [parametros]);


    function buscaCep() {
        ApiCep.request({
            method: 'GET',
            url: cep,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        }).then(evento => {
            setRua('')
            setBairro('')
            setEstado('')
            setCidade('')
            setRua(evento.data.street);
            setBairro(evento.data.neighborhood);
            setEstado(evento.data.state);
            setCidade(evento.data.city)
        }).catch(err=>{
            alert("cep invalido");
            console.log(err)
        })

    }
    function buscaCepCarregarPage() {
        console.log(cep)
        ApiCep.request({
            method: 'GET',
            url: cep,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
        }).then(evento => {
            setRua(evento.data.street);
            setBairro(evento.data.neighborhood);
            setEstado(evento.data.state);
            setCidade(evento.data.city)
        })
    }
    setTimeout(buscaCepCarregarPage, 222)


    function aoSubmeterForm(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setSpinner(true);
        const formData1 = new FormData()
        if (file) {
            formData1.append('file', file)
        }


        if (parametros.id) {
            if (!file) {
                apiFullSports.put(`atualizar-cliente/${parametros.id}`, {
                    cpf: cpf,
                    nome: nome,
                    dataNascimento: dataNascimento,
                    sexo: sexo,
                    cep: cep,
                    endereco: `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`,
                }).then(() => {
                    setSpinner(false)
                    // alert("cliente atualizado com suceeso");
                    window.location.href = "/sig/consulta-de-clientes";
                }).catch(erro => console.log(erro))
            } else {
                apiFullSports.get<ICliente>(`listar-cliente/${parametros.id}`)
                    .then(resposta => {
                        if (resposta.data.imagemPerfil === null) {
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
                                        .then(response =>
                                            apiFullSports.request({
                                                url: `atualizar-cliente/${parametros.id}`,
                                                method: 'PUT',
                                                data: {
                                                    cpf: cpf,
                                                    nome: nome,
                                                    dataNascimento: dataNascimento,
                                                    sexo: sexo,
                                                    cep: cep,
                                                    endereco: `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`,
                                                    dataCadastro: dataAtual,
                                                    imagemPerfil: response.data._id
                                                }
                                            })
                                                .then(() => {
                                                    setSpinner(false)
                                                    // alert("cliente atualizado com suceso");
                                                    window.location.href = "/sig/consulta-de-clientes";
                                                }).catch(erro => console.log(erro))
                                        ).catch(erro => console.log(erro))
                                ).catch(erro => console.log(erro))
                        } else {
                            apiFullSports.request({
                                url: `imagem/${resposta.data.imagemPerfil._id}`,
                                method: 'GET',
                                headers: {
                                    'Access-Control-Allow-Origin': '*',
                                    'Content-Type': 'multipart/form-data'
                                },
                            }).then(responsa => {
                                apiFullSports.delete(`imagem/${responsa.data._id}`)
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
                                            .then(response =>
                                                apiFullSports.request({
                                                    url: `atualizar-cliente/${parametros.id}`,
                                                    method: 'PUT',
                                                    data: {
                                                        cpf: cpf,
                                                        nome: nome,
                                                        dataNascimento: dataNascimento,
                                                        sexo: sexo,
                                                        cep: cep,
                                                        endereco: `${rua},${numero} -${complemento}- ${estado}, ${cidade}, ${bairro}`,
                                                        dataCadastro: dataAtual,
                                                        imagemPerfil: response.data._id
                                                    }
                                                })
                                                    .then(() => {
                                                        setSpinner(false)
                                                        // alert("cliente atualizado com suceso");
                                                        window.location.href = "/sig/consulta-de-clientes";
                                                    }).catch(erro => console.log(erro))
                                            ).catch(erro => console.log(erro))
                                    ).catch(erro => console.log(erro))

                            }).catch(erro => console.log(erro))
                        }
                    }).catch(erro => console.log(erro))

            }

        }
    }

    return (
        <>
            <Cabecalho />
            <Main>
                <ExibeTitulo id="exibe-titulo" className="exibe-titulo">Atualizar Cliente</ExibeTitulo>
                <FormCadastroCliente id="form-cliente" className="form-cliente">
                    <form action="#" method="post" onSubmit={aoSubmeterForm}>
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
                                value={cpf}
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
                                value={nome}
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
                                value={dataNascimento}
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
                            <label className="col-form-label">Atualizar Imagem de Perfil</label>
                            <input
                                onChange={selecionarArquivo}
                                className="txt-form"
                                id="imagemPerfil"
                                type="file"
                                name="file"
                                accept="image/jpeg, image/pjpeg, image/png, image/gif"
                            />
                            {spinner && (<p>carregando...</p>)}
                        </Row1grid>

                        <BttCadClienteGrid id="btt-cad-cliente-grid" className="btt-cad-cliente-grid">
                            <Button
                                sx={{
                                    justifyContent: 'center', display: 'block', height: '50px', borderRadius: '5px', color: '#fff',
                                    fontSize: '14px', backgroundColor: 'black', ":hover": 'backgroundColor: #313131, transform:translate(0.8s)'
                                }}
                                type="submit" id="btn-cad-forms" className="btn-cad-forms">
                                Atualizar Cliente
                            </Button>
                            <Button
                                onClick={evento => window.location.href = '/sig/consulta-de-clientes'}
                                sx={{
                                    justifyContent: 'center', display: 'block', height: '50px', borderRadius: '5px', color: '#fff',
                                    fontSize: '14px', backgroundColor: 'black', ":hover": 'backgroundColor: #313131, transform:translate(0.8s)'
                                }} type="button" id="btn-cad-forms" className="btn-cad-forms">
                                Consulta de Clientes
                            </Button>
                        </BttCadClienteGrid>
                    </form>
                </FormCadastroCliente>
            </Main>
        </>
    )
};
export default AtualizaCliente;
