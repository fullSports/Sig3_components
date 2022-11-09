import { useState, useEffect } from 'react';
import React from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { sliderVerticalCards, sliderHorizontalCards } from '../../utils/SliderSettings'

import './styles.css';
import './../../styles.css';
import Footer from "../../Components/Footer";
import Cabecalho from "../../Components/Menu/Header";
import VerticalCardProduct from "../../Components/Cards/VerticalCardP/index"
import HorizontalCardProduct from '../../Components/Cards/HorizontalCardP';
import { render } from "@testing-library/react";
import IProduto from '../../utils/interfaces/IProduto';
import apiFullSports from '../../api/apiFullSports';


const Home = () => {

    const [ loading, setLoading ] = React.useState(false);
    const [ produtos, setProdutos ] = React.useState<IProduto[]>([]);

    useEffect(() => {
        setLoading(true)
        apiFullSports.get<IProduto[]>('listar-produtos/')
        .then(response => {
            setProdutos(response.data);
        setLoading(false)
        })
            .catch((e) =>{
                console.log(e)
        })
    })

    return (
        <>
        <Cabecalho />
            <div className='body-container'>
                <div className="sec-container">
                    <h6 className="section-title">Ofertas da Semana</h6>
                    <Slider {...sliderVerticalCards}>
                        {
                            produtos.map(item => 
                            <VerticalCardProduct 
                                src={item.imagemProduto[0].url}
                                produtoName={item.nomeProduto}
                                PrecoAnterior={'R$80,90'}
                                PrecoAtual={item.preco}
                            />
                            )
                        }
                    </Slider>
                </div>

                <div className="sec-container">
                    <h6 className="section-title">Placeholder Title</h6>
                    {/* <div className="cards-container overflow-x-auto"> */}
                    <div className="Hcard-container">
                        <Slider {...sliderHorizontalCards}>
                            <HorizontalCardProduct/>
                            <HorizontalCardProduct/>
                            <HorizontalCardProduct/>
                            <HorizontalCardProduct/>
                            <HorizontalCardProduct/>
                            <HorizontalCardProduct/>
                            <HorizontalCardProduct/>
                            <HorizontalCardProduct/>
                        </Slider>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        {/* <Footer /> */}
        </>
    );
}
export default Home;