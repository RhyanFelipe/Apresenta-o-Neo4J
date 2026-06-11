const data = {
oque: {
icon: '<i class="fa-solid fa-circle-nodes"></i>',
title: "O que é o Neo4j?",
content: `
<p>
O Neo4j é um banco de dados NoSQL orientado a grafos.
Ele foi criado para trabalhar com dados que possuem muitas conexões entre si.
</p>

<div class="mini-graph">
Usuário ─── Segue ─── Usuário
│ │
└──── Curte ─── Postagem
</div>

<h3>Principais conceitos</h3>

<ul>
<li><strong>Nós:</strong> representam entidades, como pessoas, produtos ou empresas.</li>
<li><strong>Relacionamentos:</strong> representam ligações entre os nós.</li>
<li><strong>Propriedades:</strong> são informações dos nós e relacionamentos.</li>
</ul>
`
},

historia: {
icon: '<i class="fa-solid fa-clock-rotate-left"></i>',
title: "História do Neo4j",
content: `
<p>
O Neo4j foi criado em 2007 pela empresa Neo4j Inc.
Ele surgiu para resolver problemas onde os relacionamentos entre os dados eram tão importantes quanto os próprios dados.
</p>

<div class="mini-graph">
2007 ─── Criação ─── Neo4j
│ │
└──── Evolução ─── Banco de Grafos
</div>

<ul>
<li>Criado em 2007.</li>
<li>Desenvolvido em Java.</li>
<li>Referência mundial em banco de dados de grafos.</li>
<li>Muito usado em recomendações, fraudes, IA e redes sociais.</li>
</ul>
`
},

funciona: {
icon: '<i class="fa-solid fa-diagram-project"></i>',
title: "Como o Neo4j Funciona?",
content: `
<p>
O Neo4j funciona conectando dados diretamente, sem depender de várias tabelas e JOINs como em bancos relacionais.
</p>

<div class="mini-graph">
Pessoa ─── TRABALHA_EM ─── Empresa
│ │
└──── COMPROU ─── Produto
</div>

<h3>Exemplo prático</h3>

<ul>
<li>Uma pessoa pode trabalhar em uma empresa.</li>
<li>Essa pessoa pode comprar produtos.</li>
<li>Essas conexões podem ser consultadas rapidamente.</li>
</ul>
`
},

cypher: {
icon: '<i class="fa-solid fa-code"></i>',
title: "Linguagem Cypher",
content: `
<p>
Cypher é a linguagem usada para consultar e manipular dados dentro do Neo4j.
Ela foi criada para ser visual e intuitiva.
</p>

<h3>Exemplo de criação</h3>

<div class="code-box">
CREATE (p:Pessoa {nome:'Ana'})
</div>

<h3>Exemplo de consulta</h3>

<div class="code-box">
MATCH (p:Pessoa)
RETURN p
</div>

<p>
A estrutura lembra muito a forma de um grafo, usando parênteses para nós e setas para relacionamentos.
</p>
`
},

sql: {
icon: '<i class="fa-solid fa-database"></i>',
title: "Neo4j vs Banco Relacional",
content: `
<p>
Bancos relacionais, como MySQL e PostgreSQL, organizam dados em tabelas.
Já o Neo4j organiza os dados em forma de grafo.
</p>

<div class="compare">
<div>
<h3>SQL</h3>
<ul>
<li>Tabelas</li>
<li>Linhas e colunas</li>
<li>JOINs</li>
<li>Ideal para dados tabulares</li>
</ul>
</div>

<div>
<h3>Neo4j</h3>
<ul>
<li>Grafos</li>
<li>Nós e relacionamentos</li>
<li>Conexões diretas</li>
<li>Ideal para dados conectados</li>
</ul>
</div>
</div>
`
},

instagram: {
icon: '<i class="fa-brands fa-instagram"></i>',
title: "Instagram e Neo4j",
content: `
<p>
O Instagram é um ótimo exemplo para entender grafos, porque tudo dentro da plataforma é baseado em conexões.
</p>

<div class="mini-graph">
Usuário ─── cria ─── Postagem
│ │
│ ├── recebe ─── Curtida
│ │
├── faz ─── Comentário
│
└── segue ─── Usuário

Postagem ─── usa ─── Hashtag
</div>

<h3>Como o Neo4j enxerga o Instagram?</h3>

<ul>
<li>Usuários são nós.</li>
<li>Postagens são nós.</li>
<li>Curtidas, comentários e seguidores são relacionamentos.</li>
<li>Hashtags ajudam a conectar conteúdos parecidos.</li>
</ul>

<h3>Onde isso ajuda?</h3>

<ul>
<li>Sugestão de perfis para seguir.</li>
<li>Amigos em comum.</li>
<li>Recomendação de posts.</li>
<li>Identificação de tendências.</li>
</ul>
`
},

linkedin: {
icon: '<i class="fa-brands fa-linkedin"></i>',
title: "LinkedIn e Neo4j",
content: `
<p>
O LinkedIn funciona praticamente como uma grande rede de relacionamentos profissionais.
</p>

<div class="mini-graph">
Pessoa ─── trabalha em ─── Empresa
│ │
├── possui ─── Habilidade
│
├── conhece ─── Pessoa
│
└── candidata-se ─── Vaga
</div>

<h3>Como os grafos ajudam?</h3>

<ul>
<li>Encontrar conexões em comum.</li>
<li>Sugerir pessoas que talvez você conheça.</li>
<li>Recomendar vagas compatíveis com habilidades.</li>
<li>Encontrar candidatos para empresas.</li>
</ul>
`
},

spotify: {
icon: '<i class="fa-brands fa-spotify"></i>',
title: "Spotify e Neo4j",
content: `
<p>
O Spotify usa relações entre usuários, músicas, artistas, gêneros e playlists para gerar recomendações.
</p>

<div class="mini-graph">
Usuário ─── ouviu ─── Música
│ │
│ ├── pertence a ─── Artista
│ │
│ └── possui ─── Gênero
│
└── criou ─── Playlist
</div>

<h3>Aplicações</h3>

<ul>
<li>Recomendação de músicas.</li>
<li>Descoberta semanal.</li>
<li>Artistas semelhantes.</li>
<li>Playlists automáticas.</li>
</ul>
`
},

netflix: {
icon: '<i class="fa-solid fa-film"></i>',
title: "Netflix e Neo4j",
content: `
<p>
A Netflix trabalha com conexões entre usuários, filmes, séries, gêneros, atores e avaliações.
</p>

<div class="mini-graph">
Usuário ─── assistiu ─── Filme
│ │
│ ├── pertence a ─── Gênero
│ │
│ └── possui ─── Ator
│
└── avaliou ─── Série
</div>

<h3>Como isso aparece para o usuário?</h3>

<ul>
<li>Filmes recomendados.</li>
<li>Séries semelhantes.</li>
<li>Catálogo personalizado.</li>
<li>Sugestões diferentes para cada perfil.</li>
</ul>
`
},

waze: {
icon: '<i class="fa-brands fa-waze"></i>',
title: "Waze e Neo4j",
content: `
<p>
O Waze é um dos exemplos mais fáceis de entender, porque mapas e rotas podem ser representados como grafos.
</p>

<div class="mini-graph">
Casa ─── Rua A ─── Cruzamento
│
├── Rua B ─── Trabalho
│
└── Rua C ─── Rota Alternativa
</div>

<h3>Como o grafo funciona?</h3>

<ul>
<li>Cruzamentos podem ser nós.</li>
<li>Ruas podem ser relacionamentos.</li>
<li>O sistema calcula caminhos possíveis.</li>
<li>Rotas com trânsito podem receber peso maior.</li>
</ul>

<h3>Benefícios</h3>

<ul>
<li>Menor caminho.</li>
<li>Melhor rota.</li>
<li>Rotas alternativas.</li>
<li>Desvio de trânsito.</li>
</ul>
`
},

ia: {
icon: '<i class="fa-solid fa-brain"></i>',
title: "IA, Fraudes e Grafos",
content: `
<p>
O Neo4j também é muito usado em inteligência artificial, detecção de fraudes e grafos de conhecimento.
</p>

<div class="mini-graph">
Conta A ─── transferiu ─── Conta B
│ │
└──── mesmo CPF ─── Conta C ─┘

Usuário ─── pesquisa ─── Informação
</div>

<h3>Fraudes</h3>

<ul>
<li>Detecta redes suspeitas.</li>
<li>Identifica contas conectadas.</li>
<li>Analisa transações incomuns.</li>
</ul>

<h3>Inteligência Artificial</h3>

<ul>
<li>Criação de Knowledge Graphs.</li>
<li>Melhora respostas de sistemas inteligentes.</li>
<li>Relaciona informações de forma contextual.</li>
</ul>
`
},

conclusao: {
icon: '<i class="fa-solid fa-flag-checkered"></i>',
title: "Conclusão",
content: `
<p>
O Neo4j é uma solução moderna para lidar com dados altamente conectados.
</p>

<div class="mini-graph">
Dados ─── Conexões ─── Conhecimento
│ │
└──── Neo4j ─── Aplicações Reais
</div>

<ul>
<li>É ideal para redes sociais, recomendações, rotas e fraudes.</li>
<li>Trabalha com nós, relacionamentos e propriedades.</li>
<li>Facilita consultas que seriam complexas em bancos relacionais.</li>
<li>Está cada vez mais presente em IA e sistemas inteligentes.</li>
</ul>

<h3>Obrigado!</h3>
<p>Rhyan Felipe • Rhuan Guilherme • Jose Gabryel</p>
`
}
};

function openModal(key) {
const modal = document.getElementById("modal");
const modalIcon = document.getElementById("modalIcon");
const title = document.getElementById("title");
const content = document.getElementById("content");

modalIcon.innerHTML = data[key].icon;
title.innerHTML = data[key].title;
content.innerHTML = data[key].content;

modal.style.display = "flex";
}

function closeModal() {
document.getElementById("modal").style.display = "none";
}

window.addEventListener("click", function (e) {
const modal = document.getElementById("modal");

if (e.target === modal) {
closeModal();
}
});

window.addEventListener("keydown", function (e) {
if (e.key === "Escape") {
closeModal();
}
});