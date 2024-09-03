
# Documentação da API de Geração de Relatórios

## Descrição

Esta API permite a geração de relatórios em formato Excel ou PDF com base em dados fornecidos pelo usuário. Os dados são enviados através de requisições HTTP, e a API responde com um arquivo de relatório gerado.

## Endpoints

### 1. Gerar Relatório Excel

**Endpoint:** `POST /report/excel`

**Descrição:** Gera um relatório em formato Excel com base nos dados enviados no corpo da requisição.

**Exemplo de Requisição:**

```bash
POST /report/excel HTTP/1.1
Host: localhost:3000
Content-Type: application/json

[
  { "produto": "Produto A", "servico": "Serviço 1", "tarefa": "Tarefa X" },
  { "produto": "Produto B", "servico": "Serviço 2", "tarefa": "Tarefa Y" },
  { "produto": "Produto C", "servico": "Serviço 3", "tarefa": "Tarefa Z" }
]
```

**Resposta:** O servidor retorna um arquivo Excel (`.xlsx`).

**Exemplo de Resposta:**

- Um arquivo Excel com as colunas **Produto**, **Serviço** e **Tarefa**, contendo os dados fornecidos.

---

### 2. Gerar Relatório PDF

**Endpoint:** `POST /report/pdf`

**Descrição:** Gera um relatório em formato PDF com base nos dados enviados no corpo da requisição.

**Exemplo de Requisição:**

```bash
POST /report/pdf HTTP/1.1
Host: localhost:3000
Content-Type: application/json

[
  { "produto": "Produto A", "servico": "Serviço 1", "tarefa": "Tarefa X" },
  { "produto": "Produto B", "servico": "Serviço 2", "tarefa": "Tarefa Y" },
  { "produto": "Produto C", "servico": "Serviço 3", "tarefa": "Tarefa Z" }
]
```

**Resposta:** O servidor retorna um arquivo PDF (`.pdf`).

**Exemplo de Resposta:**

- Um arquivo PDF contendo as informações de **Produto**, **Serviço** e **Tarefa** de cada item.

---

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
/project-root
│
├── src
│   ├── app.module.ts            # Módulo principal do aplicativo
│   ├── app.controller.ts        # Controlador principal
│   ├── app.service.ts           # Serviço principal
│   ├── report
│   │   ├── report.module.ts     # Módulo de relatórios
│   │   ├── report.controller.ts # Controlador de relatórios
│   │   └── report.service.ts    # Serviço de geração de relatórios
├── .env                         # Configurações de ambiente
├── .gitignore                   # Arquivos ignorados pelo Git
├── package.json                 # Dependências do projeto
├── tsconfig.json                # Configurações do TypeScript
└── README.md                    # Documentação do projeto
```

### Arquivos Relevantes

- **`report.module.ts`:** Define o módulo de relatórios.
- **`report.controller.ts`:** Controla as rotas relacionadas à geração de relatórios.
- **`report.service.ts`:** Contém a lógica para geração de arquivos Excel e PDF.

## Configuração e Execução

### Instalação das Dependências

Antes de executar o projeto, instale as dependências:

```bash
npm install
```

### Execução do Projeto

Para rodar a aplicação localmente:

```bash
npm run start
```

### Testando a API

Utilize ferramentas como Postman ou Insomnia para enviar requisições aos endpoints:

- Para gerar um relatório Excel, envie uma requisição `POST` para `/report/excel` com os dados no corpo.
- Para gerar um relatório PDF, envie uma requisição `POST` para `/report/pdf` com os dados no corpo.

### Exemplos de Dados

Os exemplos de dados a seguir podem ser utilizados para testar a API:

```json
[
  { "produto": "Produto A", "servico": "Serviço 1", "tarefa": "Tarefa X" },
  { "produto": "Produto B", "servico": "Serviço 2", "tarefa": "Tarefa Y" },
  { "produto": "Produto C", "servico": "Serviço 3", "tarefa": "Tarefa Z" }
]
```

## Dependências

As principais bibliotecas utilizadas no projeto são:

- **exceljs:** Para geração de arquivos Excel.
- **pdfkit:** Para geração de arquivos PDF.



