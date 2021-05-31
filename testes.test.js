const soma = require("./soma")

describe("Teste TDD - Investtools", () => {
    it("Verifique que 1+1 é igual a 2", () => {
        const a = 1
        const b = 1
        expect(soma.sum(a,b)).toEqual(2)
    })

    it("Verifiqurifique qe que 1+1 não é igual a 7", () => {
        const a = 1
        const b = 1
        expect(soma.sum(a,b)).not.toEqual(7)
    })

    it ("Verifique que no array [1,2,3,4,5] o elemento 3 está contido.", () => {
        const expected = [3]
        const lista = [1,2,3,4,5]
        expect(lista).toEqual(expect.arrayContaining(expected))
    })

    it ("Verifique que no array [6,7,8,9] o elemento “TDD é Top” não está contido.", () => {
        const expected = ["TDD é Top"]
        const lista = [6,7,8,9]
        expect(lista).toEqual(expect.not.arrayContaining(expected))
    })

    it("Verifique que o objeto {attr1: 13} possui o atributo ‘attr1’.", () => {
        const expected = {attr1: 13}
        expect({attr1: 13}).toEqual(expect.objectContaining(expected))

    })

    it("Verifique que o objeto {attr3: 13} não possui o atributo ‘attr1’.", () => {
        const expected = {attr1: 13}
        expect({attr3: 13}).toEqual(expect.not.objectContaining(expected))

    })

    it ("Verifique que /([Invesstools])/ realiza match com as frases", () => {
        const expected = /([Invesstools])/ 
        const frases = ["Não existe concorrente com a investtools para a melhor empresa para se estagiar.", 
                            "Investtools cuida melhor dos seus estagiários que a bloomberg.",
                            "Somos parte do Programa de Formação da Investtools."]
        expect(frases).toEqual(expect.stringMatching(expected))
        //A primeira frase não passa no teste pois a palavra investtools inicia com letra minúscula.

    })

    it("Implemente uma função de soma (num arquivo chamado soma.js) e teste os retornos a operação 1+1:", () => {
        const a = 1
        const b = 1
        expect(soma.sum(a,b)).toEqual(a+b)
    })

    it("Implemente uma função de soma (num arquivo chamado soma.js) e teste os retornos a operação 2+2:", () => {
        const a = 2
        const b = 2
        expect(soma.sum(a,b)).toEqual(a+b)
    })

    it("Implemente uma função de soma (num arquivo chamado soma.js) e teste os retornos a operação 4+5:", () => {
        const a = 4
        const b = 5
        expect(soma.sum(a,b)).toEqual(a+b)
    })

    it("Implemente uma função de soma (num arquivo chamado soma.js) e teste os retornos a operação 6+7:", () => {
        const a = 6
        const b = 7
        expect(soma.sum(a,b)).toEqual(a+b)
    })

    it("Implemente uma função de soma (num arquivo chamado soma.js) e teste os retornos a operação 9+9:", () => {
        const a = 9
        const b = 9
        expect(soma.sum(a,b)).toEqual(a+b)
    })

    it("Teste que o html da página do google contém a tag <body>", async () => {
        const {curly} = require('node-libcurl');
        async function google() {
            const {data} = await curly.get('http://www.google.com')
            return data
        }

        const html = await google()

        const expected = /([<body>])/
        expect(html).toEqual(expect.stringMatching(expected))   

    })









})



// it("Teste que o html da página do google contém a tag <body>", () => {
//     const Curl = require ("node-libcurl").Curl;
//     const curl = new Curl();
//     curl.setOpt("URL","https://www.google.com.br/")
//     curl.setOpt("FOLLOWLOCATION", true)
//     curl.on("end", function(statusCode, body, headers){
//         console.info(statusCode)
//         console.info("---")
//         console.info(body.length)
//         console.info("---")
//         console.info(this.getInfo("TOTAL_TIME"))
//         this.close()
//     })

//     curl.on("error", function(err, errCode){
//         this.close()
//     })

//     curl.perform()

// })