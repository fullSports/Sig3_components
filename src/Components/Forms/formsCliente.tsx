import React from "react";
import styled from "styled-components";
import { Button, TextField, FormControl, Select, InputLabel, MenuItem } from "@mui/material";

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
const FormsCliente = () => {
    const sexo = ['', 'M', 'F', 'O', 'Prefiro não dizer']
    // const aoSalvar = (evento) => {
    //     evento.preventDefault()
    //     alert('e')
    // }
    return (
        <FormCadastroCliente id="form-cadastro-cliente" className="form-cadastro-cliente">
            <form action="#" method="post" >
                <Row1grid id="row-1-grid" className="row-1-grid">
                    <label className="col-form-label">CPF</label>
                    <TextField
                        sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%'}}
                        className="txt-form"
                        label="cpf"
                        id="cpf"
                        type="text"
                        placeholder={'00.000.000-00'}
                        fullWidth

                    />

                    <label className="col-form-label">Nome do Produto</label>
                    <TextField
                        sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                        className="txt-form"
                        label="Nome do Produto"
                        id="nome"
                        type="text"
                        placeholder={'Digite seu nome'}
                        fullWidth

                    />

                    <label className="col-form-label">Data de Nascimento</label>
                    <TextField
                        sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                        className="txt-form"
                        label="Data de Nascimento"
                        id="data"
                        type="text"
                        placeholder={'__/__/____'}
                        fullWidth
                    />

                    <label className="col-form-label">Sexo</label>
                    <FormControl fullWidth margin="dense">
                        <InputLabel id="sexo" >Sexo</InputLabel>
                        <Select className="txt-form" labelId="sexo" sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}>
                            {sexo.map(item => <MenuItem className="txt-form" value={item}>
                                {item}
                            </MenuItem>)}
                        </Select>
                    </FormControl>

                    <label className="col-form-label">Cep</label>
                    <TextField
                        sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                        className="txt-form"
                        label="Cep"
                        id="cep"
                        type="text"
                        placeholder={'00000-000'}
                        fullWidth
                    />

                    <label className="col-form-label">Rua</label>
                    <TextField
                        sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                        className="txt-form"
                        label="Rua"
                        id="rua"
                        type="text"
                        placeholder={'Digite sua rua'}
                        fullWidth
                    />

                    <label className="col-form-label">Bairro</label>
                    <TextField
                        sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                        className="txt-form"
                        label="Bairro"
                        id="bairro"
                        type="text"
                        placeholder={'Digite seu Bairro'}
                        fullWidth
                    />

                    <label className="col-form-label">Estado</label>
                    <TextField
                        sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                        className="txt-form"
                        label="Estado"
                        id="estado"
                        type="text"
                        placeholder={'Digite seu estado'}
                        fullWidth
                    />

                    <label className="col-form-label">Cidade</label>
                    <TextField
                        sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                        className="txt-form"
                        label="Cidade"
                        id="cidade"
                        type="text"
                        placeholder={'Digite sua Cidade'}
                        fullWidth
                    />

                    <label className="col-form-label">Complemento</label>
                    <TextField
                        sx={{ boxSizing: 'border-box', margin: '0 0 15px', width: '100%' }}
                        className="txt-form"
                        label="Complemento"
                        id="complemento"
                        type="text"
                        placeholder={'casa/apartamento'}
                        fullWidth
                    />



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
                        Consulta de Cliente
                    </Button>
                </BttCadClienteGrid>
            </form>
        </FormCadastroCliente>
    )
};
export default FormsCliente;