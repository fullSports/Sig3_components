import './styles.css';
import '../../../../src/styles.css';
const imgPrd = require('../../../assets/images/produtos/produto-teste.png')

const HorizontalCardProduct = () => {
    return(
        <div className="Hcard-product">
            <a href="#" className="Hcard-link">
                <div className="Hcard-cover">
                    <img src={imgPrd} alt="" />
                </div>
                <div className="Hcard-body">
                    <div className="Hcard-product-spec">
                        <span className="card-product-name">Produto Name</span>
                        <span className="card-old-price">de R$90,90</span>
                        <span className="card-product-price">R$80,90</span>    
                        <span className="card-product-parce ml-12 mt-2">em até 12x de valor</span>    
                    </div>
                </div>
            </a>
        </div>
    )
}

export default HorizontalCardProduct;