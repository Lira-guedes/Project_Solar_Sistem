# Solar Sistem
<p>Este projeto é uma aplicação React que apresenta informações sobre o sistema solar, incluindo planetas e missões espaciais. A interface é intuitiva e permite que os usuários explorem detalhes sobre cada planeta e suas respectivas missões.</p>

<h3>Tecnologias Utilizadas</h3>
<ul>
    <li><strong>React</strong>: Biblioteca JavaScript para construção de interfaces de usuário.</li>
    <li><strong>PropTypes</strong>: Para validação das propriedades dos componentes React.</li>
    <li><strong>CSS</strong>: Para estilização da aplicação.</li>
    <li><strong>Jest</strong> e <strong>React Testing Library</strong>: Para testes de componentes e funcionalidades.</li>
</ul>

<h3>Funcionalidades</h3>
<ul>
    <li><strong>Exibição de Planetas</strong>: A aplicação exibe uma lista de planetas com suas respectivas imagens e nomes.</li>
    <li><strong>Informações sobre Missões</strong>: Cada missão espacial é apresentada com detalhes como nome, ano, país e destino.</li>
    <li><strong>Componentização</strong>: A estrutura do projeto é modular, com componentes dedicados a diferentes partes da interface, como <code>Header</code>, <code>MissionCard</code>, <code>PlanetCard</code> e <code>Title</code>.</li>
    <li><strong>Validação de Propriedades</strong>: Utiliza <code>PropTypes</code> para garantir que os componentes recebam as propriedades corretas.</li>
</ul>

<h3>Estrutura do Projeto</h3>
<pre>
/projeto-sistema-solar
├── src
│   ├── components
│   │   ├── Header.jsx
│   │   ├── MissionCard.jsx
│   │   ├── Missions.jsx
│   │   ├── PlanetCard.jsx
│   │   ├── SolarSystem.jsx
│   │   └── Title.jsx
│   ├── data
│   │   ├── missions.js
│   │   └── planets.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── setupTests.js
└── public
    └── index.html
</pre>

<h3>Instalação</h3>
<ul>
    <li><strong>Clone o repositório</strong>:
        <pre>git clone https://github.com/seu-usuario/projeto-sistema-solar.git</pre>
    </li>
    <li><strong>Navegue até o diretório do projeto</strong>:
        <pre>cd projeto-sistema-solar</pre>
    </li>
    <li><strong>Instale as dependências</strong>:
        <pre>npm install</pre>
    </li>
    <li><strong>Inicie a aplicação</strong>:
        <pre>npm start</pre>
    </li>
</ul>
