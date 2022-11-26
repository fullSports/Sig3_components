import './../../../styles.css';
import DashboardHeader from "../../../Components/Header";
import DashboardSidenav from "../../../Components/Sidenav";
import TabelaProduto from "./tabela";

const ConsultaProduto = () => {

    return (
        <>
            <div className="flex">
                <DashboardSidenav/>
                <div id="main" className="page-body">
                    <DashboardHeader/>
                    <div className="table-container">
                        <div className="table-title">
                            <span className="consulta-titulo">Lista de Produtos</span>
                        </div>
                        <div className="panel-table">
                            <table className="table-consulta">
                                <thead>
                                    <tr>
                                        <th>CNPJ do Fornecedor</th>
                                        <th>Nome</th>
                                        <th>Categoria</th>
                                        <th>Sexo alvo</th>
                                        <th>Cor</th>
                                        <th>Preço</th>
                                        <th>Dt.Cadastro</th>
                                        <th>Qtd.Estoque</th>
                                        <th>1º ImagemProduto</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <TabelaProduto />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ConsultaProduto