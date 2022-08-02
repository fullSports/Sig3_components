import React from "react";
//import "./css/estiloLoja.css"
import Home from "./Components/Pages/index";
import Acessibilidade from "./Components/Pages/acessibilidade";
import Equipamentos from "./Components/Pages/equipamentos";
import Tenis from "./Components/Pages/tenis";
function App() {
  //Mapeamento de rotas
  const location = window.location.pathname
  if(location==='/'){
    return <Home/>
  }
  if(location==='/acessibilidade'){
    return <Acessibilidade/>
  }
  if(location==='/equipamentos'){
    return <Equipamentos/>
  }
  if(location==='/tenis'){
    return <Tenis/>
  }
  
  return(
    <body>
      <Home/>
      <Acessibilidade />
      <Equipamentos />
      <Tenis/>
    </body>
  );
}
export default App;

