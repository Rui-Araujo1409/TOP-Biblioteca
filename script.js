const minhaBiblioteca = [];

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
    minhaBiblioteca.push(livro);
}

adicionarLivroBiblioteca("The Hobbit", "J.R.R. Tolkien", 293, "lido");
adicionarLivroBiblioteca("Livro1", "Autor1", 250, "não lido");
adicionarLivroBiblioteca("Livro2", "Autor2, Autor3", 200, "lido");


const blocoCartõesElemento = document.querySelector(".bloco-cartões");

let títuloTexto;
let autorTexto;
let páginasTexto;
let estadoTexto;

//loop que constrói o HTML dos Livros
//nota: o for...of não funciona, apenas o for...in com o item como index
for (const item in minhaBiblioteca) {
    títuloTexto = minhaBiblioteca[item].título;
    autorTexto = minhaBiblioteca[item].autor;
    páginasTexto = minhaBiblioteca[item].páginas;
    estadoTexto = minhaBiblioteca[item].estado;
    idTexto = minhaBiblioteca[item].id;
    let cartãoLivro = document.createElement("div");
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
    títuloConteúdo.textContent = títuloTexto;
    autorConteúdo.textContent = autorTexto;
    páginasConteúdo.textContent = `${páginasTexto} pp.`;
    estadoConteúdo.textContent = estadoTexto;
    cartãoLivro.appendChild(títuloConteúdo);
    cartãoLivro.appendChild(autorConteúdo);
    cartãoLivro.appendChild(páginasConteúdo);
    cartãoLivro.appendChild(estadoConteúdo);
    cartãoLivro.setAttribute("data-id", `${idTexto}`);
}