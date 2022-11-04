import Iimagem from "./Iimagem"
export default interface ICliente{
    _id: string
    cpf: string
    nome: string
    dataNascimento: string
    sexo: string
    cep: string
    endereco: string
    dataCadastro: string
    imagemPerfil: Iimagem
}