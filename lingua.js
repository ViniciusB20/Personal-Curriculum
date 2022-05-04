const languEL = document.querySelector('.bandeira');
const link = document.querySelectorAll('a');

let contato = document.querySelector('#contato');
let profissao = document.querySelector("#profissao");
let educacao = document.querySelector('#educacao');
let idiomas = document.querySelector('#idiomas');
let sobre = document.querySelector('#sobre');
let experiencia = document.querySelector('#experiencia');
let trabalho = document.querySelector('#work');
let interesse = document.querySelector('#interesse');

link.forEach( el => {
    el.addEventListener('click',() => {
        languEL.querySelector('.ativo').classList.remove('ativo');
        el.classList.add('ativo');

        const lingua = el.getAttribute('language');

        contato.textContent = data[lingua].contato;
        profissao.textContent = data[lingua].profissao;
        educacao.textContent = data[lingua].educacao;
        idiomas.textContent = data[lingua].idiomas;
        sobre.textContent = data[lingua].sobre;
        experiencia.textContent = data[lingua].experiencia;
        trabalho.textContent = data[lingua].trabalho;
        interesse.textContent = data[lingua].interesse;
    });
});

var data = {
        "portugues": { 
            "contato": "CONTATO",
            "profissao":"DESIGNER GRÁFICO",
            "educacao": "EDUCAÇÃO",
            "idiomas": "IDIOMAS",
            "sobre":"SOBRE",
            "mim": "MIM",
            "experiencia": "EXPERIÊNCIA",
            "caracteristicas": "CARACTERÍSTICAS",
            "habilidade": "HABILIDADE",
            "trabalho" : "TRABALHO",
            "interesse": "INTERESSE"
            
        },
        "english": { 
            "contato": "CONTACT",
            "profissao":"WEB DESIGNER",
            "educacao": "EDUCATION",
            "idiomas": "LANGUAGES",
            "sobre":"ABOUT",
            "mim": "ME",
            "experiencia": "EXPERIENCE",
            "caracteristicas": "FEATURES",
            "trabalho": "WORK",
            "interesse": "INTERESTS"
        },
    }