(async () => {

    const database = require('./db');
    const Responsavel = require('./models/CEV_responsaveis');
    const Filho = require('./models/CEV_filho');
    await database.sync();

    const novoResponsavel = await Responsavel.create({

        nome: "aa",
    
        nacionalidade: "aa",
    
        cpf: "casa",
    
        doc: "aa",
    
        endereco: "aa",
    
        contato: "aa",

    })

    /*console.log(novoResponsavel);*/

    const novoFilho = await Filho.create({

        nome: 'victor',

        id_responsavel: novoResponsavel.id,

        data_nasc: '15/02/2005',

        sexo: 'M',

        nacionalidade: 'brasil',

        cert_nasc: '12312412',

        cpf: '1241241',

        endereco: 'aaaa',

        contato: '9982318321',

    })

    console.log(novoFilho);

})();