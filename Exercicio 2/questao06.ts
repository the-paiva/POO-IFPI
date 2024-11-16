// Código referente à questão 06


/* Reescreva o exemplo abaixo, mantendo a quebra de linhas usando template
strings e os valores Ely, 120.56 e TypeScript venham de variáveis declaradas
separadamente e “interpoladas” na string:
Ely
My payment time is 120.56
and
my preffered language is TypeScript */


function main(): void{
    const name: string = "Ely";
    const paymentTime: number = 120.56;
    const prefferedLanguage: string = "TypeScript";

    const template: string = `
    ${name}
    My payment time is ${paymentTime}
    and
    my preffered language is ${prefferedLanguage}
    `;

    console.log(template);
}


main();
