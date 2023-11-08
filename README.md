# Lista de Contatos em React

Este é um projeto de uma aplicação de lista de contatos desenvolvida em React.

## Funcionalidades

- Adicionar novos contatos com nome, telefone, e-mail, foto e notas.
- Visualizar detalhes de um contato.
- Editar informações de um contato.
- Pesquisa na lista de contatos
- Excluir contatos.

## Como Executar o Projeto

1. Certifique-se de ter o Node.js instalado na sua máquina.
2. Clone este repositório para o seu computador.
3. Abra o terminal e navegue até o diretório do projeto.
4. Execute o comando `npm install` para instalar as dependências do projeto.
5. Em seguida, execute `npm start` para iniciar a aplicação em modo de desenvolvimento.
6. Abra o navegador e acesse [http://localhost:3000](http://localhost:3000) para visualizar o projeto.

## Como Executar o Projeto com Docker

1. Certifique-se de ter o Docker e o Docker Compose instalados na sua máquina.
2. Clone este repositório para o seu computador.
3. Abra o terminal e navegue até o diretório do projeto.
4. Execute o seguinte comando para construir e iniciar o container:

```bash
docker-compose up -d
```

Após a construção e inicialização do container, a aplicação estará disponível em http://localhost:3000.

## Estrutura de Diretórios

- `src/`: Contém o código-fonte da aplicação.
  - `Components/`: Componentes reutilizáveis.
  - `Pages/`: Páginas principais da aplicação.
  - `Store/`: Configurações do Redux e Reducers.
  - `Utils/`: Utilitários e funções auxiliares.
  - `App.js`: Arquivo principal da aplicação.

## Tecnologias Utilizadas

- React
- Redux
- React Router (para navegação entre páginas)
- Estilização: (styled-components)


