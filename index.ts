class Autor {
    private nome: string;
    private nacionalidade: string;
    private dt_nascimento: string;

    constructor(nome: string, nacionalidade: string, dt_nascimento: string) {
        this.nome = nome;
        this.nacionalidade = nacionalidade;
        this.dt_nascimento = dt_nascimento;
    }

    get info(): string {
        return `>>>>> AUTOR <<<<< \nNome: ${this.nome} \nNacionalidade: ${this.nacionalidade} \nNascimento: ${this.dt_nascimento} \n`;
    }
}

class Livro {
    private titulo: string;
    private ano_publicacao: number;
    private autor: Autor;

    constructor(titulo: string, ano_publicacao: number, autor: Autor) {
        this.titulo = titulo;
        this.ano_publicacao = ano_publicacao;
        this.autor = autor;
    }

    get info(): string {
        return `>>>>>LIVRO <<<<< \nTítulo: ${this.titulo} \nAno de Publicação: ${this.ano_publicacao} \n${this.autor.info} \n`;
    }
}

class Usuario {
    private nome: string;
    private idade: number;
    private livro: Livro;

    constructor(nome: string, idade: number, livro: Livro) {
        this.nome = nome;
        this.idade = idade;
        this.livro = livro;
    }

    get info(): string {
        return `>>>>>USUÁRIO <<<<< \nNome: ${this.nome} \nIdade: ${this.idade} \n${this.livro.info} \n`;
    }
}

// Criando instâncias corretamente
const autor = new Autor("Clarice Lispector", "Brasileira", "10/12/1920");
console.log(autor.info);

const livro = new Livro("A Hora da Estrela", 1977, autor);
console.log(livro.info);

const usuario = new Usuario("Flávia", 18, livro);
console.log(usuario.info);