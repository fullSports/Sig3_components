import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./Components/UI/temas";

import Cabecalho from "./Components/Cabecalho";
import Conteudo from "./Components/Conteudo";
import Footer from "./Components/Footer";
function App() {
  return(
    <>
    <Cabecalho/>
    <Conteudo />  
    <Footer/>
      </>
  );

}

export default App;