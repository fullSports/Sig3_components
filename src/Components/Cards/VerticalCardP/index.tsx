import React from "react";
import './styles.css';
import '../../../styles.css'
// const imgPrd = require('../../../assets/images/produtos/produto-teste.png')

interface Props{
    src: string
    produtoName:string
    PrecoAnterior:string
    PrecoAtual:string
}
// const VerticalCardProduct = () =>{
const VerticalCardProduct: React.FC<Props> = ({src, produtoName,PrecoAnterior,PrecoAtual}) =>{
    return(
        <div className="Vcard-product">
            <a className='Vcard-link' href="#">
                <div className="card-cover">
                    <img src={src} alt="Imagem Teste" />
                </div>
                <div className="Vcard-body">
                    <span className="card-product-name"> {produtoName} </span>
                    <span className="card-old-price">de {PrecoAnterior}</span>
                    <div className="card-product-price-container">
                        <span className='Vprice-spec'>por </span>
                        <span className="card-product-price"> {PrecoAtual} </span>
                    </div>
                    {/* <span className="card-product-parce ml-24">Em até 6x sem juros</span> */}
                </div>
            </a>
        </div>
)}
export default VerticalCardProduct;