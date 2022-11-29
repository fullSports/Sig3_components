const express = require('express');
const { resolve } = require('path');
const app = express();

app.use('/login',express.static(resolve(__dirname,"./build")));
app.use('/dashboard/home',express.static(resolve(__dirname,"./build")));
app.use('/atualizar-cliente/:id',express.static(resolve(__dirname,"./build")));
app.use('/dashboard/cadastrar-admin',express.static(resolve(__dirname,"./build")));
app.use('/dashboard/consultar-admin',express.static(resolve(__dirname,"./build")));
app.use('/dashboard/atualizar-admin/:id',express.static(resolve(__dirname,"./build")));
app.use('/dashboard/cadastrar-fornecedor',express.static(resolve(__dirname,"./build")));
app.use('/dashboard/consultar-fornecedores',express.static(resolve(__dirname,"./build")));
app.use('/dashboard/atualizar-fornecedor/:id',express.static(resolve(__dirname,"./build")));
app.use('/dashboard/cadastrar-produto',express.static(resolve(__dirname,"./build")));
app.use('/dashboard/consultar-produtos',express.static(resolve(__dirname,"./build")));
app.use('/dashboard/atualizar-produto/:id',express.static(resolve(__dirname,"./build")));
app.use('/acessibilidade',express.static(resolve(__dirname,"./build")));
app.use('/produtos',express.static(resolve(__dirname,"./build")));
app.use('/atualizar-cliente/:id',express.static(resolve(__dirname,"./build")));
app.use('/comprar-produto/:id',express.static(resolve(__dirname,"./build")));
app.use('/carrinho-de-compra/',express.static(resolve(__dirname,"./build")));
app.use('/historico-de-pedido',express.static(resolve(__dirname,"./build")));
app.use('/cadastrar-cliente',express.static(resolve(__dirname,"./build")));
app.use('*',express.static(resolve(__dirname,"./build")));
app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
      return console.log(err)
    }
    console.log('Tudo funcionando certinho');
  })