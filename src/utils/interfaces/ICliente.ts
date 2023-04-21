import Iimagem from './Iimagem';
import ILogin from './ILogin';
export default interface ICliente {
	_id: string;
	cpf: string;
	nome: string;
	login: ILogin;
	dataNascimento: string;
	sexo: string;
	cep: string;
	endereco: string;
	dataCadastro: Date;
	imagemPerfil: Iimagem;
}
