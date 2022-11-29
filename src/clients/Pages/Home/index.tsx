import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderVerticalCards, sliderHorizontalCards } from '../../../utils/SliderSettings';
import styled from "styled-components";
import './styles.css';
import '../../../styles.css';
import Footer from '../../Components/Footer';
import Cabecalho from "../../Components/Menu/Header";
import VerticalCardProduct from "../../Components/Cards/VerticalCardP/index";
import HorizontalCardProduct from '../../Components/Cards/HorizontalCardP';
import HomeHeader from '../../Components/Menu/Home Header';
// import { render } from "@testing-library/react";
import IProduto from '../../../utils/interfaces/IProduto';
import apiFullSports from '../../../api/apiFullSports';
// import ICacados from '../../../utils/interfaces/Produtos/ICalcados';
// import IEquipamentos from '../../../utils/interfaces/Produtos/IEquipamentos';
import IRoupa from '../../../utils/interfaces/Produtos/IRoupa';
// import ISuplementos from '../../../utils/interfaces/Produtos/ISuplementos';
const tenisBanner = require('../../../assets/images/banners/transparent-shoes-banner.png');
const roupasBanner = require('../../../assets/images/banners/transparent-clothes-banner.png');

const Grid = styled.div`
    margin: 40px 10px 40px 40px;
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 15px;
`;
const Home = () => {
    //Exemplo de requisição por categorias

    const [spinner, setSpinner] = useState(false);
    const [produtos, setProdutos] = useState<IProduto[]>([]);

    useEffect(() => {
        setSpinner(true)
        apiFullSports.get<IProduto[]>('listar-produtos/')
            .then(response => {
                setSpinner(false)
                setProdutos(response.data);
            }).catch((err) => { console.log(err) });
    }, [])

    return (
        <>
            <HomeHeader />
            <div className='body-container'>
                <div className="sec-container">
                    <div className="product-container">
                        <div className="product-banner">
                            <img src={tenisBanner} alt="" />
                        </div>
                    </div>
                </div>
                
                <div className="sec-container">
                    <div className="product-container">
                        <div className="product-banner">
                            <img src={roupasBanner} alt="" />
                        </div>
                        {/* <div className="cards-container overflow-x-auto"> */}
                        <div className="Hcard-container">
                            <Slider {...sliderHorizontalCards}>
                                {produtos.map(item => {
                                    if (item.categoriaProduto.roupa !== undefined) {
                                        var newPrecoProduto = parseFloat(item.categoriaProduto.roupa.preco.replace(',', '.'));
                                        var parcela = newPrecoProduto / 12;
                                        var newParcela = parcela.toFixed(2);
                                        return <HorizontalCardProduct
                                            tamanho={item.categoriaProduto.roupa.tamanho}
                                            produtoID={item._id}
                                            nome={item.categoriaProduto.roupa.nome}
                                            preco={item.categoriaProduto.roupa.preco}
                                            precoParcelado={newParcela.toString().replace(".", ",")}
                                            src={item.categoriaProduto.roupa.imagemProduto[0].url}
                                        />
                                    } else {
                                        return <>
                                        </>
                                    }
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Home;