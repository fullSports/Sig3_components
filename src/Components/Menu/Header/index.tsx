import * as React from "react";
import './styles.css';
import '../../../styles.css';
import NavItems from "./index";

// const Botao = () => {
//   document.querySelector('.menu-lateral')?.classList.toggle('menu-lateral--ativo');
//   document.querySelector('.form-cadastro-cliente')?.classList.toggle('forms-none');
//   document.querySelector('.form-cadastro-produto')?.classList.toggle('forms-none');
// }
const Cabecalho = () => {
  return (
    <div className="header-container">
      <div className="header-items">

      </div>
      <div className="header-nav">
        <NavItems/>
      </div>
    </div>
  );
}
export default Cabecalho;

