import React from "react";
import Home from "./Components/Pages/index";
import Acessibilidade from "./Components/Pages/acessibilidade";
import Equipamentos from "./Components/Pages/equipamentos";
import Tenis from "./Components/Pages/tenis";
import CadastrarCliente from "./Components/Pages/Cliente/cadastrarCliente";
import ConsultaCliente from "./Components/Pages/Cliente/consultaCliente";

function App() {
  const location = window.location.pathname
  if(location==='/'){
    return <Home/>;
  }
  if(location==='/acessibilidade'){
    return <Acessibilidade/>
  }
  if(location==='/equipamentos'){
    return <Equipamentos/>;
  }
  if(location==='/tenis'){
    return <Tenis/>;
  }
  if(location==='/sig/cadastro-de-cliente'){
    return <CadastrarCliente/>;
  }
  if(location==='/sig/consulta-de-cliente'){
    return <ConsultaCliente />
  }
}

export default App;

