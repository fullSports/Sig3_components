import React from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './clients/Pages/Home';
import Acessibilidade from './clients/Pages/Acessibilidade';
import CadastroAdministrador from './admin/dashboard/Pages/Administrador/CadastrarAdministrador';
import Equipamentos from './clients/Pages/Equipamentos';
import PageErro404 from './Erro404';
import Tenis from './clients/Pages/Tenis';
import DashboardHome from './admin/dashboard';
import ConsultaAdimistrador from './admin/dashboard/Pages/Administrador/ConsultarAdministrador/index';
import AtualizarAdministrador from './admin/dashboard/Pages/Administrador/AtualizarAdministrador';
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
