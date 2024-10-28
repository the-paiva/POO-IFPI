// Arquivo referente à resolução da questão 5 da atividade extra 2


import { question } from "readline-sync";


class ControleDeAudio{
    Volume: number = 2;

    AumentarVolume(): number{
        if (this.Volume < 10){
            return this.Volume++;
        }

        return this.Volume;
    }

    DiminuirVolume(): number{
        if (this.Volume > 0){
            return this.Volume--;
        }

        return this.Volume;
    }

    LerVolume(): void{
        console.log(`\nVolume: ${this.Volume}`);
    }
}


// Exibe o menu principal do programa
function mostrarMenu(): void{
    console.clear();
    console.log("Caixa de Som - Dolby Atmos 7.1 Surround Cinema AI Remix Deluxe Edition");
    console.log("\nDigite 1 para aumentar o volume");
    console.log("Digite 2 para diminuir o volume");
    console.log("Digite 3 para ler o volume");
    console.log("Digite 4 para encerrar o programa");
}


// Pede um número inteiro ao usuário
function pedirInt(textoDeInput: string): number{
    const input = question(textoDeInput);
    return input ? parseInt(input) : 0;
}


// Limpa a tela após o usuário pressionar ENTER
function enterParaLimparTela(): void{
    console.log("\nPressione ENTER para continuar...");
    question();
}


function main(): void{
    let controlador1: ControleDeAudio = new ControleDeAudio();
    let opcao: number = 0;
    
    while (opcao != 4){
        mostrarMenu();
        opcao = pedirInt("\n> ");

        switch (opcao){
            case 1:
                controlador1.AumentarVolume();
                break;

            case 2:
                controlador1.DiminuirVolume();
                break;

            case 3:
                controlador1.LerVolume();
                enterParaLimparTela();
                break;

            case 4:
                console.log("\nPrograma encerrado!");
                break;

            default:
                console.log("\nOpção Inválida!")
                enterParaLimparTela();
                break;
        }
    }
}


main();
