import React from "react";
import './styles.css';
import '../../../../styles.css';
interface Props {
    src: string
    produtoName: string
    PrecoAnterior: string
    PrecoAtual: string,
    produtoId: string,
    precoParcelado: string,
    tamanho: number
}
// const VerticalCardProduct = () =>{
const VerticalCardProduct: React.FC<Props> = ({tamanho, precoParcelado,produtoId, src, produtoName, PrecoAnterior, PrecoAtual }) => {
    return (
        <div className="Vcard-product">
            <a className='Vcard-link' href={`/comprar-produto/${produtoId}`}>
                <div className="card-cover">
                    <img src={src} alt="Imagem Teste" />
                </div>
                <div className="Vcard-body">
                    <span className="card-product-name"> {produtoName} </span>
                    <span className="card-old-price">{PrecoAnterior}</span>
                    <div className="card-product-price-container">
                        <span className="card-product-price"> R${PrecoAtual} </span>
                        <span className="card-product-parce">12x de R${precoParcelado}</span>
                    </div>
                    <span className="card-product-price">tamanho: {tamanho.toString()}</span>
                    {/* <span className="card-product-parce ml-24">Em até 6x sem juros</span> */}
                </div>
            </a>
        </div>
    )
}
export default VerticalCardProduct;