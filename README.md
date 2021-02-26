<h1> API do CRIS </h1>

<h6> CRIS, um aplicativo para smartphones que tem como propósito a mesma missão de São Cristóvão que é ter firmeza e vigilância para que todos cheguem no destino sem acidentes!
Essa API faz gerenciamento dos usuarios e tratamento dos dados de acidentes para exibir no mapa de calor.
 </h6>

## Tecnologias

<div>
<p align="center">
<img src="https://miro.medium.com/max/1200/1*nSuwUaZxQyBsN3-eUwudSg.png"  /> 
 </p>
</div>
<p align="center">
<a href="https://www.typescriptlang.org/">Typescript</a>&nbsp &nbsp &nbsp
 <a href="https://nodejs.org/en/">Node JS</a> &nbsp &nbsp &nbsp <a href="https://www.postgresql.org/">PostgresSQL</a> &nbsp &nbsp &nbsp 
<a href="https://www.docker.com/">Docker</a> &nbsp &nbsp &nbsp
</p>

## Rotas

 <h4>/users</h4> 
  criação de novos usuarios:
  Dados de entrada:
  <pre>
  <code>
  HTTP METHOD: POST
  {
    name: String,
    email: String,
    password: String,
  }
  </code>
  </pre>
 <h4>/sessions</h4> 
  autenticação gerando token JWT.
  <pre>
  <code>
  HTTP METHOD: POST
  {
    name: String,
    email: String,
  }
 
  </code>
  </pre>
 <h4>/geolocations</h4>
  trás informações de geolocalização e alguns detalhes sobre acidentes ocorridos em Recife-PE.
 
 
 <code>
 HTTP METHOD: POST
 </code>


<p align="center">
<a href="http://dados.recife.pe.gov.br/organization/companhia-de-transito-e-transporte-urbano-do-recife-cttu">Fonte dos Dados</a>&nbsp &nbsp &nbsp
 
</p>
   
  ## API Online:
 
<p align="center">
https://api.crisapp.tk/
 </p>
