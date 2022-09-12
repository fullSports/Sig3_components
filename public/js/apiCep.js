const local = window.location.href;
    if (local.search('/sig/cadastro-de-cliente') != -1) {
        function buscaCep() {
            let cep = document.getElementById('cep').value;
            if (cep != "") {
                let url = "https://brasilapi.com.br/api/cep/v1/" + cep;
                let req = new XMLHttpRequest();
                req.open("GET", url);
                req.send();

                //tratas a resposta da requisição
                req.onload = function () {
                    if (req.status === 200) {
                        let endereco = JSON.parse(req.response);
                        document.getElementById("rua").value = endereco.street;
                        document.getElementById("bairro").value = endereco.neighborhood;
                        document.getElementById("estado").value = endereco.state;
                        document.getElementById("cidade").value = endereco.city;
                    }
                    else if (req.status === 404) {
                        alert("cep invalido");
                    }
                    else {
                        alert("erro ao fazer a requisicao")
                    }
                }
            }
        }
        window.onload = function () {
            let txtcep = document.getElementById("cep");
            txtcep.addEventListener("blur", buscaCep);
        }
    }