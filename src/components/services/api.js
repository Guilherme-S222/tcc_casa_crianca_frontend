import axios from 'axios'; //Cliente HTTP baseado em promessas para o navegador e Node.js

const api = axios.create({

  baseURL: 'http://10.67.23.241:3333' // etec server

  // baseURL: 'http://10.67.23.52:3333' // etec server maquina 18

  // baseURL: 'http://localhost:3333' // local server
});

export default api;

/*  Explicação do código

Importa a biblioteca axios que é uma biblioteca popular para fazer requisições HTTP em ambientes baseados em Promises (como o navegador ou Node.js).

Cria uma instância do cliente axios utilizando o método create. Essa instância é configurada com uma base URL, que será prefixada em todas as requisições feitas por essa instância.

Define a URL base para todas as requisições feitas por essa instância do Axios. Todas as requisições serão feitas para URLs que começam com 'http://10.67.23.36:3333'.

Exporta a instância configurada do Axios, que agora pode ser importada em outros arquivos da aplicação. Isso é útil para centralizar as configurações e reutilizar a mesma instância em vários lugares do código.

Dessa forma, sempre que você utilizar api.get, api.post, ou outros métodos fornecidos pelo Axios, a URL base 'http://10.67.23.36:3333' será automaticamente prefixada às URLs relativas especificadas nas chamadas.

*/
