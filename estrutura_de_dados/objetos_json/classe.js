class Programador {
    constructor(nome, nascimento, casado, linguagensFavoritas = [], trabalhaDesde = null){
        this.nome = nome
        this.nascimento = nascimento
        this.casado = casado
        this.linguagensFavoritas = linguagensFavoritas
        this.trabalhaDesde = trabalhaDesde
    }
}
    const gabriel = new Programador(
        'Leandro Moreira',
        '07/12/1980',
        true,
        ['JavaScript', 'Php', 'Python'],
        2010 );
        const vanessa = new Programador(
            'Vanessa Oliveira',
            '14/12/1980',
            true,
            ['JavaScript', 'Php', 'Python'],
            2010 );

            for(const propriedade in vanessa){
                console.log(`${propriedade}: ${vanessa[propriedade]}`)
            }