import React, { useState, useEffect } from "react";
import apiFullSports from "../../../../api/apiFullSports";
import IProduto from "../../../../utils/interfaces/IProduto";
import styled from "styled-components";
import VerticalCardProduct from "../../../Components/Cards/VerticalCardP";
import Cabecalho from "../../../Components/Menu/Header";
import Footer from "../../../Components/Footer";
const Main = styled.main`
    width: 100%;
    min-height: 600px;
`;
const Grid = styled.div`
    margin: 40px 10px 40px 40px;
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-gap: 15px;
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
                <Grid>
                    {produtos.map(item => {
                        const categoriaDeproduto = item.categoriaProduto.equipamento;
                        if (categoriaDeproduto !== undefined) {
                            return <VerticalCardProduct
                                src={categoriaDeproduto.imagemProduto[0].url}
                                produtoName={categoriaDeproduto.nome}
                                PrecoAnterior={"teste"}
                                PrecoAtual={categoriaDeproduto.preco}
                            />
                        }
                    })}
                </Grid>
            </Main>
            <Footer />
        </>
    } else if (categoriaParam?.toString() === 'calcado') {
        return <>
            <Cabecalho />
            <Main>
                <Grid>
                    {produtos.map(item => {
                        const categoriaDeproduto = item.categoriaProduto.calcado;
                        if (categoriaDeproduto !== undefined) {
                            return <VerticalCardProduct
                                src={categoriaDeproduto.imagemProduto[0].url}
                                produtoName={categoriaDeproduto.nome}
                                PrecoAnterior={"teste"}
                                PrecoAtual={categoriaDeproduto.preco}
                            />
                        }
                    })}
                </Grid>
            </Main>
            <Footer />
        </>
    } else if (categoriaParam?.toString() === 'roupa') {
        return <>
            <Cabecalho />
            <Main>
                <Grid>
                    {produtos.map(item => {
                        const categoriaDeproduto = item.categoriaProduto.roupa;
                        if (categoriaDeproduto !== undefined) {
                            return <VerticalCardProduct
                                src={categoriaDeproduto.imagemProduto[0].url}
                                produtoName={categoriaDeproduto.nome}
                                PrecoAnterior={"teste"}
                                PrecoAtual={categoriaDeproduto.preco}
                            />
                        }
                    })}
                </Grid>
            </Main>
            <Footer />
        </>
    } else if (categoriaParam?.toString() === 'suplemento') {
        return <>
            <Cabecalho />
            <Main>
                <Grid>
                    {produtos.map(item => {
                        const categoriaDeproduto = item.categoriaProduto.suplemento;
                        if (categoriaDeproduto !== undefined) {
                            return <VerticalCardProduct
                                src={categoriaDeproduto.imagemProduto[0].url}
                                produtoName={categoriaDeproduto.nome}
                                PrecoAnterior={"teste"}
                                PrecoAtual={categoriaDeproduto.preco}
                            />
                        }
                    })}
                </Grid>
            </Main>
            <Footer />
        </>
    } else {
        return <>
            <Cabecalho />
            <Main>
                <Grid>
                    {produtos.map(item => {
                        const categoriaDeproduto = item.categoriaProduto;
                        if (categoriaDeproduto.equipamento !== undefined) {
                            return <VerticalCardProduct
                                src={categoriaDeproduto.equipamento.imagemProduto[0].url}
                                produtoName={categoriaDeproduto.equipamento.nome}
                                PrecoAnterior={"teste"}
                                PrecoAtual={categoriaDeproduto.equipamento.preco}
                            />
                        } else if (categoriaDeproduto.calcado !== undefined) {
                            return <VerticalCardProduct
                                src={categoriaDeproduto.calcado.imagemProduto[0].url}
                                produtoName={categoriaDeproduto.calcado.nome}
                                PrecoAnterior={"teste"}
                                PrecoAtual={categoriaDeproduto.calcado.preco}
                            />
                        } else if (categoriaDeproduto.roupa !== undefined) {
                            return <VerticalCardProduct
                                src={categoriaDeproduto.roupa.imagemProduto[0].url}
                                produtoName={categoriaDeproduto.roupa.nome}
                                PrecoAnterior={"teste"}
                                PrecoAtual={categoriaDeproduto.roupa.preco}
                            />
                        } else if (categoriaDeproduto.suplemento !== undefined) {
                            return <VerticalCardProduct
                                src={categoriaDeproduto.suplemento.imagemProduto[0].url}
                                produtoName={categoriaDeproduto.suplemento.nome}
                                PrecoAnterior={"teste"}
                                PrecoAtual={categoriaDeproduto.suplemento.preco}
                            />
                        } else {
                            return <></>
                        }
                    })}
                </Grid>
            </Main>
            <Footer />
        </>
    }
}
export default VizualizacaoDeProdutos