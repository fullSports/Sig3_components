import {useRef} from 'react';
import './styles.css';
import './../../styles.css';
import Footer from "../../Components/Footer";
import Cabecalho from "../../Components/Menu/Header";

const imgPrd = require('../../assets/images/produtos/produto-teste.png');

const Home = () => {

    // const carouselCards = useRef(null);

    // const scrollLeft = (e: any) => {
    //     e.preventDefault();
    //     carouselCards.current.scrollLeft += carouselCards.current.offsetWidth;
    // }

    return (
        <>
        <Cabecalho />
            <div className='body-container'>
                <h6 className="section-title">Ofertas da Semana</h6>
                <div className="ofertas-container overflow-x-auto">
                    <div className="cards-container">

                        <div className="card-product">
                        <a className='card-link' href="">
                            <div className="card-cover">
                                <img src={imgPrd} alt="Produto Teste" />
                            </div>
                            <div className="card-body">
                                <span className="card-prd-title">Tênis Esportivo</span>
                                <span className="old-price">de R$20,00</span>
                                <div className="product-price-container">
                                    <span className='price-spec'>por </span>
                                    <span className="product-price">R$99,99</span>
                                </div>
                                <span className="product-parce">Em até 6x sem juros</span>
                            </div>
                        </a>
                        </div>

                        <div className="card-product">
                        <a className='card-link' href="">
                            <div className="card-cover">
                                <img src={imgPrd} alt="Produto Teste" />
                            </div>
                            <div className="card-body">
                                <span className="card-prd-title">Tênis Esportivo</span>
                                <span className="old-price">de R$20,00</span>
                                <div className="product-price-container">
                                    <span className='price-spec'>por </span>
                                    <span className="product-price">R$99,99</span>
                                </div>
                                <span className="product-parce">Em até 6x sem juros</span>
                            </div>
                        </a>
                        </div>

                        <div className="card-product">
                        <a className='card-link' href="">
                            <div className="card-cover">
                                <img src={imgPrd} alt="Produto Teste" />
                            </div>
                            <div className="card-body">
                                <span className="card-prd-title">Tênis Esportivo</span>
                                <span className="old-price">de R$20,00</span>
                                <div className="product-price-container">
                                    <span className='price-spec'>por </span>
                                    <span className="product-price">R$99,99</span>
                                </div>
                                <span className="product-parce">Em até 6x sem juros</span>
                            </div>
                        </a>
                        </div>

                        <div className="card-product">
                        <a className='card-link' href="">
                            <div className="card-cover">
                                <img src={imgPrd} alt="Produto Teste" />
                            </div>
                            <div className="card-body">
                                <span className="card-prd-title">Tênis Esportivo</span>
                                <span className="old-price">de R$20,00</span>
                                <div className="product-price-container">
                                    <span className='price-spec'>por </span>
                                    <span className="product-price">R$99,99</span>
                                </div>
                                <span className="product-parce">Em até 6x sem juros</span>
                            </div>
                        </a>
                        </div>

                        <div className="card-product">
                        <a className='card-link' href="">
                            <div className="card-cover">
                                <img src={imgPrd} alt="Produto Teste" />
                            </div>
                            <div className="card-body">
                                <span className="card-prd-title">Tênis Esportivo</span>
                                <span className="old-price">de R$20,00</span>
                                <div className="product-price-container">
                                    <span className='price-spec'>por </span>
                                    <span className="product-price">R$99,99</span>
                                </div>
                                <span className="product-parce">Em até 6x sem juros</span>
                            </div>
                        </a>
                        </div>

                        <div className="card-product">
                        <a className='card-link' href="">
                            <div className="card-cover">
                                <img src={imgPrd} alt="Produto Teste" />
                            </div>
                            <div className="card-body">
                                <span className="card-prd-title">Tênis Esportivo</span>
                                <span className="old-price">de R$20,00</span>
                                <div className="product-price-container">
                                    <span className='price-spec'>por </span>
                                    <span className="product-price">R$99,99</span>
                                </div>
                                <span className="product-parce">Em até 6x sem juros</span>
                            </div>
                        </a>
                        </div>

                        <div className="card-product">
                        <a className='card-link' href="">
                            <div className="card-cover">
                                <img src={imgPrd} alt="Produto Teste" />
                            </div>
                            <div className="card-body">
                                <span className="card-prd-title">Tênis Esportivo</span>
                                <span className="old-price">de R$20,00</span>
                                <div className="product-price-container">
                                    <span className='price-spec'>por </span>
                                    <span className="product-price">R$99,99</span>
                                </div>
                                <span className="product-parce">Em até 6x sem juros</span>
                            </div>
                        </a>
                        </div>

                        <div className="card-product">
                        <a className='card-link' href="">
                            <div className="card-cover">
                                <img src={imgPrd} alt="Produto Teste" />
                            </div>
                            <div className="card-body">
                                <span className="card-prd-title">Tênis Esportivo</span>
                                <span className="old-price">de R$20,00</span>
                                <div className="product-price-container">
                                    <span className='price-spec'>por </span>
                                    <span className="product-price">R$99,99</span>
                                </div>
                                <span className="product-parce">Em até 6x sem juros</span>
                            </div>
                        </a>
                        </div>

                    </div>
                </div>
                <div className="carousel-controls">
                    <button >Left</button>
                    <button >Right</button>
                </div>
            </div>
        {/* <Footer /> */}
        </>
    );
}
export default Home;