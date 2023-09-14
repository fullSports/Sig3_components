import React from 'react';
import styled from 'styled-components';
const CardFTZdiv = styled.div`
	line-height: 25px;
	padding: 10px;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	width: 220px;
	img {
		height: 190px;
		@media screen and (max-width: 1144px) {
			height: 100px;
		}
	}
	:hover {
		transition: 0.3s;
		box-shadow: 0 0 6px rgba(143, 106, 106, 0.6);
	}

	@media screen and (max-width: 1144px) {
		width: 150px;
		padding: 10px;
		:hover {
			transition: 0.3s;
			box-shadow: 0 0 6px rgba(143, 106, 106, 0.6);
		}
	}
`;
const ImgTenisFTZdiv = styled.div`
	text-align: center;
`;
const CorpoCard = styled.div`
	margin: 5px 0;
	h3 {
		font-size: 19px;
	}
	@media screen and (max-width: 1144px) {
		margin: 1px 0;
		h3 {
			font-size: 12px;
		}
	}
`;
const TituloCarddiv = styled.p`
	font-size: 16px;
`;
const PrecoAnteriordiv = styled.p`
	text-decoration: line-through;
`;
const PrecoAtualdiv = styled.h3`
	h3.precoAtual {
		text-align: left;
	}
`;
const DescCarddiv = styled.div`
	font-size: 13px;
`;
interface Props {
	FrtGrtsCard: string;
	Parcela: string;
	src: string;
	TituloCard: string;
	PrecoAnterior: string;
	PrecoAtual: string;
	href: string;
}
const CardsFTZ: React.FC<Props> = ({
	FrtGrtsCard,
	Parcela,
	src,
	TituloCard,
	PrecoAnterior,
	PrecoAtual,
	href,
}) => {
	if (FrtGrtsCard === 'true') {
		return (
			<CardFTZdiv id="cardFTZ" className="cardFTZ">
				<ImgTenisFTZdiv id="imgTenisFTZ" className="imgTenisFTZ">
					<img src={src} alt="" />
				</ImgTenisFTZdiv>
				<CorpoCard id="corpoCard" className="corpoCard">
					<TituloCarddiv id="tituloCard" className="tituloCard">
						{TituloCard}
					</TituloCarddiv>
					<PrecoAnteriordiv id="precoAnterior" className="precoAnterior">
						{PrecoAnterior}
					</PrecoAnteriordiv>
					<p id="frtGrtsCard" className="frtGrtsCard">
						Frete Grátis
					</p>
					<PrecoAtualdiv id="precoAnterior" className="precoAtual">
						{PrecoAtual}
					</PrecoAtualdiv>
				</CorpoCard>
				<DescCarddiv id="descCard" className="descCard">
					<p>{Parcela}</p>
				</DescCarddiv>
			</CardFTZdiv>
		);
	}
	return (
		<CardFTZdiv id="cardFTZ" className="cardFTZ">
			<ImgTenisFTZdiv id="imgTenisFTZ" className="imgTenisFTZ">
				<a href={href}>
					<img src={src} alt="imagem do card de produto" />
				</a>
			</ImgTenisFTZdiv>
			<CorpoCard id="corpoCard" className="corpoCard">
				<TituloCarddiv id="tituloCard" className="tituloCard">
					{TituloCard}
				</TituloCarddiv>
				<PrecoAnteriordiv id="precoAnterior" className="precoAnterior">
					{PrecoAnterior}
				</PrecoAnteriordiv>
				<PrecoAtualdiv id="precoAnterior" className="precoAtual">
					{PrecoAtual}
				</PrecoAtualdiv>
			</CorpoCard>
			<DescCarddiv id="descCard" className="descCard">
				<p>{Parcela}</p>
			</DescCarddiv>
		</CardFTZdiv>
	);
};
export default CardsFTZ;
