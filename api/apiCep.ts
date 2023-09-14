import axios from 'axios';

const ApiCep = axios.create({
	baseURL: 'https://brasilapi.com.br/api/cep/v1/',
	headers: {
		'content-type': 'application/json;charset=utf-8',
	},
});
ApiCep.defaults.headers.post['Acess-Control-Allow-Origin'] = '*';
export default ApiCep;
