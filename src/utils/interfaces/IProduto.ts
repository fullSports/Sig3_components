import ICacados from './Produtos/ICalcados';
import IEquipamentos from './Produtos/IEquipamentos';
import IRoupa from './Produtos/IRoupa';
import ISuplementos from './Produtos/ISuplementos';

export default interface IProduto {
	categoriaProduto: {
		roupa: IRoupa;
		equipamento: IEquipamentos;
		suplemento: ISuplementos;
		calcado: ICacados;
	};
	_id: string;
	dataCadastro: string;
}
