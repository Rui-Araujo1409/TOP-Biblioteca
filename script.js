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

adicionarLivroBiblioteca("Livro1", "Autor1", 100, "lido");
adicionarLivroBiblioteca("Livro2", "Autor2", 200, "não lido");
adicionarLivroBiblioteca("Livro2", "Autor2", 200, "não lido");
adicionarLivroBiblioteca("Livro2", "Autor2", 200, "não lido");
adicionarLivroBiblioteca("Livro2", "Autor2", 200, "não lido");
adicionarLivroBiblioteca("Livro2", "Autor2", 200, "não lido");

//protótipo para a fx de estado leitura

Livro.prototype.mudarEstado = function () {
    switch (this.estado) {
        case ("lido"):
            this.estado = "não lido";
            //console.log(this.estado);
            break;
        case ("não lido"):
            this.estado = "lido";
            //console.log(this.estado);
            break;
    }
}


const blocoCartõesElemento = document.querySelector(".bloco-cartões");

let títuloTexto = "";
let autorTexto = "";
let páginasTexto = "";
let estadoTexto = "";
let apagarTexto = "Remover";
let alterarEstado = "Mudar estado";

//loop que constrói o HTML dos Livros
//nota: o for...of não funciona, apenas o for...in com o item como index
const visualizaçãoBilbioteca = (lista) => {
    for (const item in lista) {
        títuloTexto = lista[item].título;
        autorTexto = lista[item].autor;
        páginasTexto = lista[item].páginas;
        estadoTexto = lista[item].estado;
        idTexto = lista[item].id;
        const cartãoLivro = document.createElement("div");
        let botãoApagarElemento = document.createElement("button");
        let botãoAlterarEstado = document.createElement("button");
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
        botãoAlterarEstado.classList.add("js-alterar-estado");
        botãoApagarElemento.textContent = apagarTexto;
        botãoAlterarEstado.textContent = alterarEstado;
        títuloConteúdo.textContent = títuloTexto;
        autorConteúdo.textContent = autorTexto;
        páginasConteúdo.textContent = `${páginasTexto} pp.`;
        estadoConteúdo.textContent = estadoTexto;
        cartãoLivro.appendChild(títuloConteúdo);
        cartãoLivro.appendChild(autorConteúdo);
        cartãoLivro.appendChild(páginasConteúdo);
        cartãoLivro.appendChild(estadoConteúdo);
        cartãoLivro.appendChild(botãoApagarElemento);
        cartãoLivro.appendChild(botãoAlterarEstado);
        cartãoLivro.setAttribute("data-id", `${idTexto}`);
        botãoApagarElemento.setAttribute("data-id", `${idTexto}`);
        botãoAlterarEstado.setAttribute("data-id", `${idTexto}`);
    }
}

visualizaçãoBilbioteca(biblioteca);

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
    //se houver elementos de livros, executar fx que limpa os elementos
    limparElementos();
    visualizaçãoBilbioteca(biblioteca);
    títuloFormulário.value = "";
    autorFormulário.value = "";
    páginasFormulário.value = "";
})

//criar fx que limpa os elementos de visualização dos livros
const limparElementos = () => {
    while (blocoCartõesElemento.firstChild) {
        blocoCartõesElemento.removeChild(blocoCartõesElemento.firstChild);
    }
}

const botãoAlterarEstado = document.querySelector(".js-alterar-estado");

/* botãoAlterarEstado.addEventListener("click", (evento) => {
    let target = evento.target;
    let idBotão = target.dataset.id;
    biblioteca.forEach((item, index) => { if (item.id === idBotão) { item.mudarEstado() } });
}); */


//lógica para botão apagar livro e alterar estado: usar o event delegation? YEP!
blocoCartõesElemento.addEventListener("click", (e) => {
    let target = e.target;
    let idBotão;
    switch (target.className) {
        //para apagar livro
        case "js-botão-apagar":
            idBotão = target.dataset.id;
            biblioteca.forEach((item, index) => { if (item.id === idBotão) { biblioteca.splice(index, 1) } });
            limparElementos();
            visualizaçãoBilbioteca(biblioteca);
            break;
        case "js-alterar-estado":
            //para alterar estado leitura
            idBotão = target.dataset.id;
            biblioteca.forEach((item, index) => { if (item.id === idBotão) { item.mudarEstado() } });
            limparElementos();
            visualizaçãoBilbioteca(biblioteca);
            break;
    }
}
)