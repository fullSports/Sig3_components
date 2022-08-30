import React from "react";
import styled from "styled-components";
const Rodape = styled.footer`
    width: 100%;
    height: auto;
    text-align: center;
    padding: 20px 0 30px 0;
    grid-template-columns: auto;
    grid-auto-columns: auto;
    border-radius: 4%;
    margin-top: 1%;
    margin-bottom: 1%;
    @media screen and (max-width: 1144px) {
        text-align: center;
        padding: 20px 0 30px 0;
        grid-template-columns: repeat(3, 100px);
        grid-auto-columns: auto;
        p{
            margin: 3%;
        }
    }
`;
const GridFooter = styled.div`
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(2, 450px);
    @media screen and (max-width: 1144px) {
        height: 300px;
        grid-template-columns: repeat(1, 250px);
    }
`;
const DesenvolvedoresFoot = styled.div`
    line-height: 20px;
    text-align: left;
    font-size: 14px;
    @media screen and (max-width: 1144px) {
        line-height: 10px;
        text-align: left;
        font-size: 14px;
    }
`;
const TituloFoot = styled.p`
    line-height: 40px;
    font-weight: 600;
    @media screen and (max-width: 1144px) {
        line-height: 20px;
        font-weight: 200;
    }
`;
const DrtsFooter = styled.p`
    text-align: center;
    align-items: center;
    padding: 20px 0 20px 0;
    @media screen and (max-width: 1144px) {
        padding: 10px 0 10px 0;
    }
`;
const SelosFoot = styled.div`
    float: right;
    text-align: right;
    line-height: 20px;
    @media screen and (max-width: 1144px) {
        float: right;
        text-align: right;
        line-height: 10px;
        padding-right: 4%;
    }
`;
const Footer = () =>{
    return(
        <Rodape id="rodape" className="rodape">
        <GridFooter id="grid-footer" className="grid-footer">
            <DesenvolvedoresFoot id="desenvolvedoresFoot" className="desenvolvedoresFoot">
                <TituloFoot id="tituloFoot" className="tituloFoot">Desenvolvido pelo Grupo 3 - Fatec Zona Leste</TituloFoot>
                <p>Renan Figueiredo</p>
				<p>Lisandra Ferraz</p>
				<p>Gabriel Gozzi</p>
                <p>Daniela Lemmo Houck</p>
                <p>Paulo Henrique Cardoso De Jesus</p>
            </DesenvolvedoresFoot>
            <SelosFoot id="selosFoot" className="selosFoot">
                <TituloFoot id="tituloFoot" className="tituloFoot">Site verificado por</TituloFoot>
				<a href="http://jigsaw.w3.org/css-validator/check/referer">
					<img src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="CSS válido!" />
				</a>

				<a href="http://jigsaw.w3.org/css-validator/check/referer">
					<img  src="http://jigsaw.w3.org/css-validator/images/vcss" alt="CSS válido!" />
				</a>
            </SelosFoot>
        </GridFooter>
        <DrtsFooter id="drtsFooter" className="drtsFooter">Todos os direitos reservados &copy; 2022.</DrtsFooter>
    </Rodape> 
    );
}
export default Footer;