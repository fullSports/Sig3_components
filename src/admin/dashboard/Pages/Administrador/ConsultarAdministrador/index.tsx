import DashboardHeader from '../../../Components/Header';
import DashboardSidenav from '../../../Components/Sidenav';
import TabelaAdimistrador from './tabela';

const ConsultaAdimistrador = () => {
	return (
		<>
			<div className="flex">
				<DashboardSidenav />
				<div id="main" className="page-body">
					<DashboardHeader />
					<div className="table-container">
						<div className="table-title">
							<span className="consulta-titulo">Lista de Administradores</span>
						</div>
						<div className="panel-table">
							<table className="table-consulta">
								<thead>
									<tr>
										<th>foto de perfil</th>
										{/* <th>Data de Cadastro</th> */}
										<th>CPF</th>
										<th>Nome</th>
										<th>Dt. Nascimento</th>
										<th>Sexo</th>
										<th>CEP</th>
										<th>Endereço</th>
									</tr>
								</thead>
								<tbody>
									<TabelaAdimistrador />
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ConsultaAdimistrador;
