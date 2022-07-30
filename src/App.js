import React from "react";
import "./css/estiloLoja.css"

import Cabecalho from "./Components/Cabecalho/index";
import Conteudo from "./Components/Conteudo/index";
import Footer from "./Components/Footer";

function App() {
  return(
    <body>
      <Cabecalho/>
      <Conteudo/>
      <Footer/>
    </body>
  );
}
export default App;

