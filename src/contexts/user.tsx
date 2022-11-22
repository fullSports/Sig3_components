import React,{createContext} from "react";
import ICliente from "../utils/interfaces/ICliente";

const User: React.FC<ICliente> = ({_id,cpf,nome,login,dataNascimento,sexo,cep,endereco,dataCadastro,imagemPerfil,isLogin}) =>{

    return <>
    {_id = _id}
    {cpf = cpf}
    {nome=nome}
    {login = login}
    {dataNascimento = dataNascimento}
    {sexo = sexo}
    {cep = cep}
    {endereco = endereco}
    {dataCadastro = dataCadastro}
    {imagemPerfil =imagemPerfil}
    {isLogin = isLogin}
    </>

}
export default User