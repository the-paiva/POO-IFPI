class Postagem {
    id: number;
    texto: string;
    quantidadeCurtidas: number;

    constructor(id: number, texto: string, quantidadeCurtidas: number = 0) {
        this.id = id;
        this.texto = texto;
        this.quantidadeCurtidas = quantidadeCurtidas;
    }

    curtir(): void {
        this.quantidadeCurtidas++;
    }

    toString(): string {
        return `Postagem: ${this.texto} | Curtidas: ${this.quantidadeCurtidas}`;
    }
}

class Microblog {
    postagens: Postagem[];

    constructor() {
        this.postagens = [];
    }

    adicionarPostagem(postagem: Postagem): void {
        this.postagens.push(postagem);
    }

    mostrarPostagens(): void {
        this.postagens.forEach(postagem => {
            console.log(postagem.toString());
        });
    }

    excluirPostagem(id: number): void {
        const index = this.postagens.findIndex(postagem => postagem.id === id);
        if (index !== -1) {
            this.postagens.splice(index, 1);
            console.log(`Postagem com id ${id} excluída.`);
        } else {
            console.log(`Postagem com id ${id} não encontrada.`);
        }
    }

    retornarPostagemMaisCurtida(): Postagem | null {
        if (this.postagens.length === 0) {
            console.log("Nenhuma postagem disponível.");
            return null;
        }

        const maisCurtida = this.postagens.reduce((maisCurtida, postagemAtual) =>
            postagemAtual.quantidadeCurtidas > maisCurtida.quantidadeCurtidas ? postagemAtual : maisCurtida
        );

        return maisCurtida;
    }

    curtirPostagem(id: number): void {
        const postagem = this.postagens.find(postagem => postagem.id === id);
        if (postagem) {
            postagem.curtir();
            console.log(`A postagem com id ${id} foi curtida.`);
        } else {
            console.log(`Postagem com id ${id} não encontrada.`);
        }
    }

    toString(): string {
        if (this.postagens.length === 0) {
            return "Nenhuma postagem disponível.";
        }

        return this.postagens.map(postagem => postagem.toString()).join("\n");
    }
}

function main(): void {
    // Criando o microblog
    const microblog = new Microblog();

    // Criando postagens e adicionando ao microblog
    const postagem1 = new Postagem(1, "Minha primeira postagem!");
    const postagem2 = new Postagem(2, "Mais uma postagem!");
    const postagem3 = new Postagem(3, "Postagem super popular!");

    microblog.adicionarPostagem(postagem1);
    microblog.adicionarPostagem(postagem2);
    microblog.adicionarPostagem(postagem3);

    // Curtindo as postagens diretamente pelo Microblog
    microblog.curtirPostagem(1);
    microblog.curtirPostagem(2);
    microblog.curtirPostagem(2);
    microblog.curtirPostagem(3);
    microblog.curtirPostagem(3);
    microblog.curtirPostagem(3);

    // Exibindo as postagens com suas curtidas
    console.log("Postagens após as curtidas:");
    microblog.mostrarPostagens();

    // Excluindo uma postagem
    microblog.excluirPostagem(1); // Excluindo a postagem com id 1

    // Exibindo as postagens após a exclusão
    console.log("Postagens depois da exclusão:");
    microblog.mostrarPostagens();

    // Exibindo a postagem mais curtida
    const maisCurtida = microblog.retornarPostagemMaisCurtida();
    if (maisCurtida) {
        console.log("Postagem mais curtida:");
        console.log(maisCurtida.toString());
    }

    // Exibindo todas as postagens usando o método toString
    console.log("Todas as postagens (toString):");
    console.log(microblog.toString());
}

main();
