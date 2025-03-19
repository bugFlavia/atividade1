var Autor = /** @class */ (function () {
    function Autor(nome, nacionalidade, dt_nascimento) {
        this.nome = '';
        this.nacionalidade = '';
        this.dt_nascimento = '';
        this.nome = nome;
        this.nacionalidade = nacionalidade;
        this.dt_nascimento = dt_nascimento;
    }
    return Autor;
}());
var Livro = /** @class */ (function () {
    function Livro(titulo, ano_publicacao) {
        this.titulo = '';
        this.ano_publicacao = 0;
        this.titulo = titulo;
        this.ano_publicacao = ano_publicacao;
    }
    return Livro;
}());
var Usuario = /** @class */ (function () {
    function Usuario(nome, idade) {
        this.nome = '';
        this.idade = 0;
        this.nome = nome;
        this.idade = idade;
    }
    return Usuario;
}());
var autor = new Autor("Clarice Lispector", "Portuguesa", "01/02/1998");
console.log(Autor);
var livro = new Livro("Hora da estrela", 1998);
console.log(livro);
var usuario = new Usuario("Flavia", 18);
console.log(usuario);
