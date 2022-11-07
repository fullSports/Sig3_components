// import {useRef} from 'react';
import './styles.css';
import './../../styles.css';
import Footer from "../../Components/Footer";
import Cabecalho from "../../Components/Menu/Header";
import VerticalCardProduct from "../../Components/Cards/VerticalCardP/index"
import HorizontalCardProduct from '../../Components/Cards/HorizontalCardP';


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
                <div className="ofertas-container">
                    <div className="cards-container overflow-x-auto">
                        <VerticalCardProduct/>
                    </div>
                </div>
                <div className="carousel-controls">
                    <button >Left</button>
                    <button >Right</button>
                </div>

                <h6 className="section-title">Placeholder Title</h6>
                <div className="cards-container overflow-x-auto">
                    <HorizontalCardProduct/>
                </div>
            </div>
        {/* <Footer /> */}
        </>
    );
}
export default Home;