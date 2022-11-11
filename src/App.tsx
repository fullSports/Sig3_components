import React from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Acessibilidade from './Pages/Acessibilidade';
import CadastroAdministrador from './admin/dashboard/Administrador/CadastrarAdministrador';
import Equipamentos from './Pages/Equipamentos';
import PageErro404 from './Pages/Erro404';
import Tenis from './Pages/Tenis';
import DashboardHome from './admin/dashboard';
import ConsultaAdimistrador from './admin/dashboard/Administrador/ConsultarAdministrador/index';
import AtualizarAdministrador from './admin/dashboard/Administrador/AtualizarAdministrador';
const App: React.FC = ()=> {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route  path='/' element={<Home/>} />

      <Route path='/acessibilidade' element={<Acessibilidade/>}/>

      <Route path='/equipamentos' element={<Equipamentos/>}/>

      <Route path='/tenis' element={<Tenis/>}/>



      {/* DASHBOARD */}
      <Route path='/dashboard/home' element={<DashboardHome/>}/>
      <Route path='/dashboard/cadastrar-admin' element={<CadastroAdministrador/>}/>
      <Route path='/dashboard/consulta-admin' element={<ConsultaAdimistrador/>}/>
      
      <Route path='/dashboard/atualizar-admin/:id' element={<AtualizarAdministrador/>}/>  
      {/****************************** */}
      <Route path='*' element={<PageErro404/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
