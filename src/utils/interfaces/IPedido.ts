import ICliente from './ICliente';
import IProduto from './IProduto';

export default interface IPedido {
	_id: string;
	quantidadePedido: number;
	produto: IProduto;
	cliente: ICliente;
	total: number;
}
