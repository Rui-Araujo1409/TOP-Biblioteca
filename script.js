const biblioteca = [];

//construtor objecto Livro
function Livro(título, autor, páginas, estado) {
    this.título = título;
    this.autor = autor;
    this.páginas = páginas;
    this.estado = estado;
    this.id = crypto.randomUUID();
}

//fx para adicionar o Livro à Biblioteca
function adicionarLivroBiblioteca(título, autor, páginas, estado) {
    let livro = new Livro(título, autor, páginas, estado);
    biblioteca.push(livro);
}


const blocoCartõesElemento = document.querySelector(".bloco-cartões");

let títuloTexto;
let autorTexto;
let páginasTexto;
let estadoTexto;
let apagarTexto = "Remover";

//loop que constrói o HTML dos Livros
//nota: o for...of não funciona, apenas o for...in com o item como index
const visualizaçãoBilbioteca = (lista) => {
    for (const item in lista) {
        títuloTexto = lista[item].título;
        autorTexto = lista[item].autor;
        páginasTexto = lista[item].páginas;
        estadoTexto = lista[item].estado;
        idTexto = lista[item].id;
        let cartãoLivro = document.createElement("div");
        let botãoApagarElemento = document.createElement("button");
        cartãoLivro.classList.add("cartão-livro");
        blocoCartõesElemento.appendChild(cartãoLivro);
        let títuloConteúdo = document.createElement("div");
        let autorConteúdo = document.createElement("div");
        let páginasConteúdo = document.createElement("div");
        let estadoConteúdo = document.createElement("div");
        títuloConteúdo.classList.add("js-título");
        autorConteúdo.classList.add("js-autor");
        páginasConteúdo.classList.add("js-páginas");
        estadoConteúdo.classList.add("js-estado");
        botãoApagarElemento.classList.add("js-botão-apagar");
        botãoApagarElemento.textContent = apagarTexto;
        títuloConteúdo.textContent = títuloTexto;
        autorConteúdo.textContent = autorTexto;
        páginasConteúdo.textContent = `${páginasTexto} pp.`;
        estadoConteúdo.textContent = estadoTexto;
        cartãoLivro.appendChild(títuloConteúdo);
        cartãoLivro.appendChild(autorConteúdo);
        cartãoLivro.appendChild(páginasConteúdo);
        cartãoLivro.appendChild(estadoConteúdo);
        cartãoLivro.appendChild(botãoApagarElemento);
        cartãoLivro.setAttribute("data-id", `${idTexto}`);
    }
}



const formulário = document.querySelector("dialog");
const botãoAbrirFormulário = document.querySelector(".botao-abrir-modal");
const botãoFecharFormulário = document.querySelector(".botao-modal-fechar");
const títuloFormulário = document.querySelector("#título-livro");
const autorFormulário = document.querySelector("#autor-livro");
const páginasFormulário = document.querySelector("#páginas-livro");
const estadoLidoFormulário = document.querySelector("#lido");
const estadoNãoLidoFormulário = document.querySelector("#não-lido");
const botãoGuardarLivro = document.querySelector(".botao-adicionar");

botãoAbrirFormulário.addEventListener("click", () => {
    formulário.showModal();
})

botãoFecharFormulário.addEventListener("click", () => {
    formulário.close();
    títuloFormulário.value = "";
    autorFormulário.value = "";
    páginasFormulário.value = "";
})

botãoGuardarLivro.addEventListener("click", (e) => {
    e.preventDefault();
    let título = títuloFormulário.value;
    let autor = autorFormulário.value;
    let páginas = parseInt(páginasFormulário.value);
    let estado;
    estadoLidoFormulário.checked ? estado = estadoLidoFormulário.value : estado = estadoNãoLidoFormulário.value;
    adicionarLivroBiblioteca(título, autor, páginas, estado);
    formulário.close();
    visualizaçãoBilbioteca(biblioteca);
    títuloFormulário.value = "";
    autorFormulário.value = "";
    páginasFormulário.value = "";
})