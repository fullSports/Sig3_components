import React,{  useEffect,useState } from 'react';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { sliderVerticalCards, sliderHorizontalCards } from '../../../utils/SliderSettings'

import './styles.css';
import '../../../styles.css';
import Footer from '../../Components/Footer';
import Cabecalho from "../../Components/Menu/Header";
import VerticalCardProduct from "../../Components/Cards/VerticalCardP/index"
import HorizontalCardProduct from '../../Components/Cards/HorizontalCardP';
import HomeHeader from '../../Components/Menu/Home Header';
// import { render } from "@testing-library/react";
// import IProduto from '../../../utils/interfaces/IProduto';
// import apiFullSports from '../../../api/apiFullSports';
// import ICacados from '../../../utils/interfaces/Produtos/ICalcados';
// import IEquipamentos from '../../../utils/interfaces/Produtos/IEquipamentos';
// import IRoupa from '../../../utils/interfaces/Produtos/IRoupa';
// import ISuplementos from '../../../utils/interfaces/Produtos/ISuplementos';


const Home = () => {
    //Exemplo de requisição por categorias

    // const [ loading, setLoading ] = useState(false);
    // const [ produtos, setProdutos ] = useState<IProduto[]>([]);

    // const [produtosCacados,setProdutosCacados] = useState<ICacados[]>([]);
    // const [produtosEquipamentos, setProdutosEquipamentos] = useState<IEquipamentos[]>([]);
    // const [produtosRoupas,setProdutosRoupas] = useState<IRoupa[]>([]);
    // const [produtosSuplementos,setProdutosSuplementos] = useState<ISuplementos[]>([]);

    // useEffect(() => {
    //     setLoading(true)
    //     apiFullSports.get<IProduto[]>('listar-produtos/')
    //     .then(response => {
    //         setProdutos(response.data);
    //     }).catch((err) =>{console.log(err)});

    //     apiFullSports.get<ICacados[]>('listar-calcados/')
    //     .then(response => {
    //         setProdutosCacados(response.data);
    //     }).catch((err) =>{console.log(err)});
        
    //     apiFullSports.get<IEquipamentos[]>('listar-equipamentos/')
    //     .then(response => {
    //         setProdutosEquipamentos(response.data);
    //     }).catch((err) =>{console.log(err)});
        
    //     apiFullSports.get<IRoupa[]>('listar-roupas/')
    //     .then(response => {
    //         setProdutosRoupas(response.data);
    //     }).catch((err) =>{console.log(err)});

    //     apiFullSports.get<ISuplementos[]>('listar-suplementos/')
    //     .then(response => {
    //         setProdutosSuplementos(response.data);
    //     }).catch((err) =>{console.log(err)});
    // },[])
    
    return (
        <>
        <HomeHeader />
            <div className='body-container'>
                <div className="sec-container">
                    <h6 className="section-title">Ofertas da Semana</h6>

                        {/* {
                            produtos.map(item => 
                            <VerticalCardProduct 
                                src={item.categoriaProduto.calcado.imagemProduto[0].url}
                                produtoName={item.categoriaProduto.calcado.nomeProduto}
                                PrecoAnterior={'R$80,90'}
                                PrecoAtual={item.categoriaProduto.calcado.preco}
                            />
                            )
                        } */}
                        {/* { 
                        produtosRoupas.map(item=>
                           <VerticalCardProduct
                            src={item.imagemProduto[0].url}
                            produtoName={item.nomeProduto}
                            PrecoAnterior={'R$80,90'}
                            PrecoAtual={item.preco}
                           />
                        )} */}
     
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
                            <HorizontalCardProduct/>
                            <HorizontalCardProduct/>
                        </Slider>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        <Footer />
        </>
    );
}
export default Home;