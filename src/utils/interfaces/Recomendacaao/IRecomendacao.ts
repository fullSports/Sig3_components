import ICliente from '../ICliente';

export default interface IRecomendacao {
	_id: string;
	user: ICliente;
	click_calcados: number;
	click_suplementos: number;
	click_roupas: number;
	click_equipamentos: number;
}
