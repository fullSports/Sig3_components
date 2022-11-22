import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './clients/Pages/Home';
import Acessibilidade from './clients/Pages/Acessibilidade';
import CadastroAdministrador from './admin/dashboard/Pages/Administrador/CadastrarAdministrador';
import Equipamentos from './clients/Pages/Equipamentos';
import PageErro404 from './Erro404';
import Tenis from './clients/Pages/Tenis';
import DashboardHome from './admin/dashboard/shared/Home';
import ConsultaAdimistrador from './admin/dashboard/Pages/Administrador/ConsultarAdministrador/index';
import AtualizarAdministrador from './admin/dashboard/Pages/Administrador/AtualizarAdministrador';
import CadastrarFornecedor from './admin/dashboard/Pages/Fornecedor/CadastrarFornecedor';
import ConsultarFornecedores from './admin/dashboard/Pages/Fornecedor/ConsultarFornecedores';
import AtualizarFornecedor from './admin/dashboard/Pages/Fornecedor/AtualizarFornecedor';
import CadastrarProduto from './admin/dashboard/Pages/Produtos/CadastrarProduto';
import ConsultaProduto from './admin/dashboard/Pages/Produtos/ConsultarProdutos';
import AtualizarProduto from './admin/dashboard/Pages/Produtos/AtualizarProduto';
import AutenticacaoAdmin from './admin/auth';
import { AuthContext } from './contexts/auth';

const App = () => {
  
  return (
    <BrowserRouter>
      
        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/acessibilidade' element={<Acessibilidade />} />

          <Route path='/equipamentos' element={<Equipamentos />} />

          <Route path='/tenis' element={<Tenis />} />

          {/* DASHBOARD */}
          <Route path='/dashboard/home' element={<DashboardHome />} />

          <Route path='/dashboard/login' element={<AutenticacaoAdmin />} />
          {/* crud Administrador */}
          <Route path='/dashboard/cadastrar-admin' element={<CadastroAdministrador />} />

          <Route path='/dashboard/consultar-admin' element={<ConsultaAdimistrador />} />

          <Route path='/dashboard/atualizar-admin/:id' element={<AtualizarAdministrador />} />

          {/* crud Fornecedor */}
          <Route path='/dashboard/cadastrar-fornecedor' element={<CadastrarFornecedor />} />

          <Route path='/dashboard/consultar-fornecedores' element={<ConsultarFornecedores />} />

          <Route path='/dashboard/atualizar-fornecedor/:id' element={<AtualizarFornecedor />} />

          {/* crud produto */}
          <Route path='/dashboard/cadastrar-produto' element={<CadastrarProduto />} />

          <Route path='/dashboard/consultar-produtos' element={<ConsultaProduto />} />

          <Route path='/dashboard/atualizar-produto/:id' element={<AtualizarProduto />} />
          {/****************************** */}
          <Route path='*' element={<PageErro404 />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
