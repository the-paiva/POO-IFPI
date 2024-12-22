// Arquivo referente à questão 02


class Hora
{
    private _horas: number
    private _minutos: number
    private _segundos: number


    constructor(_horas: number, _minutos: number, _segundos: number) 
    {
        this._horas = _horas;
        this._minutos = _minutos;
        this._segundos = _segundos;
    }


    // Retorna individualmente a hora atual em número
    public Ler_horas(): number 
    {
        this._horas = new Date().getHours();
        return this._horas;
    }


    // Retorna individualmente o minuto atual em número
    public Ler_minutos(): number
    {
        this._minutos = new Date().getMinutes();
        return this._minutos;
    }


    // Retorna individualmente o segundo atual em número
    public Ler_segundos(): number
    {
        this._segundos = new Date().getSeconds();
        return this._segundos;
    }


    // Retorna o horário atual completo em uma string no seguinte formato: HH-MM-SS
    public LerHorarioFormatado(): string
    {
        const _horas = this.Ler_horas();
        const _minutos = this.Ler_minutos();
        const _segundos = this.Ler_segundos();

        return `${_horas}-${_minutos}-${_segundos}`;
    }
}


function main(): void
{
    const hora = new Hora(0, 0, 0)

    console.log("Hora atual:", hora.Ler_horas()); // Teste da hora
    console.log("Minuto atual:", hora.Ler_minutos()); // Teste dos _minutos
    console.log("Segundo atual:", hora.Ler_segundos()); // Teste dos _segundos
    console.log("Horário formatado:", hora.LerHorarioFormatado()); // Teste do formato completo
}


main();
