import React from "react";
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Home from "./Pages/index";
import Acessibilidade from "./Pages/acessibilidade";
import Equipamentos from "./Pages/equipamentos";
import Tenis from "./Pages/tenis";
import CadastrarCliente from "./Pages/Cliente/cadastrarCliente";
import ConsultaCliente from "./Pages/Cliente/consultaCliente";
import CadastrarProduto from "./Pages/Produtos/cadastrarProduto";
import ConsultaProduto from "./Pages/Produtos/consultarProduto";
import PageErro404 from "./Pages/Erro404"
import AtualizaCliente from "./Pages/Cliente/atualizarCliente";
import AtualizaProdutos from "./Pages/Produtos/atualizarProduto";
function App() {
    return( 
      <>
      <BrowserRouter>
      <Routes>
        <Route exact path='/'  element={<Home/>} />
  
        <Route path='/acessibilidade' element={<Acessibilidade/>} />

        <Route path='/equipamentos' element={<Equipamentos/>} />
  
        <Route path='/tenis' element={<Tenis/>}/>
  
        <Route path='/sig/cadastro-de-cliente' element={<CadastrarCliente/>}/>
  
        <Route path='/sig/consulta-de-cliente' element={<ConsultaCliente />}/>


        <Route path='/sig/cadastro-de-produto' element={<CadastrarProduto />}/>
  
        <Route path='/sig/consulta-de-produtos' element={<ConsultaProduto />}/>

        <Route path='/sig/atualizar-cliente' element={<AtualizaCliente />} />

        <Route path='/sig/atualizar-produto' element={<AtualizaProdutos/>}/>

        <Route  path="*" element={<PageErro404/>}/>
      </Routes>
  </BrowserRouter>
 
  </>
)}
export default App;