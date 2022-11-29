import React, { useEffect, useState } from 'react';
import './styles.css';
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
import AutenticacaoAdmin from './auth';
import apiFullSports from './api/apiFullSports';
import { Button, Modal } from '@mui/material';
import { Box } from '@mui/system';
import CadastroCliente from './clients/Pages/cliente/cadastrarCliente';
import VizualizacaoDeProdutos from './clients/Pages/produto/vizualizarProdutos';
import ComprarProduto from './clients/Pages/produto/ComprarProduto';
import AtualizarCliente from './clients/Pages/cliente/AtualizarCliente';
const App = () => {
  const [open, setOpen] = useState(Boolean);
  const handleClose = () => {
    setOpen(false);
  };
  const user = JSON.parse(localStorage.getItem('user') as string)
  const avisoCookie = JSON.parse(localStorage.getItem('avisoCookie') as string)
  useEffect(() => {
    if (user) {
      apiFullSports.get(`listar-cliente/${user._id}`).then(resposta => {
        localStorage.removeItem("user");
        localStorage.setItem('user', JSON.stringify(resposta.data));
      })
    }
    if (avisoCookie) {
      setOpen(false)
    } else {
      setOpen(true)
    }
  }, [user, avisoCookie])
  if (user) {
    if (user.login.isAdmin) {
      {/*login admin */ }
      return <>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<AutenticacaoAdmin />} />
            {/* DASHBOARD */}
            <Route path='/dashboard/home' element={<DashboardHome />} />

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
            <Route path='/' element={<Home />} />

            <Route path='/acessibilidade' element={<Acessibilidade />} />

            <Route path='/equipamentos' element={<Equipamentos />} />

            <Route path='/tenis' element={<Tenis />} />

            <Route path='/produtos' element={<VizualizacaoDeProdutos />} />

            <Route path='/comprar-produto/:id' element={<ComprarProduto/>}/>
            {/****************************** */}
            <Route path='*' element={<PageErro404 />} />
          </Routes>
        </BrowserRouter>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          id="aviso-cookie">
            <div className="aviso-cookies">
              <span>Nós usamos cookies e outras tecnologias semelhantes para melhorar sua experiência em nossos serviços.</span>
              <button onClick={()=>{
                localStorage.setItem('avisoCookie', JSON.stringify('usando cookies'));
                handleClose();
              }} >OK</button>
            </div>

          {/* <Box component={"div"} id='div-menssagem-cookies' className="tela-imagem" sx={{
            width: '50%', height: '10%',
            position: 'absolute' as 'absolute', top: '85%', left: '30%', marginBottom: '10%', display: '',
            backgroundColor: '#4e4a4a', border: '3px solid #000', borderRadius: '20px', pt: 2, px: 4, pb: 3
          }}>
            <p>Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços.
              <Button
                onClick={() => {
                  localStorage.setItem('avisoCookie', JSON.stringify('usando cookies'));
                  handleClose();
                }}
              >Ok!</Button>
            </p>
          </Box> */}
        </Modal>
      </>
    } else {
      {/* login cliente */ }
      return <>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<AutenticacaoAdmin />} />

            <Route path='/' element={<Home />} />

            <Route path='/acessibilidade' element={<Acessibilidade />} />

            {/* <Route path='/equipamentos' element={<Equipamentos />} />

            <Route path='/tenis' element={<Tenis />} /> */}
            <Route path='/atualizar-cliente/:id' element={<AtualizarCliente />} />

            <Route path='/produtos' element={<VizualizacaoDeProdutos />} />
            
            <Route path='/comprar-produto/:id' element={<ComprarProduto/>}/>
            {/****************************** */}
            <Route path='*' element={<PageErro404 />} />
          </Routes>
        </BrowserRouter>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          id="aviso-cookie">
            <div className="aviso-cookies">
              <span>Nós usamos cookies e outras tecnologias semelhantes para melhorar sua experiência em nossos serviços.</span>
              <button onClick={()=>{
                localStorage.setItem('avisoCookie', JSON.stringify('usando cookies'));
                handleClose();
              }} >OK</button>
            </div>
          {/* <Box component={"div"} id='div-menssagem-cookies' className="tela-imagem" sx={{
            width: '50%', height: '10%',
            position: 'absolute' as 'absolute', top: '85%', left: '30%', marginBottom: '10%', display: '',
            backgroundColor: '#4e4a4a', border: '3px solid #000', borderRadius: '20px', pt: 2, px: 4, pb: 3
          }}>
            <p>Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços.<Button
              onClick={() => {
                localStorage.setItem('avisoCookie', JSON.stringify('usando cookies'));
                handleClose();
              }}
            >Ok!</Button></p>

          </Box> */}
        </Modal>
      </>
    }
  } else {
    {/*nao logado */ }
    return <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<AutenticacaoAdmin />} />

          <Route path='/' element={<Home />} />

          <Route path='/acessibilidade' element={<Acessibilidade />} />

          <Route path='/equipamentos' element={<Equipamentos />} />

          <Route path='/tenis' element={<Tenis />} />

          <Route path='/cadastrar-cliente' element={<CadastroCliente />} />

          <Route path='/produtos' element={<VizualizacaoDeProdutos />} />
          
          <Route path='/comprar-produto/:id' element={<ComprarProduto/>}/>
          {/****************************** */}
          <Route path='*' element={<PageErro404 />} />
        </Routes>
      </BrowserRouter>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        id="aviso-cookie"
        className="cookies-container">
          <div className="aviso-cookies">
              <span>Nós usamos cookies e outras tecnologias semelhantes para melhorar sua experiência em nossos serviços.</span>
              <button onClick={()=>{
                localStorage.setItem('avisoCookie', JSON.stringify('usando cookies'));
                handleClose();
              }} >OK</button>
            </div>
        {/* <Box component={"div"} id='div-menssagem-cookies' className="tela-imagem" sx={{
          width: '60%', height: '10%',
          position: 'absolute' as 'absolute', top: '85%', left: '25%', marginBottom: '10%', display: '',
          backgroundColor: '#4e4a4a', border: '3px solid #000', borderRadius: '20px', pt: 2, px: 4, pb: 3
        }}>
          <p>Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços.<Button
            onClick={() => {
              localStorage.setItem('avisoCookie', JSON.stringify('usando cookies'));
              handleClose();
            }}
          >Ok!</Button></p>
        </Box> */}
      </Modal>
    </>
  }


}

export default App;
