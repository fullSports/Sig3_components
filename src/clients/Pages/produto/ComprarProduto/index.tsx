import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import apiFullSports from '../../../../api/apiFullSports';
import IProduto from '../../../../utils/interfaces/IProduto';
import Footer from '../../../Components/Footer';
import Cabecalho from '../../../Components/Menu/Header';
const VisualizacaoPrd = styled.section`
    margin: 40px 0;
    margin-left: auto;
    margin-right: auto;
`;
const GridVisuPrd = styled.div`
    margin: 40px 0;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    /* POSSIVEL MUDANÇA PARA 1200PX */
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, auto);
    /* grid-gap: 25px; */
    @media screen and (max-width: 1040px){
        display: grid;
        grid-template-columns: repeat(1, auto);
        margin: 0;
    }
`;
const FotosAdcPrd = styled.div`
    img{
        width: 150px;
        height: 124px;
    }
    @media screen and (max-width: 1040px){
        img{
        width: 75px;
        height: 65px;
        }
        display: flex;
        border: 2px solid #000;;
        
    }
    button{
        /* margin: 0 0 0 300px; */
        display: block;
        margin: 10px 0 10px 10px;
        border: 1px solid rgba(5, 5, 5, 0.527);
    }
    button:hover{
        border: 1px solid rgb(128, 202, 44);
    }
    button:focus{
        border: 1px solid rgb(128, 202, 44);
    }
`;
const DescAnunPrd = styled.div`
    color: #313131;
    border: 2px solid rgba(0, 0, 0, 0.123);
    *{
        line-height: 35px;
    }
    
`;
const ConteudoDescAnunPrd = styled.div`
    margin: 20px 20px 0 ;
    #titDescPrd{
    font-weight: 600;
    font-size: 20px;
    }
    #frtGrtsCard{
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    /* width: max-content; */
    color: #62aa0b;
    /* background-color: #a6e65a; */
    }
    #prcPromoPrd{
    text-decoration: line-through;
    font-size: 16px;
    }
    #prcPrd{
    font-weight: 600;
    font-size: 26px;
    color: #7aaa2e;
    }
    #subTitPrd{
    font-size: 17px;
    }
    #tmnhPrd p{
    font-size: 15px;
    font-weight: 600;
    }
    #tmnhQtd p{
    font-size: 15px;
    font-weight: 600;
    }
    #tmnhQtd input{
    width: 45px;
    font-size: 15px;
    text-align: center;
    border: 1px solid rgba(5, 5, 5, 0.527);
    }
    #tmnhQtd input:focus{
    outline: none;
    }
    #btnLinkPrd{
    line-height: 50px;
    margin: 15px 0 ;
    text-align: center;
    }
    #btnLinkPrd input{
    margin-right: auto;
    margin-left: auto;
    display: block;
    border: none;
    background-color: #313131;
    text-transform: uppercase;
    color: #fff;
    font-size: 16px;
    min-width: 180px;
    min-height: 44px;
    cursor: pointer;
    }
    #btnLinkPrd input:hover{
    text-decoration: none;
    background-color: rgb(0, 0, 0);
	transform:translate(0.3s);
    }
    @media screen and (max-width: 1144px) {
    #frtGrtsCard{
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    /* width: max-content; */
    color: #62aa0b;
    /* background-color: #a6e65a; */
    }

    }
`;
const BotaoNumber = styled.div`
    background-color: #796969;
    height: 20px;
    width: 20px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    cursor: pointer;
    margin-left: 12px;
    margin-top: 6px;
`;
const ThTabela = styled.th`
display: grid;
    grid-template-columns: repeat(3,40px);
    height: auto;
`;
const ComprarProduto = () => {
    const user = JSON.parse(localStorage.getItem('user') as string);
    const parametro = useParams();
    const [produto, setProduto] = useState<IProduto>();
    const [spinner, setSpinner] = useState(false);
    const [estiloImgProd1, setEstiloImgProd1] = useState('');
    const [estiloImgProd1Array, setEstiloImgProd1Array] = useState(Array);
    const [estiloInicial, setEstiloInicial] = useState(true);
    const [quantidade, setQuantidade] = useState('');
    const [open, setOpen] = useState(Boolean);
    const handleClose = () => {
        setOpen(false);
    };
    function comprarItem(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        localStorage.setItem('carrinho', JSON.stringify({ pedido: { quantidade: quantidade, produtoID: produto?._id }, clienteID: user._id }));

        setTimeout(function () {
            window.location.href = '/carrinho-de-compra/'
        }, 100)
    }
    useEffect(() => {
        setSpinner(true)
        apiFullSports.get<IProduto>(`listar-produto/${parametro.id}`).then(resposta => {
            setProduto(resposta.data)
            setSpinner(false)
            if (estiloInicial) {
                const categoria = resposta.data.categoriaProduto;
                var estiloImgProd = [{},]
                if (categoria?.calcado !== undefined) {
                    for (var i = 1; i < categoria.calcado.imagemProduto.length; i++) {
                        estiloImgProd.unshift(`${'imgPrd-' + produto?.categoriaProduto.calcado.imagemProduto[i]._id}`)
                    }
                    setEstiloImgProd1(`${'imgPrd-' + produto?.categoriaProduto.calcado.imagemProduto[0]._id}`);
                    estiloImgProd.pop();
                    setEstiloImgProd1Array(estiloImgProd);
                } else if (categoria?.equipamento !== undefined) {
                    for (var i = 1; i < categoria.equipamento.imagemProduto.length; i++) {
                        estiloImgProd.unshift(`${'imgPrd-' + produto?.categoriaProduto.equipamento.imagemProduto[i]._id}`)
                    }
                    setEstiloImgProd1(`${'imgPrd-' + produto?.categoriaProduto.equipamento.imagemProduto[0]._id}`)
                    estiloImgProd.pop();
                    setEstiloImgProd1Array(estiloImgProd);
                } else if (categoria?.roupa !== undefined) {
                    for (var i = 1; i < categoria.roupa.imagemProduto.length; i++) {
                        estiloImgProd.unshift(`${'imgPrd-' + produto?.categoriaProduto.roupa.imagemProduto[i]._id}`)
                    }
                    setEstiloImgProd1(`${'imgPrd-' + produto?.categoriaProduto.roupa.imagemProduto[0]._id}`)
                    estiloImgProd.pop();
                    setEstiloImgProd1Array(estiloImgProd);
                } else if (categoria?.suplemento !== undefined) {
                    for (var i = 1; i < categoria.suplemento.imagemProduto.length; i++) {
                        estiloImgProd.unshift(`${'imgPrd-' + produto?.categoriaProduto.suplemento.imagemProduto[i]._id}`)
                    }
                    setEstiloImgProd1(`${'imgPrd-' + produto?.categoriaProduto.suplemento.imagemProduto[0]._id}`)
                    estiloImgProd.pop();
                    setEstiloImgProd1Array(estiloImgProd);
                }
            }
        })
        setQuantidade('1');
    }, [parametro, estiloImgProd1]);
    useEffect(() => {

    }, [])
    if (user) {
        console.log(estiloImgProd1Array)
        const categoria = produto?.categoriaProduto;
        const FotoPrd = styled.div`
        overflow: hidden;
        img{
            margin: 10px 0 10px;
            width: 550px;
            height: 460px;
            -moz-transition: all 0.3s;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
        }
        @media screen and (max-width: 1040px){
            img{
            margin: 10px 0 10px;
            width: 90%;
            height: 160px;
            -moz-transition: all 0.3s;
            -webkit-transition: all 0.3s;
            transition: all 0.3s;
        }
        }
        :hover img{
            -moz-transform: scale(1.1);
            -webkit-transform: scale(1.1);
            transform: scale(1.3);
            cursor: zoom-in;
        }
        #${estiloImgProd1}{
            display: block;
        }
        ${estiloImgProd1Array.map(item =>
            `#${item}{display: none;}`
        )}
        `;
        if (categoria?.calcado !== undefined) {
            var newPrecoProduto = parseFloat(categoria.calcado.preco.replace(",", "."))
            var parcela = newPrecoProduto / 12;
            var newParcela = parcela.toFixed(2);
            const quantidadeCategoria = parseFloat(quantidade);
            return <>
                <Cabecalho />
                <VisualizacaoPrd id="visualizacaoPrd" className="visualizacaoPrd">
                    <GridVisuPrd id="gridVisuPrd" className="gridVisuPrd">
                        <FotosAdcPrd id="fotosAdcPrd" className="fotosAdcPrd">
                            {produto?.categoriaProduto.calcado.imagemProduto.map(item => {
                                return <button id={"opcImg-" + item._id} className="opcImg" onClick={() => {
                                    var estiloImgProd = [{},];
                                    setEstiloInicial(false);
                                    for (var i = 0; i < categoria.calcado.imagemProduto.length; i++) {
                                        if (categoria.calcado.imagemProduto[i]._id === item._id) {
                                            setEstiloImgProd1(`${'imgPrd-' + produto?.categoriaProduto.calcado.imagemProduto[i]._id}`);
                                        } else {
                                            estiloImgProd.unshift(`${'imgPrd-' + produto?.categoriaProduto.calcado.imagemProduto[i]._id}`)

                                        }
                                    }
                                    estiloImgProd.pop();
                                    setEstiloImgProd1Array(estiloImgProd)
                                }}>
                                    <img src={item.url} alt="imagem produto" />
                                </button>
                            })}
                        </FotosAdcPrd>
                        <FotoPrd id="fotoPrd" className="fotoPrd">
                            {produto?.categoriaProduto.calcado.imagemProduto.map(item => {
                                return <FotoPrd id="fotoPrd" className="fotoPrd">
                                    <img src={item.url} alt="imagem produto" id={"imgPrd-" + item._id} />
                                </FotoPrd>
                            })}
                        </FotoPrd>
                        <form onSubmit={comprarItem}>
                            <DescAnunPrd id="descAnunPrd" className="descAnunPrd">
                                <ConteudoDescAnunPrd id="conteudoDescAnunPrd" className="conteudoDescAnunPrd">
                                    <p id="titDescPrd" className="titDescPrd">{categoria.calcado.nome}</p>
                                    <p id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</p>
                                    <p id="prcPrd" className="prcPrd">R${categoria.calcado.preco}</p>
                                    <p id="subTitPrd" className="subTitPrd">em até 12x de R${newParcela.toString().replace(".", ",")}</p>
                                    <div id="tmnhQtd" className="tmnhQtd">
                                        <p>Quantidade</p>
                                        <ThTabela>
                                            <BotaoNumber onClick={() => {
                                                if (quantidadeCategoria !== 1) {
                                                    const newquantidade = quantidadeCategoria - 1;
                                                    console.log(newquantidade)
                                                    setQuantidade(newquantidade.toString());
                                                }
                                            }}><button type='button'>-</button></BotaoNumber>
                                            <input type="number" value={quantidade} placeholder="Nº" min='1'
                                                required max={categoria.calcado.quantidade} onChange={evento => setQuantidade(evento.target.value)} />
                                            <BotaoNumber onClick={() => {
                                                const newquantidade = quantidadeCategoria + 1;
                                                console.log(newquantidade)
                                                setQuantidade(newquantidade.toString());
                                            }}><button type="button">+</button></BotaoNumber>
                                        </ThTabela>
                                    </div>
                                    <div id="btnLinkPrd" className="btnLinkPrd">
                                        <input type="submit" value="Comprar" />
                                        <a href={''}>Calcular frete</a>
                                    </div>
                                </ConteudoDescAnunPrd>
                            </DescAnunPrd>
                        </form>
                    </GridVisuPrd>
                </VisualizacaoPrd>
                <Footer />
            </>
        } else if (categoria?.equipamento !== undefined) {
            var newPrecoProduto = parseFloat(categoria.equipamento.preco.replace(",", "."))
            var parcela = newPrecoProduto / 12;
            var newParcela = parcela.toFixed(2);
            const quantidadeCategoria = parseFloat(quantidade);
            return <>
                <Cabecalho />
                <VisualizacaoPrd id="visualizacaoPrd" className="visualizacaoPrd">
                    <GridVisuPrd id="gridVisuPrd" className="gridVisuPrd">
                        <FotosAdcPrd id="fotosAdcPrd" className="fotosAdcPrd">
                            {produto?.categoriaProduto.equipamento.imagemProduto.map(item => {
                                return <button id={"opcImg-" + item._id} className="opcImg" onClick={() => {
                                    var estiloImgProd = [{},];
                                    setEstiloInicial(false);
                                    for (var i = 0; i < categoria.equipamento.imagemProduto.length; i++) {
                                        if (categoria.equipamento.imagemProduto[i]._id === item._id) {
                                            setEstiloImgProd1(`${'imgPrd-' + produto?.categoriaProduto.equipamento.imagemProduto[i]._id}`);
                                        } else {
                                            estiloImgProd.unshift(`${'imgPrd-' + produto?.categoriaProduto.equipamento.imagemProduto[i]._id}`)

                                        }
                                    }
                                    estiloImgProd.pop();
                                    setEstiloImgProd1Array(estiloImgProd)
                                }}>
                                    <img src={item.url} alt="imagem produto" />
                                </button>
                            })}
                        </FotosAdcPrd>
                        <FotoPrd id="fotoPrd" className="fotoPrd">
                            {produto?.categoriaProduto.equipamento.imagemProduto.map(item => {
                                return <FotoPrd id="fotoPrd" className="fotoPrd">
                                    <img src={item.url} alt="imagem produto" id={"imgPrd-" + item._id} />
                                </FotoPrd>
                            })}
                        </FotoPrd>
                        <form onSubmit={comprarItem}>
                            <DescAnunPrd id="descAnunPrd" className="descAnunPrd">
                                <ConteudoDescAnunPrd id="conteudoDescAnunPrd" className="conteudoDescAnunPrd">
                                    <p id="titDescPrd" className="titDescPrd">{categoria.equipamento.nome}</p>
                                    <p id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</p>
                                    <p id="prcPrd" className="prcPrd">R${categoria.equipamento.preco}</p>
                                    <p id="subTitPrd" className="subTitPrd">em até 12x de R${newParcela.toString().replace(".", ",")}</p>
                                    <div id="tmnhQtd" className="tmnhQtd">
                                        <p>Quantidade</p>
                                        <ThTabela>
                                            <BotaoNumber onClick={() => {
                                                if (quantidadeCategoria !== 1) {
                                                    const newquantidade = quantidadeCategoria - 1;
                                                    console.log(newquantidade)
                                                    setQuantidade(newquantidade.toString());
                                                }
                                            }}><button type='button'>-</button></BotaoNumber>
                                            <input type="number" value={quantidade} placeholder="Nº" min='1'
                                                required max={categoria.equipamento.quantidade} onChange={evento => setQuantidade(evento.target.value)} />
                                            <BotaoNumber onClick={() => {
                                                const newquantidade = quantidadeCategoria + 1;
                                                console.log(newquantidade)
                                                setQuantidade(newquantidade.toString());
                                            }}><button type="button">+</button></BotaoNumber>
                                        </ThTabela>
                                    </div>
                                    <div id="btnLinkPrd" className="btnLinkPrd">
                                        <input type="submit" value="Comprar" />
                                        <a href={''}>Calcular frete</a>
                                    </div>
                                </ConteudoDescAnunPrd>
                            </DescAnunPrd>
                        </form>
                    </GridVisuPrd>
                </VisualizacaoPrd>
                <Footer />
            </>
        } else if (categoria?.roupa !== undefined) {
            var newPrecoProduto = parseFloat(categoria.roupa.preco.replace(",", "."))
            var parcela = newPrecoProduto / 12;
            var newParcela = parcela.toFixed(2);
            const quantidadeCategoria = parseFloat(quantidade);
            return <>
                <Cabecalho />
                <VisualizacaoPrd id="visualizacaoPrd" className="visualizacaoPrd">
                    <GridVisuPrd id="gridVisuPrd" className="gridVisuPrd">
                        <FotosAdcPrd id="fotosAdcPrd" className="fotosAdcPrd">
                            {produto?.categoriaProduto.roupa.imagemProduto.map(item => {
                                return <button id={"opcImg-" + item._id} className="opcImg" onClick={() => {
                                    var estiloImgProd = [{},];
                                    setEstiloInicial(false);
                                    for (var i = 0; i < categoria.roupa.imagemProduto.length; i++) {
                                        if (categoria.roupa.imagemProduto[i]._id === item._id) {
                                            setEstiloImgProd1(`${'imgPrd-' + produto?.categoriaProduto.roupa.imagemProduto[i]._id}`);
                                        } else {
                                            estiloImgProd.unshift(`${'imgPrd-' + produto?.categoriaProduto.roupa.imagemProduto[i]._id}`)
                                        }
                                    }
                                    estiloImgProd.pop();
                                    setEstiloImgProd1Array(estiloImgProd)
                                }}>
                                    <img src={item.url} alt="imagem produto" />
                                </button>
                            })}
                        </FotosAdcPrd>
                        <FotoPrd id="fotoPrd" className="fotoPrd">
                            {produto?.categoriaProduto.roupa.imagemProduto.map(item => {
                                return <FotoPrd id="fotoPrd" className="fotoPrd">
                                    <img src={item.url} alt="imagem produto" id={"imgPrd-" + item._id} />
                                </FotoPrd>
                            })}
                        </FotoPrd>
                        <form onSubmit={comprarItem}>
                            <DescAnunPrd id="descAnunPrd" className="descAnunPrd">
                                <ConteudoDescAnunPrd id="conteudoDescAnunPrd" className="conteudoDescAnunPrd">
                                    <p id="titDescPrd" className="titDescPrd">{categoria.roupa.nome}</p>
                                    <p id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</p>
                                    <p id="prcPrd" className="prcPrd">R${categoria.roupa.preco}</p>
                                    <p id="subTitPrd" className="subTitPrd">em até 12x de R${newParcela.toString().replace(".", ",")}</p>
                                    <div id="tmnhQtd" className="tmnhQtd">
                                        <p>Quantidade</p>
                                        <ThTabela>
                                            <BotaoNumber onClick={() => {
                                                if (quantidadeCategoria !== 1) {
                                                    const newquantidade = quantidadeCategoria - 1;
                                                    console.log(newquantidade)
                                                    setQuantidade(newquantidade.toString());
                                                }
                                            }}><button type='button'>-</button></BotaoNumber>
                                            <input type="number" value={quantidade} placeholder="Nº" min='1'
                                                required max={categoria.roupa.quantidade} onChange={evento => setQuantidade(evento.target.value)} />
                                            <BotaoNumber onClick={() => {
                                                const newquantidade = quantidadeCategoria + 1;
                                                console.log(newquantidade)
                                                setQuantidade(newquantidade.toString());
                                            }}><button type="button">+</button></BotaoNumber>
                                        </ThTabela>
                                    </div>
                                    <div id="btnLinkPrd" className="btnLinkPrd">
                                        <input type="submit" value="Comprar" />
                                        <a href={''}>Calcular frete</a>
                                    </div>

                                </ConteudoDescAnunPrd>
                            </DescAnunPrd>
                        </form>
                    </GridVisuPrd>
                </VisualizacaoPrd>
                <Footer />
            </>
        } else if (categoria?.suplemento !== undefined) {
            var newPrecoProduto = parseFloat(categoria.suplemento.preco.replace(",", "."))
            var parcela = newPrecoProduto / 12;
            var newParcela = parcela.toFixed(2);
            const quantidadeCategoria = parseFloat(quantidade);
            return <>
                <Cabecalho />
                <VisualizacaoPrd id="visualizacaoPrd" className="visualizacaoPrd">
                    <GridVisuPrd id="gridVisuPrd" className="gridVisuPrd">
                        <FotosAdcPrd id="fotosAdcPrd" className="fotosAdcPrd">
                            {produto?.categoriaProduto.suplemento.imagemProduto.map(item => {
                                return <button id={"opcImg-" + item._id} className="opcImg" onClick={() => {
                                    var estiloImgProd = [{},];
                                    setEstiloInicial(false);
                                    for (var i = 0; i < categoria.suplemento.imagemProduto.length; i++) {
                                        if (categoria.suplemento.imagemProduto[i]._id === item._id) {
                                            setEstiloImgProd1(`${'imgPrd-' + produto?.categoriaProduto.suplemento.imagemProduto[i]._id}`);
                                        } else {
                                            estiloImgProd.unshift(`${'imgPrd-' + produto?.categoriaProduto.suplemento.imagemProduto[i]._id}`)

                                        }
                                    }
                                    estiloImgProd.pop();
                                    setEstiloImgProd1Array(estiloImgProd)
                                }}>
                                    <img src={item.url} alt="imagem produto" />
                                </button>
                            })}
                        </FotosAdcPrd>
                        <FotoPrd id="fotoPrd" className="fotoPrd">
                            {produto?.categoriaProduto.suplemento.imagemProduto.map(item => {
                                return <FotoPrd id="fotoPrd" className="fotoPrd">
                                    <img src={item.url} alt="imagem produto" id={"imgPrd-" + item._id} />
                                </FotoPrd>
                            })}
                        </FotoPrd>
                        <form onSubmit={comprarItem}>
                            <DescAnunPrd id="descAnunPrd" className="descAnunPrd">
                                <ConteudoDescAnunPrd id="conteudoDescAnunPrd" className="conteudoDescAnunPrd">
                                    <p id="titDescPrd" className="titDescPrd">{categoria.suplemento.nome}</p>
                                    <p id="frtGrtsCard" className="frtGrtsCard">Frete Grátis</p>
                                    <p id="prcPrd" className="prcPrd">R${categoria.suplemento.preco}</p>
                                    <p id="subTitPrd" className="subTitPrd">em até 12x de R${newParcela.toString().replace(".", ",")}</p>
                                    <div id="tmnhQtd" className="tmnhQtd">
                                        <p>Quantidade</p>
                                        <ThTabela>
                                            <BotaoNumber onClick={() => {
                                                if (quantidadeCategoria !== 1) {
                                                    const newquantidade = quantidadeCategoria - 1;
                                                    console.log(newquantidade)
                                                    setQuantidade(newquantidade.toString());
                                                }
                                            }}><button type='button'>-</button></BotaoNumber>
                                            <input type="number" value={quantidade} placeholder="Nº" min='1'
                                                required max={categoria.suplemento.quantidade} onChange={evento => setQuantidade(evento.target.value)} />
                                            <BotaoNumber onClick={() => {
                                                const newquantidade = quantidadeCategoria + 1;
                                                console.log(newquantidade)
                                                setQuantidade(newquantidade.toString());
                                            }}><button type="button">+</button></BotaoNumber>
                                        </ThTabela>
                                    </div>
                                    <div id="btnLinkPrd" className="btnLinkPrd">
                                        <input type="submit" value="Comprar" />
                                        <a href={''}>Calcular frete</a>
                                    </div>

                                </ConteudoDescAnunPrd>
                            </DescAnunPrd>
                        </form>
                    </GridVisuPrd>
                </VisualizacaoPrd>
                <Footer />
            </>
        } else {
            return <></>
        }
    } else {
        return <>
            {window.location.href = '/login'}
        </>
    }
}
export default ComprarProduto;