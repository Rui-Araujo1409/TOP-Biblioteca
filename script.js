const minhaBiblioteca = [];

function Livro(título, autor, páginas, estado) {
    this.título = título;
    this.autor = autor;
    this.páginas = páginas;
    this.estado = estado;
    this.id = crypto.randomUUID();
}

// const theHobbit = new Livro("The Hobbit", "J.R.R. Tolkien", 293, "lido");

function adicionarLivroBiblioteca(título, autor, páginas, estado) {
    let livro = new Livro(título, autor, páginas, estado);
    minhaBiblioteca.push(livro);
}

adicionarLivroBiblioteca("The Hobbit", "J.R.R. Tolkien", 293, "lido");
adicionarLivroBiblioteca("Livro1", "Autor1", 250, "não lido");
adicionarLivroBiblioteca("Livro2", "Autor2, Autor3", 200, "lido");
console.table()

let títuloElemento = document.querySelector(".js-título");
let autorElemento = document.querySelector(".js-autor");
let páginasElemento = document.querySelector(".js-páginas");
let estadoElemento = document.querySelector(".js-estado");
let testeElemento = document.querySelector(".teste");
const blocoCartõesElemento = document.querySelector(".bloco-cartões");
const cartãoLivroElemento = document.querySelector(".cartão-livro");
let títuloTexto;
let autorTexto;
let páginasTexto;
let estadoTexto;




for (i = 0; i < minhaBiblioteca.length; i++) {
    títuloTexto = minhaBiblioteca[i].título;
    autorTexto = minhaBiblioteca[i].autor;
    páginasTexto = minhaBiblioteca[i].páginas;
    estadoTexto = minhaBiblioteca[i].estado;
    let cartãoLivro = document.createElement("div");
    cartãoLivro.classList.add("cartão-livro");
    blocoCartõesElemento.appendChild(cartãoLivro);
    let livroTexto = document.createElement("div");
    livroTexto.classList.add("teste");
    livroTexto.innerHTML = `Título: ${títuloTexto}<br>Autor: ${autorTexto}<br>Páginas: ${páginasTexto}<br>Estado: ${estadoTexto}`;
    cartãoLivro.appendChild(livroTexto);
}