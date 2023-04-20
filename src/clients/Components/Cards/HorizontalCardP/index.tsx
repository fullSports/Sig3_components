import './styles.css';
import '../../../../../src/styles.css';
interface Props{
    nome: string,
    preco: string,
    precoParcelado: string,
    src: string,
    produtoID: string,
    tamanho: number
}
const HorizontalCardProduct: React.FC<Props> = ({tamanho,produtoID,nome,preco,src,precoParcelado}) => {
    return(
        <div className="Hcard-product">
            <a href={`/comprar-produto/${produtoID}`} className="Hcard-link">
                <div className="Hcard-cover">
                    <img src={src} alt="imagem do produto" />
                </div>
                <div className="Hcard-body">
                    <div className="Hcard-product-spec">
                        <span className="card-product-name">{nome}</span>
                        <span className="card-old-price"></span>
                        <span className="card-product-price">R$ {preco}</span>    
                        <span className="card-product-parce">12x de R${precoParcelado}</span>    
                    </div>
                    <span className="card-product-price">tamanho: {tamanho}</span>
                </div>
            </a>
        </div>
    )
}

export default HorizontalCardProduct;