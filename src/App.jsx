import React from "react";
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Home from "./Components/Pages/index";
import Acessibilidade from "./Components/Pages/acessibilidade";
import Equipamentos from "./Components/Pages/equipamentos";
import Tenis from "./Components/Pages/tenis";
import CadastrarCliente from "./Components/Pages/Cliente/cadastrarCliente";
import ConsultaCliente from "./Components/Pages/Cliente/consultaCliente";
import CadastrarProduto from "./Components/Pages/Produtos/cadastrarProduto";
import ConsultaProduto from "./Components/Pages/Produtos/consultarProduto";
import PageErro404 from './Components/Pages/Erro404'
import AtualizaCliente from "./Components/Pages/Cliente/atualizarCliente";
import AtualizaProdutos from "./Components/Pages/Produtos/atualizarProduto";
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