import React, { useState, useEffect } from "react";
import apiFullSports from "../../../../api/apiFullSports";
import IProduto from "../../../../utils/interfaces/IProduto";
import styled from "styled-components";
import './styles.css';
import VerticalCardProduct from "../../../Components/Cards/VerticalCardP";
import Cabecalho from "../../../Components/Menu/Header";
import Footer from "../../../Components/Footer";
const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;

const VizualizacaoDeProdutos = () => {
    const [produtos, setProdutos] = useState<IProduto[]>([]);
    const [spinner, setSpinner] = useState(false);
    const urlParams = new URLSearchParams(window.location.search);
    const categoriaParam = urlParams.get('categoria');
    useEffect(() => {
        setSpinner(true);
        apiFullSports.get<IProduto[]>("listar-produtos").then(resposta => {
            setProdutos(resposta.data)
            setSpinner(false);
        }).catch((err) => console.log(err))
    }, []);

    if (categoriaParam?.toString() === 'equipamento') {
        return <>
            <Cabecalho />
            <Main>
                <div className="produtos-grid-container">
                    {produtos.map(item => {
                        const categoriaDeproduto = item.categoriaProduto.equipamento;
                        if (categoriaDeproduto !== undefined) {
                            var newPrecoProduto = parseFloat(categoriaDeproduto.preco.replace(',', '.'));
                            var parcela = newPrecoProduto / 12;
                            var newParcela = parcela.toFixed(2);
                            return <VerticalCardProduct
                                tamanho={item.categoriaProduto.equipamento.tamanho}
                                precoParcelado={newParcela.toString().replace(".",",")}
                                produtoId={item._id}
                                src={categoriaDeproduto.imagemProduto[0].url}
                                produtoName={categoriaDeproduto.nome}
                                PrecoAnterior={""}
                                PrecoAtual={categoriaDeproduto.preco}
                            />
                        }
                    })}
                </div>
            </Main>
            <Footer />
        </>
    } else if (categoriaParam?.toString() === 'calcado') {
        return <>
            <Cabecalho />
            <Main>
                <div className="produtos-grid-container">
                    {produtos.map(item => {
                        const categoriaDeproduto = item.categoriaProduto.calcado;
                        if (categoriaDeproduto !== undefined) {
                            var newPrecoProduto = parseFloat(categoriaDeproduto.preco.replace(',', '.'));
                            var parcela = newPrecoProduto / 12;
                            var newParcela = parcela.toFixed(2);
                            return <VerticalCardProduct
                                tamanho={item.categoriaProduto.calcado.tamanho}
                                precoParcelado={newParcela.toString().replace(".",",")}
                                produtoId={item._id}
                                src={categoriaDeproduto.imagemProduto[0].url}
                                produtoName={categoriaDeproduto.nome}
                                PrecoAnterior={""}
                                PrecoAtual={categoriaDeproduto.preco}
                            />
                        }
                    })}
                </div>
            </Main>
            <Footer />
        </>
    } else if (categoriaParam?.toString() === 'roupa') {
        return <>
            <Cabecalho />
            <Main>
                <div className="produtos-grid-container">
                    {produtos.map(item => {
                        const categoriaDeproduto = item.categoriaProduto.roupa;
                        if (categoriaDeproduto !== undefined) {
                            var newPrecoProduto = parseFloat(categoriaDeproduto.preco.replace(',', '.'));
                            var parcela = newPrecoProduto / 12;
                            var newParcela = parcela.toFixed(2);
                            return <VerticalCardProduct
                                tamanho={item.categoriaProduto.roupa.tamanho}
                                precoParcelado={newParcela.toString().replace(".",",")}
                                produtoId={item._id}
                                src={categoriaDeproduto.imagemProduto[0].url}
                                produtoName={categoriaDeproduto.nome}
                                PrecoAnterior={""}
                                PrecoAtual={categoriaDeproduto.preco}
                            />
                        }
                    })}
                </div>
            </Main>
            <Footer />
        </>
    } else if (categoriaParam?.toString() === 'suplemento') {
        return <>
            <Cabecalho />
            <Main>
                <div className="produtos-grid-container">
                    {produtos.map(item => {
                        const categoriaDeproduto = item.categoriaProduto.suplemento;
                        if (categoriaDeproduto !== undefined) {
                            var newPrecoProduto = parseFloat(categoriaDeproduto.preco.replace(',', '.'));
                            var parcela = newPrecoProduto / 12;
                            var newParcela = parcela.toFixed(2);
                            return <VerticalCardProduct
                                tamanho={item.categoriaProduto.suplemento.tamanho}
                                precoParcelado={newParcela.toString().replace(".",",")}
                                produtoId={item._id}
                                src={categoriaDeproduto.imagemProduto[0].url}
                                produtoName={categoriaDeproduto.nome}
                                PrecoAnterior={""}
                                PrecoAtual={categoriaDeproduto.preco}
                            />
                        }
                    })}
                </div>
            </Main>
            <Footer />
        </>
    } else {
        return <>
            <Cabecalho />
            <Main>
                <div className="produtos-grid-container">
                    {produtos.map(item => {
                        const categoriaDeproduto = item.categoriaProduto;
                        if (categoriaDeproduto.equipamento !== undefined) {
                            var newPrecoProduto = parseFloat(categoriaDeproduto.equipamento.preco.replace(',', '.'));
                            var parcela = newPrecoProduto / 12;
                            var newParcela = parcela.toFixed(2);
                            return <VerticalCardProduct
                                tamanho={item.categoriaProduto.equipamento.tamanho}
                                precoParcelado={newParcela.toString().replace(".",",")}
                                produtoId={item._id}
                                src={categoriaDeproduto.equipamento.imagemProduto[0].url}
                                produtoName={categoriaDeproduto.equipamento.nome}
                                PrecoAnterior={""}
                                PrecoAtual={categoriaDeproduto.equipamento.preco}
                            />
                        } else if (categoriaDeproduto.calcado !== undefined) {
                            var newPrecoProduto = parseFloat(categoriaDeproduto.calcado.preco.replace(',', '.'));
                            var parcela = newPrecoProduto / 12;
                            var newParcela = parcela.toFixed(2);
                            return <VerticalCardProduct
                                tamanho={item.categoriaProduto.calcado.tamanho}
                                precoParcelado={newParcela.toString().replace(".",",")}
                                produtoId={item._id}
                                src={categoriaDeproduto.calcado.imagemProduto[0].url}
                                produtoName={categoriaDeproduto.calcado.nome}
                                PrecoAnterior={""}
                                PrecoAtual={categoriaDeproduto.calcado.preco}
                            />
                        } else if (categoriaDeproduto.roupa !== undefined) {
                            var newPrecoProduto = parseFloat(categoriaDeproduto.roupa.preco.replace(',', '.'));
                            var parcela = newPrecoProduto / 12;
                            var newParcela = parcela.toFixed(2);
                            return <VerticalCardProduct
                                tamanho={item.categoriaProduto.roupa.tamanho}
                                precoParcelado={newParcela.toString().replace(".",",")}
                                produtoId={item._id}
                                src={categoriaDeproduto.roupa.imagemProduto[0].url}
                                produtoName={categoriaDeproduto.roupa.nome}
                                PrecoAnterior={""}
                                PrecoAtual={categoriaDeproduto.roupa.preco}
                            />
                        } else if (categoriaDeproduto.suplemento !== undefined) {
                            var newPrecoProduto = parseFloat(categoriaDeproduto.suplemento.preco.replace(',', '.'));
                            var parcela = newPrecoProduto / 12;
                            var newParcela = parcela.toFixed(2);
                            return <VerticalCardProduct
                                tamanho={item.categoriaProduto.suplemento.tamanho}
                                precoParcelado={newParcela.toString().replace(".",",")}
                                produtoId={item._id}
                                src={categoriaDeproduto.suplemento.imagemProduto[0].url}
                                produtoName={categoriaDeproduto.suplemento.nome}
                                PrecoAnterior={""}
                                PrecoAtual={categoriaDeproduto.suplemento.preco}
                            />
                        } else {
                            return <></>
                        }
                    })}
                </div>
            </Main>
            <Footer />
        </>
    }
}
export default VizualizacaoDeProdutos