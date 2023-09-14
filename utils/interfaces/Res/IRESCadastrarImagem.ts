export default interface IRESCadastrarImagem {
	data: {
		messsagem: string;
		image: {
			_id: string;
			size: string;
			key: string;
			url: string;
			createAt: Date;
		};
	};
}
