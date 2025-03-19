class Autor{
    nome: string 
    nacionalidade: string 
    dt_nascimento: string 

    constructor(nome:string, nacionalidade:string, dt_nascimento:string){
        this.nome = nome;
        this.nacionalidade = nacionalidade;
        this.dt_nascimento = dt_nascimento
    }

}

class Livro{
    titulo: string 
    ano_publicacao: number 

    constructor(titulo:string, ano_publicacao:number){
        this.titulo = titulo;
        this.ano_publicacao = ano_publicacao;
    }
}

class Usuario{
    nome: string 
    idade: number

    constructor(nome:string, idade:number){
        this.nome = nome
        this.idade = idade
    }
}

const autor = new Autor("Clarice Lispector", "Portuguesa", "01/02/1998")
console.log(autor)
const livro = new Livro("Hora da estrela", 1998)
console.log(livro)
const usuario = new Usuario("Flavia", 18)
console.log(usuario)