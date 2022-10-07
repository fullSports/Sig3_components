import React from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Acessibilidade from './Pages/Acessibilidade';
import AtualizaCliente from './Pages/Clientes/AtualizarCliente';
import CadastroCliente from './Pages/Clientes/CadastroDeCliente/';
import ConsultaCliente from './Pages/Clientes/ConsultarCliente';
import Equipamentos from './Pages/Equipamentos';
import PageErro404 from './Pages/Erro404';
import AtualizaProduto from './Pages/Produto/AtualizarProduto';
import CadastrarProduto from './Pages/Produto/CadastroDeProduto';
import ConsultaProduto from './Pages/Produto/ConsultaDeProduto';
import Tenis from './Pages/Tenis';
const App = ()=> {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route  path='/' element={<Home/>} />

      <Route path='/sig/cadastro-de-cliente' element={<CadastroCliente/>}/>

      <Route path='/sig/cadastro-de-produto' element={<CadastrarProduto/>}/>
      
      <Route path='/sig/consulta-de-clientes' element={<ConsultaCliente/>}/>

      <Route path='/sig/consulta-de-produtos' element={<ConsultaProduto/>}/>

      <Route path='/sig/atualizar-cliente' element={<AtualizaCliente/>}/>

      <Route path='/sig/atualizar-produto' element={<AtualizaProduto/>}/>

      <Route path='/acessibilidade' element={<Acessibilidade/>}/>

      <Route path='/equipamentos' element={<Equipamentos/>}/>

      <Route path='/tenis' element={<Tenis/>}/>
      
      <Route path='*' element={<PageErro404/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
