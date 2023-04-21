export default interface IRESRealizarLogin {
	data: {
		result: object;
		emailExists: boolean;
		emailAndPassword: boolean;
		messagem: string;
	};
}
