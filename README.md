# Sistema de dragões

Aplicação onde usuários podem se cadastrar, fazer login e gerenciar dragões, incluindo adicionar, editar e remover informações da lista.

## Features

- [x] Página de login.
  - Única página disponível se não estiver logado;
  - Criar um usuário básico para acesso;
- [x] Uma página de lista de dragões.
  - Os nomes devem estar em ordem alfabética;
  - A partir da lista, deverá ser possível remover e alterar as informações dos dragões;
- [x] Uma página para cadastro de dragões.
- [x] Uma página com os detalhes de um dragão específico.
  - Os seguintes dados devem ser apresentados na página: Nome, tipo e data de criação;

## Pré-requisitos

- Node 20+
- yarn ou npm

## Rodando a aplicação

```bash
# Clone este repositório:
$ git clone git@github.com:gabrieljezewski/dragons-desafio.git
```

```bash
# Acesse a pasta do projeto no terminal/cmd
$ cd dragons-desafio
```

```bash
# Instale as dependências:
$ yarn install
```

```bash
# Execute a aplicação em modo de desenvolvimento:
$ yarn run dev
```

```bash
# Usuário para acesso:
$ admin@email.com
$ 123456
```

Após isso, no console do terminal irá apresentar em qual url:porta o servidor estará rodando. Basta copiar e acessar este endereço em seu browser.

## Arquitetura

- `pages`: Contém as páginas que compõem as diferentes seções da aplicação.
- `components`: Componentes reutilizáveis em todo o projeto.
- `contexts`: Contexts do React para gerenciamento de estado global.
- `routes`: Definições das rotas da aplicação.
- `services`: Módulos de integração com APIs ou lógica externa.
- `styles`: Estilos globais e temas.
- `utils`: Funções utilitárias e helpers.
- `validation`: Schemas de validação para formulários.

## Stacks

- `React`: Framework para construção de interfaces.
- `TypeScript`: Superset do JavaScript que adiciona tipagem estática.
- `Styled-components`: Biblioteca para escrever estilos CSS dentro do JavaScript.
- `Axios`: Cliente HTTP para realizar requisições a APIs externas.
- `react-router-dom`: Gerenciador de rotas.
- `yup`: Biblioteca para validação de formulário.
- `react-hook-form`: Biblioteca para gerenciamento de formulários.
