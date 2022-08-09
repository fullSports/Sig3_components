import React from "react";
import Home from "./Components/Pages/index";
import Acessibilidade from "./Components/Pages/acessibilidade";
import Equipamentos from "./Components/Pages/equipamentos";
import Tenis from "./Components/Pages/tenis";
import CadastrarCliente from "./Components/Pages/cadastrarCliente";

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
  if(location==='/sig/cadastro-cliente'){
    return <CadastrarCliente/>;
  }
}

export default App;

