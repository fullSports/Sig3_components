import React from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Acessibilidade from './Pages/Acessibilidade';
import AtualizaCliente from './admin/dashboard/Atualizacoes/AtualizarCliente';
import CadastroCliente from './admin/dashboard/Cadastros/Clientes/CadastroDeCliente';
import CadastroAdministrador from './admin/dashboard/Cadastros/Administrador';
import ConsultaCliente from './admin/dashboard/Cadastros/Clientes/ConsultarCliente';
import Equipamentos from './Pages/Equipamentos';
import PageErro404 from './Pages/Erro404';
import AtualizaProduto from './admin/dashboard/Atualizacoes/AtualizarProduto';
import CadastrarProduto from './admin/dashboard/Cadastros/Produto/CadastroDeProduto';
import ConsultaProduto from './admin/dashboard/Consultas/ConsultaDeProduto';
import Tenis from './Pages/Tenis';
import CadastrarFornecedor from './admin/dashboard/Cadastros/Fornecedor/CadastrarFornecedor';
import ConsultaFornecedor from './admin/dashboard/Consultas/ConsultarFornecedor';
import AtualizarFornecedor from './admin/dashboard/Cadastros/Fornecedor/AtualizarFornecedor';
import ConsultaAdimistrador from './admin/dashboard/Consultas/Administrador';
import DashboardHome from './admin/dashboard';
const App: React.FC = ()=> {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route  path='/' element={<Home/>} />

      <Route path='/sig/cadastro-de-cliente' element={<CadastroCliente/>}/>

      <Route path='/sig/cadastro-de-produto' element={<CadastrarProduto/>}/>
      
      <Route path='/sig/consulta-de-clientes' element={<ConsultaCliente/>}/>

      <Route path='/sig/consulta-de-produtos' element={<ConsultaProduto/>}/>

      <Route path='/sig/atualizar-cliente/:id' element={<AtualizaCliente/>}/>

      <Route path='/sig/atualizar-produto/id' element={<AtualizaProduto/>}/>

      <Route path='/sig/cadastro-de-fornecedor' element={<CadastrarFornecedor/>}/>

      <Route path='/sig/consulta-de-fornecedores' element={<ConsultaFornecedor/>}/>

      <Route path='/sig/atualizar-fornecedor/:id' element={<AtualizarFornecedor />} />

      <Route path='/acessibilidade' element={<Acessibilidade/>}/>

      <Route path='/equipamentos' element={<Equipamentos/>}/>

      <Route path='/tenis' element={<Tenis/>}/>

      {/* DASHBOARD */}
      <Route path='/dashboard/home' element={<DashboardHome/>}/>
      <Route path='/dashboard/cadastrar-admin' element={<CadastroAdministrador/>}/>
      <Route path='/dashboard/consulta-admin' element={<ConsultaAdimistrador/>}/>
      
      <Route path='*' element={<PageErro404/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
