import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderVerticalCards, sliderHorizontalCards } from '../../../utils/SliderSettings';
import styled from "styled-components";
import './styles.css';
import '../../../styles.css';
import Footer from '../../Components/Footer';
import VerticalCardProduct from "../../Components/Cards/VerticalCardP/index";
import HorizontalCardProduct from '../../Components/Cards/HorizontalCardP';
import HomeHeader from '../../Components/Menu/Home Header';
import IProduto from '../../../utils/interfaces/IProduto';
import apiFullSports from '../../../api/apiFullSports';
import tenisBanner from '../../../assets/images/banners/transparent-shoes-banner.png';
import roupasBanner from '../../../assets/images/banners/transparent-clothes-banner.png';

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
                        {/* <div className="Hcard-container">
                            <Slider {...sliderHorizontalCards}>
                                {produtos.map((item: any) => {

                                    const obj = Object.keys(item.categoriaProduto)[0].toString();

                                    var newPrecoProduto = parseFloat(item.categoriaProduto[obj].preco.replace(',', '.'));
                                    var parcela = newPrecoProduto / 12;
                                    var newParcela = parcela.toFixed(2);
                                    if (item.categoriaProduto[obj].imagemProduto[0].url) {
                                        return <HorizontalCardProduct
                                            key={item._id}
                                            tamanho={item.categoriaProduto[obj].tamanho}
                                            produtoID={item._id}
                                            nome={item.categoriaProduto[obj].nome}
                                            preco={item.categoriaProduto[obj].preco}
                                            precoParcelado={newParcela.toString().replace(".", ",")}
                                            src={item.categoriaProduto[obj].imagemProduto[0].url}
                                        />
                                    } else return <></>
                                })}
                            </Slider>
                        </div> */}
           
                        <div className="produtos-grid-container-home">
                                {produtos.map((item: any) => {

                                    const obj = Object.keys(item.categoriaProduto)[0].toString();

                                    var newPrecoProduto = parseFloat(item.categoriaProduto[obj].preco.replace(',', '.'));
                                    var parcela = newPrecoProduto / 12;
                                    var newParcela = parcela.toFixed(2);
                                    if (item.categoriaProduto[obj].imagemProduto[0].url) {
                                        return <VerticalCardProduct
                                            key={item._id}
                                            tamanho={item.categoriaProduto[obj].tamanho}
                                            produtoId={item._id}
                                            produtoName={item.categoriaProduto[obj].nome}
                                            PrecoAtual={item.categoriaProduto[obj].preco}
                                            precoParcelado={newParcela.toString().replace(".", ",")}
                                            src={item.categoriaProduto[obj].imagemProduto[0].url}
                                            PrecoAnterior=""
                                        />
                                    } else return <></>
                                })}
                   
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Home;