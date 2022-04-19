/* JS INICIAL PARA CEP/ENDEREÇO */
const formulario = document.querySelector("form");
const inputCep = formulario.querySelector("#cep");
const inputTelefone = formulario.querySelector("#telefone");
const inputEndereco = formulario.querySelector("#endereco");
const inputBairro = formulario.querySelector("#bairro");
const inputCidade = formulario.querySelector("#cidade");
const inputEstado = formulario.querySelector("#estado");
const bStatus = formulario.querySelector("#status");
const botaoLocalizar = formulario.querySelector("#localizar-cep");

//-----------------------------------------------------------------------------------

botaoLocalizar.addEventListener("click", function(event){
    event.preventDefault();


    /* Pegar o cep digitado */
    let cep = inputCep.value;


    /*CEP np padrão da api  */
let url = `https://viacep.com.br/ws/${cep}/json/`;

/* ajax: conicação assincrona com o ViaCep usando a função chamada fetch.*/

// 1) fazer a conexão com api ou acessar
fetch(url)

    // 2) Recupere a resposta do acesso no formato JSON
    .then(resposta => resposta.json())

        // 3) e então, mostre os dados
        .then(dados => {
            if ("erro" in dados) {
                bStatus.innerHTML= "CEP  não encontrado"
                inputCep.focus();
            } else {
                bStatus.innerHTML = "CEP encontrado";
                inputEndereco.value = dados.logradouro;
                inputBairro.value = dados.bairro;
                inputCidade.value = dados.localidade;
                inputEstado.value = dados.uf;
            };
        });
});

VMasker(inputCep).maskPattern("99999-999");
VMasker(inputTelefone).maskPattern("(99)99999-9999");

//------------------------------------------------------------------------------------

/* JS INICIAL PARA MENSAGEM */
const spanMaximo = formulario.querySelector("#maximo");
const bCaracteres = formulario.querySelector("#caracteres");
const textMensagem = formulario.querySelector("#mensagem");

//------------------------------------------------------------------------------------

// determinar a quantidade maxima de caracteres
let quantidade = 100;

//evento para detectar a digitação (entrada) no campo
textMensagem.addEventListener("input", function(){

     //captura o que for digitador
     let conteudo = textMensagem.value;

     let contagem = quantidade - conteudo.length;

     bCaracteres.textContent = contagem

    console.log(contagem);

    if (contagem == 0) {
        bCaracteres.style.color = "red"
        textMensagem.style.boxShadow = "red 0 0 10px" 
    } else {
        bCaracteres.style.color = "black"
        textMensagem.style.boxShadow = "black 0 0 10px"
    }

    
   
});