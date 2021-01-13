const porta = 80;
const express = require("express");
const app = express();
/*const connection = require("./database/database");*/
//Database
/*connection
    .authenticate()
    .then(()=>{
        console.log("Conctado ao banco de dados")
    })
    .catch((err)=>{
        console.log("Erro ao conectar ao banco de dados")
    })*/

    
app.set('view engine','ejs');
app.use(express.static('public'));

var sobremim=[
    {key:"resumo", texto:"Olá, caro(a) visitante. Seja bem-vindo(a) ao meu site pessoal. Tenho 23 anos, sou programador, designer, produtor de conteúdos digitais e nas horas vagas componho poesias."},
    {key:"resumo", texto:"Sou estudante de engenharia elétrica pela UFC mas quem eu sou vai além dos cálculos matemáticos e das linhas de código. Gosto de criar, inovar e resolver problemas. Desenvolvi este site para divulgar alguns de meus projetos."},
    {key:"Programador", texto:"Ao longo do curso de engenharia eu descobri uma das minhas maiores paixões: desenvolver softwares! Nos últimos anos tenho me dedicado a estudar diversas ferramentas que compõem o mundo da programação. Aprendi tecnologias como C, Arduino, Java e Python. Atualmente estou focando meus esforços no desenvolvimento Web. Sou desenvolvedor Front-end e estou  aprendendo o desenvolvimento Back-end."},
    {key:"Designer", texto:"Durante minha adolescência, criei uma página no Facebook onde eu fazia publicações com trechos de músicas de rap. Durante esse processo eu aprendi a fazer artes gráficas com o Canva. Trabalhei como produtor digital para a startup de impacto socioambiental, a Robótica Sustentável. Nesse período, eu ajudei a criar o site da empresa, a arte do mascote e as publicações no Instagram. Atualmente estou focado nos estudos de Web Design, Ui design e futuramente pretendo me aprofundar em UX design. "},
    {key:"Poeta", texto:"Não menos importante, existe algo que gosto de fazer desde criança: compor poesias. Eu guardo minhas composições como fotografias que registram minhas opiniões, percepções e sentimentos de um determinado momento da vida. Então resolvi publicá-las neste site em breve."},
    
]
var itensMenu=[
    {item:"Home", link:"#"},
    {item:"Sobre mim", link:"#sobremim"},
    {item:"Contato", link:"#contato"},
    {item:"Blog", link:"#"},
]

var areas =[
    "Front-end (Web Design)",
    "Back-end (banco de dados)",
    "Gestão e produtividade",
    "Linguagens de programação"
]

var conhecimentos = [
    {
        nome: "HTML",
        area: "Front-end (Web Design)",
        description:"Domino o HTML e sempre o utilizo da forma mais otimizada possível, respeitando as boa práticas de SEO.",
        iconTag:"fab fa-html5"

    },

    {
        nome: "CSS",
        area: "Front-end (Web Design)",
        description:"Tenho conhecimento de CSS o suficiente para criara um página WEB responsiva. Geralmente utilizo flexbox e css grid em meus projetos.",
        iconTag:"fab fa-css3-alt"

    },

    {
        nome: "Design",
        area: "Front-end (Web Design)",
        description:"Aprendi design gráfico e web design na prática enquanto fazia meus projetos. Atualmente eu estudo UI design e Ux design.",
        iconTag:"fas fa-pencil-alt"

    },

    {
        nome: "Javascript",
        area: "Front-end (Web Design)",
        description:"Tenho uma báse sólida em lógica de programação. Geralmente, utilizo JS no front-end para manipular o DOM.",
        iconTag:"fab fa-js"

    },

    {
        nome: "Boostrap",
        area: "Front-end (Web Design)",
        description:"Utilizei esse framework enquanto estava desenvolvendo meu primeiro projeto de back-end. Particularmente, eu prefiro usar HTML e CSS puros, mas caso haja necessidade, consigo utilizar essa ferramenta revisando a documentação.",
        iconTag:"fab fa-bootstrap"

    },

    {
        nome: "Git e GitHub",
        area: "Gestão e produtividade",
        description:"  ",
        iconTag:"fab fa-github"

    },

    {
        nome: "Node js",
        area: "Back-end (banco de dados)",
        description:"",
        iconTag:"fab fa-node"

    },

    {
        nome: "MySql",
        area: "Back-end (banco de dados)",
        description:"",
        iconTag:"fas fa-database"

    },

    {
        nome: "Linguagem C",
        area: "Linguagens de programação",
        description:"Aprendi C na Universidade. Se hoje tenho uma base sólida de lógica de programação, eu devo a essa liguagem.",
        iconTag:"fab fa-cuttlefish"

    },

    {
        nome: "Arduino",
        area: "Linguagens de programação",
        description:"Aprendi a programar o Arduino por Hobby. Hoje estou desenvolvendo um curso online de arduino.",
        iconTag:"fas fa-microchip"

    },

    {
        nome: "Excel",
        area: "Gestão e produtividade",
        description:"Aprendi excel na prática. Fazia controle de estoque,Controle financeiro e até já desenvolvi um sitema de caixa usando o excel.",
        iconTag:"fas fa-table"

    },
]
app.get("/", function(req,res){
    res.render("index",{
        sobremim:sobremim,
        itensMenu:itensMenu,
        conhecimentos:conhecimentos,
        areas:areas,
        a2:"b2",
        a3:"b3"
    });
})

app.listen(porta, function(err){
    if(err){
        console.log("Ocorreu algum erro!")
    }else{
        console.log("Servidor rodando com sucesso na porta "+porta);
    }
});