# ⚙️ Etapa 2: APIs, Web Services e Persistência de Dados Distribuída

Este documento serve como diretriz mestre de engenharia e repositório de evidências para a **Etapa 2: Desenvolvimento de APIs, Web Services e Persistência**. Ele foi estruturado para orientar o desenvolvimento prático do backend distribuído e permitir o acompanhamento e auto-gestão das atividades pelos alunos.

---

## 🎯 Rubricas de Avaliação desta Etapa

Ao final desta Etapa, cada aluno será avaliado individualmente nestas 6 competências (incluindo oportunidades de desenvolvimento e reavaliação):

1. **H21a-ADS-CST - Aplicar corretamente os padrões de codificação para o desenvolvimento da API.**: Gerenciar e documentar serviços de TI, de forma clara e objetiva (Reavaliação teórica e prática a partir do gerenciamento de serviços no backend em [src/backend/](src/backend/)).
2. **H23a-ADS-CST - Modelar os dados da API dentro do contexto levantado.**: Desenvolver uma arquitetura de aplicação distribuída (Medido no código em [src/backend/](src/backend/) e na seção [Modelagem da Aplicação e Arquitetura de Dados](#2-modelagem-da-aplicacao-e-arquitetura-de-dados)).
3. **H23b-ADS-CST - Definir corretamente os recursos e as rotas da API.**: Gerenciar uma arquitetura de aplicação distribuída, testando, implantando e avaliando a solução (Medido na seção [Instruções de Implantação e DevOps](#5-instrucoes-de-implantacao-e-devops)).
4. **H23d-ADS-CST - Implementar o processo de autenticação de usuário do sistema.**: Desenvolver APIs e Web Services (Medido na seção [Especificação Avançada de Endpoints](#3-especificacao-avancada-de-endpoints) e atualizações no design de contratos).
5. **H24a-ADS-CST - Definir e documentar a arquitetura da aplicação distribuída.**: Planejar e documentar APIs e Web Services, de forma clara e objetiva (Medido em [src/backend/](src/backend/) e na construção real dos endpoints).
6. **H24b-ADS-CST - Projetar a arquitetura baseada em API.**: Gerenciar APIs e Web Services, testando, implantando e avaliando a solução (Medido na seção [Estratégia e Relatório de Testes Automatizados](#4-estrategia-e-relatorio-de-testes-automatizados)).
7. **H25a-ADS-CST - Selecionar e avaliar corretamente o modelo de dados NoSQL para o contexto da aplicação distribuída.**: Planejar e documentar Banco de dados No-SQL, de forma clara e objetiva (Medido em [src/backend/](src/backend/) e na construção real dos endpoints).
8. **H25b-ADS-CST - Implementar corretamente as funcionalidades que envolvem o banco de dados NoSQL para armazenamento e recuperação de dados.**: Planejar e documentar Banco de dados No-SQL, de forma clara e objetiva (Medido em [src/backend/](src/backend/) e na construção real dos endpoints).
9. **H27a-ADS-CST - Desenvolver testes de unidade.**: Gerenciar APIs e Web Services, testando, implantando e avaliando a solução (Medido na seção [Estratégia e Relatório de Testes Automatizados](#4-estrategia-e-relatorio-de-testes-automatizados)).

---

## 📅 QUADRO DE CONTRIBUIÇÃO REAL (ETAPA 2)

**Atenção alunos:** Preencham esta tabela para atualizar o andamento das tarefas e quem foi o responsável técnico pela construção do backend. Os nomes, usuários e links de evidências devem corresponder aos entregáveis em [src/backend/](src/backend/).

- **Status admitidos**: `⌛ Não Iniciado` | `📝 Em Progresso` | `✔️ Entregue`
- **Autoria Git**: Indica se há commits desse estudante nos arquivos da tarefa.

**Atividades Semanais desta Etapa** (ver [Cronograma do Semestre](contexto.md#-cronograma-do-semestre-semana--periodo)):
- `ATV2.1` — Desenvolvimento de Funcionalidades - API (Semanas 5 a 8)
- `ATV2.2` — Testes - API (Semana 9)

| Rubrica Curricular | ID Tarefa | Atividade Semanal | Descrição Detalhada da Tarefa | Estudante Responsável | GitHub Username | Status de Entrega | Evidência/Seção Temática | Autoria Git |
| :---: | :---: | :---: | :--- | :--- | :---: | :---: | :--- | :---: |
| **H36b** | `T2.1` | `ATV2.1` | Configuração do Boilerplate da API, Roteamento e Inicialização | Pedro Ivo | `PedroD98` | `✔️ Entregue` | [Instalação/README](../src/backend/README.md) | [ ] |
| **H36b** | `T2.2` | `ATV2.1` | Modelagem e Persistência de Dados (Conexão DB, ORM, Schemas) | [Nome do Aluno 2] | `username2` | `⌛ Não Iniciado` | [Seção 2.1](#21-schema-e-diagrama-entidade-relacionamento) | [ ] |
| **H36b** | `T2.3` | `ATV2.1` | Implementação de Endpoints CRUD e Lógica de Negócios Principal | [Nome do Aluno 3] | `username3` | `⌛ Não Iniciado` | [Seção 3.0](#3-especificação-avançada-de-endpoints) | [ ] |
| **H36b** | `T2.4` | `ATV2.1` | Mecanismo de Segurança da API (Autenticação/Autorização JWT) | Pedro Ivo | `PedroD98` | `✔️ Entregue` | [Seção 3.3](#33-segurança-e-autorização) | [ ] |
| **H35b** | `T2.5` | `ATV2.1` | Gateway, Integração de Serviços Web e Clientes HTTP Externos | Kelven Rodrigues da Silva | `puckelvensilva` | `✔️ Entregue` | [Seção 2.2](#22-integracao-e-infraestrutura-distribuida) | [ ] |
| **H36c** | `T2.6` | `ATV2.2` | Desenvolvimento de Testes Automatizados (Unitários/Integração) | João Pedro Lopes | `JoaoLopes994` | `📝 Em Progresso` | [Seção 4.0](#4-estratégia-e-relatório-de-testes-automatizados) | [ ] |
| **H35c** | `T2.7` | `ATV2.1` | Construção de Dockerfile e Configuração de docker-compose | Kelven Rodrigues da Silva | `puckelvensilva` | `✔️ Entregue` | [Seção 5.1](#51-conteinerização-de-serviços) | [ ] |
| **H36c** | `T2.8` | `ATV2.2` | Proposta de Implantação e Pipeline de CI/CD Backend | [Nome do Aluno 5] | `username5` | `⌛ Não Iniciado` | [Seção 5.2](#52-proposta-de-infraestrutura-de-deploy-e-ambiente-em-produção) | [ ] |

---

# 1. Escopo e Objetivos do Backend

O backend do sistema **Agiliza** é responsável por centralizar a lógica de negócios da plataforma, expondo uma API REST desenvolvida em **NestJS** (Node.js e TypeScript). Ele atende tanto ao aplicativo móvel em React Native quanto ao painel web em React.js, focando no gerenciamento de horários, regras operacionais e controle de concorrência para evitar agendamentos simultâneos (*double booking*).

### Módulos do Sistema
* **Autenticação e Perfis (Identity)**: Gerencia o cadastro e acesso dos perfis de Cliente, Profissional e Administrador/Lojista (RF-001) usando autenticação via JWT e controle de permissões por perfil (RBAC).
* **Core de Agendamentos**: Processa a criação de reservas (RF-006), calcula os intervalos livres com base na duração dos serviços (RF-005) e valida a concorrência de horários para evitar choques na grade (RNF-005).
* **Catálogo e Gestão**: Permite cadastrar e alterar dados do estabelecimento (RF-002), catálogo de serviços e combos (RF-004), além dos horários de trabalho, folgas e bloqueios dos profissionais (RF-008).
* **Fidelidade e Avaliações**: Trata as regras de pontuação pós-serviço (RF-014) e registra o histórico de notas e avaliações recebidas (RF-013).
* **Integrações Externas**: Envia e-mails transacionais (confirmação, lembretes e cancelamentos) consumindo serviços externos de forma assíncrona com Axios (RF-010).

### Tecnologias Utilizadas
* **Backend**: Node.js com **NestJS**, mantendo a estrutura organizada em módulos desacoplados.
* **Banco de Dados**: **MySQL 8.0**, utilizando pool de conexões gerenciado pelo ORM para garantir consistência e integridade referencial nas transações.
* **Segurança**: Criptografia de senhas com `bcrypt` no banco e proteção de endpoints privados via JWT (HS256) validado por Guards.

### Volumetria e Desempenho
A API opera no modelo *stateless*, autenticando requisições diretamente via JWT sem persistir dados de sessão na memória do servidor. As rotas e consultas foram estruturadas para processar a busca e o cálculo de horários livres dentro do limite aceitável de resposta estabelecido no projeto (tempo inferior a 3 segundos, conforme o RNF-002), assegurando uma boa usabilidade no aplicativo móvel e mantendo a base de código modular para facilitar futuras divisões da arquitetura.

---

# 2. Modelagem da Aplicação e Arquitetura de Dados

*(Esta seção atende diretamente à rubrica **H35b**)*

## 2.1. Schema e Diagrama Entidade-Relacionamento

[Insira aqui o detalhamento lógico de banco de dados por meio de tabelas, relacionamentos, chaves primárias e estrangeiras. Também deve ser incluído o DER (Diagrama Entidade-Relacionamento) ou script de migração schema DDls.]

```
[Insira o Diagrama de Classes, DER ou representação lógica das entidades aqui]
```

## 2.2. Integracao e Infraestrutura Distribuida
Como o nosso sistema lida diretamente com agendamentos de barbearias e salões (onde múltiplos clientes podem tentar marcar horários no mesmo segundo), a arquitetura do backend em **NestJS** foi pensada para garantir consistência nos dados e uma boa experiência no app mobile (**React Native**). 

Abaixo detalhamos como tratamos a concorrência, o banco e a comunicação entre os serviços:

### 1. Tratamento de Concorrência e Consistência (Agendamentos)
O maior desafio em um sistema de agendamentos é evitar o duplo agendamento (*race condition*). Para resolver isso:
* Antes de gravar um novo horário na tabela de agendamentos do **MySQL**, a API roda uma validação lógica para checar se o profissional já possui compromisso naquele exato minuto.
* Caso outro usuário seja mais rápido e reserve a vaga primeiro, a API barra a operação e retorna um erro HTTP `409 (Conflict)`, avisando o app que o horário não está mais disponível.

### 2. Gerenciamento de Conexões com o Banco de Dados
* Para evitar gargalos de performance e lentidão nas consultas vindas do aplicativo React Native, utilizamos o pool de conexões gerenciado pelo ORM da aplicação.
* Em vez de abrir uma nova conexão com o MySQL a cada requisição HTTP (o que consumiria muita memória e tempo de processamento), a aplicação reutiliza conexões abertas de um pool configurado, agilizando o retorno das listagens de estabelecimentos, serviços e profissionais.

### 3. Comunicação entre Cliente e Servidor
* **Requisições Síncronas (REST):** A comunicação entre o app móvel e o backend ocorre de forma síncrona via HTTP/REST. Todas as rotas sensíveis (como criar agendamentos ou editar perfis) exigem o envio de um token **JWT** no header da requisição para garantir segurança e validação de permissões (RBAC).
* **Operações Assíncronas:** Tarefas que podem demorar um pouco mais — como o upload de fotos de perfil ou imagens dos estabelecimentos para o CDN/servidor — são tratadas de forma assíncrona utilizando recursos assíncronos do Node.js (Async/Await e Promises), garantindo que a thread principal da API não fique travada e o app não sofra com *timeouts*.

### 4. Visão de Escalabilidade
Embora o projeto esteja rodando de forma monolítica e local nesta fase da disciplina, a divisão clara de módulos no NestJS (separando Auth, Estabelecimentos, Profissionais, Serviços e Agendamentos) facilita muito uma futura evolução para microsserviços ou a adição de cache (como Redis) caso o sistema precise escalar para muitos clientes simultâneos em produção.

---

# 3. Especificação Avançada de Endpoints

*(Esta seção atende diretamente à rubrica **H36b**)*

Abaixo devem estar listados os contratos reais que foram ou serão implementados no diretório [src/backend/](../src/backend/). Cada endpoint deve ser detalhado descrevendo métodos HTTP, URLs, payloads aceitos e possíveis status codes.

### 3.1. Relação Geral de Endpoints

| Método / Verbo | Caminho da Rota (URI) | Descrição do Recurso / Ação | Reclama Autenticação? | Responsável Técnico |
| :---: | :--- | :--- | :---: | :---: |
| `POST` | `/api/v1/auth/register` | Criação de conta (cliente, admin ou profissional) | Não | [Nome do Aluno] |
| `POST` | `/api/v1/auth/login` | Autenticação e geração de JWT | Não | [Nome do Aluno] |
| `GET` | `/api/v1/estabelecimentos` | Listagem paginada de estabelecimentos com filtros de busca | Não | [Nome do Aluno] |
| `POST` | `/api/v1/estabelecimentos` | Criação de um novo estabelecimento | Sim | [Nome do Aluno] |
| `GET` | `/api/v1/estabelecimentos/{id}` | Detalhes de um estabelecimento | Não | [Nome do Aluno] |
| `PUT` | `/api/v1/estabelecimentos/{id}` | Edição de um estabelecimento | Sim | [Nome do Aluno] |
| `DELETE` | `/api/v1/estabelecimentos/{id}` | Exclusão de um estabelecimento | Sim | [Nome do Aluno] |
| `GET` | `/api/v1/estabelecimentos/{estabelecimentoId}/profissionais` | Lista de profissionais do estabelecimento | Sim | [Nome do Aluno] |
| `POST` | `/api/v1/estabelecimentos/{estabelecimentoId}/profissionais` | Criação de profissional no estabelecimento | Sim | [Nome do Aluno] |
| `GET` | `/api/v1/estabelecimentos/{estabelecimentoId}/profissionais/{id}` | Detalhes de um profissional | Sim | [Nome do Aluno] |
| `PUT` | `/api/v1/estabelecimentos/{estabelecimentoId}/profissionais/{id}` | Edição de um profissional | Sim | [Nome do Aluno] |
| `DELETE` | `/api/v1/estabelecimentos/{estabelecimentoId}/profissionais/{id}` | Exclusão de um profissional | Sim | [Nome do Aluno] |
| `GET` | `/api/v1/estabelecimentos/{estabelecimentoId}/profissionais/{id}/agendamentos` | Agenda de agendamentos do profissional | Sim | [Nome do Aluno] |
| `GET` | `/api/v1/estabelecimentos/{estabelecimentoId}/servicos` | Lista de serviços do estabelecimento | Não | [Nome do Aluno] |
| `POST` | `/api/v1/estabelecimentos/{estabelecimentoId}/servicos` | Criação de serviço no estabelecimento | Sim | [Nome do Aluno] |
| `GET` | `/api/v1/estabelecimentos/{estabelecimentoId}/servicos/{id}` | Detalhes de um serviço | Não | [Nome do Aluno] |
| `PUT` | `/api/v1/estabelecimentos/{estabelecimentoId}/servicos/{id}` | Edição de um serviço | Sim | [Nome do Aluno] |
| `DELETE` | `/api/v1/estabelecimentos/{estabelecimentoId}/servicos/{id}` | Exclusão de um serviço | Sim | [Nome do Aluno] |
| `GET` | `/api/v1/clientes/{id}` | Perfil de um cliente | Sim | [Nome do Aluno] |
| `PUT` | `/api/v1/clientes/{id}` | Edição de um cliente | Sim | [Nome do Aluno] |
| `GET` | `/api/v1/clientes/{id}/agendamentos` | Lista de agendamentos do cliente | Sim | [Nome do Aluno] |
| `GET` | `/api/v1/agendamentos/disponibilidade` | Cálculo de horários livres para agendamento | Sim | [Nome do Aluno] |
| `POST` | `/api/v1/agendamentos` | Criação de um novo agendamento | Sim | [Nome do Aluno] |
| `GET` | `/api/v1/agendamentos` | Listagem paginada de agendamentos com filtros | Sim | [Nome do Aluno] |
| `GET` | `/api/v1/agendamentos/{id}` | Detalhes de um agendamento | Sim | [Nome do Aluno] |
| `PATCH` | `/api/v1/agendamentos/{id}` | Alteração de status de um agendamento | Sim | [Nome do Aluno] |
| `DELETE` | `/api/v1/agendamentos/{id}` | Cancelamento definitivo de um agendamento | Sim | [Nome do Aluno] |

---

### 3.2. Detalhamento dos Payloads de Requisição e Resposta (Exemplos)

Cada tópico abaixo pode ser expandido individualmente.

<details>

<summary><b>3.2.1. Autenticação</b></summary>

### 3.2.1. Autenticação

#### Endpoint: `/api/v1/auth/register` (Criação de conta)
- **Método**: `POST`
- **Autenticação**: Não
- **Payload de Requisição**:
  ```json
  {
    "nome": "Usuário Um",
    "email": "usuario.um@pucminas.br",
    "password": "hashed_password",
    "perfil": "cliente",
    "telefone": "(31) 99888-7766"
  }
  ```
- **Resposta Sucesso (`201 Created`)**:
  ```json
  {
    "id": 123,
    "nome": "Usuário Um",
    "email": "usuario.um@pucminas.br",
    "perfil": "cliente"
  }
  ```
- **Erro (`409 Conflict`)**:
  ```json
  {
    "status": 409,
    "error": "Este e-mail já está em uso.",
    "message": "Conflict"
  }
  ```

#### Endpoint: `/api/v1/auth/login` (Login)
- **Método**: `POST`
- **Autenticação**: Não
- **Payload de Requisição**:
  ```json
  {
    "email": "usuario.um@pucminas.br",
    "password": "hashed_password"
  }
  ```
- **Resposta Sucesso (`200 OK`)**:
  ```json
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600,
    "user": { "id": 123, "nome": "Usuário Um", "perfil": "cliente" }
  }
  ```
- **Erro (`401 Unauthorized`)**:
  ```json
  {
    "status": 401,
    "error": "E-mail ou senha inválidos.",
    "message": "Unauthorized"
  }
  ```

</details>

---

<details>

<summary><b>3.2.2. Estabelecimentos (barbearias/salões)</b></summary>

### 3.2.2. Estabelecimentos (barbearias/salões)

#### Endpoint: `/api/v1/estabelecimentos` (Lista de estabelecimentos)
- **Método**: `GET`
- **Autenticação**: Não
- **Parâmetros de Consulta**:
  - `nome` (string, opcional)
  - `distancia` (km, opcional)
  - `servico` (string, opcional)
  - `pagina` (int, opcional, padrão `1`)
- **Resposta Sucesso (`200 OK`)**:
  ```json
  {
    "total": 3,
    "estabelecimentos": [
      {
        "id": 1,
        "nome": "Barbearia Clássica",
        "foto_perfil": "https://cdn.agiliza.com.br/estabelecimentos/1/perfil.jpg",
        "endereco": {
          "rua": "Av. do Contorno",
          "numero": 500,
          "cidade": "Belo Horizonte",
          "uf": "MG",
          "cep": "30110-100",
          "latitude": -19.920382,
          "longitude": -43.938004
        },
        "distancia_km": 1.2,
        "avaliacao_media": 4.8
      }
    ]
  }
  ```

#### Endpoint: `/api/v1/estabelecimentos` (Criação de estabelecimento)
- **Método**: `POST`
- **Autenticação**: Sim
- **Payload de Requisição**:
  ```json
  {
    "nome": "Barbearia Clássica",
    "razao_social": "Barbearia Clássica LTDA",
    "cnpj": "12.345.678/0001-90",
    "email": "contato@clasica.com.br",
    "telefone": "(31) 3222-4455",
    "rede_social": "https://instagram.com/barbeariaclassica",
    "descricao": "Barbearia tradicional com foco em cortes clássicos.",
    "foto_perfil": "https://cdn.agiliza.com.br/estabelecimentos/1/perfil.jpg",
    "fotos": [
      "https://cdn.agiliza.com.br/estabelecimentos/1/interior.jpg"
    ],
    "fidelidade": true,
    "endereco": {
      "rua": "Av. do Contorno",
      "numero": 500,
      "cidade": "Belo Horizonte",
      "uf": "MG",
      "cep": "30110-100",
      "latitude": -19.920382,
      "longitude": -43.938004
    },
    "horario_abertura": "09:00",
    "horario_fechamento": "20:00"
  }
  ```
- **Resposta Sucesso (`201 Created`)**:
  ```json
  {
    "id": 1,
    "nome": "Barbearia Clássica"
  }
  ```
- **Erro (`400 Bad Request` - parâmetro ausente ou inválido)**:
  ```json
  {
    "status": 400,
    "errors": [
      "Nome não pode ficar em branco",
      "..."
    ],
    "message": "Bad Request"
  }
  ```

#### Endpoint: `/api/v1/estabelecimentos/{id}` (Detalhes do estabelecimento)
- **Método**: `GET`
- **Autenticação**: Não
- **Resposta Sucesso (`200 OK`)**:
  ```json
  {
    "id": 1,
    "nome": "Barbearia Clássica",
    "razao_social": "Barbearia Clássica LTDA",
    "cnpj": "12.345.678/0001-90",
    "email": "contato@clasica.com.br",
    "telefone": "(31) 3222-4455",
    "rede_social": "https://instagram.com/barbeariaclassica",
    "descricao": "Barbearia tradicional com foco em cortes clássicos.",
    "foto_perfil": "https://cdn.agiliza.com.br/estabelecimentos/1/perfil.jpg",
    "fotos": ["https://cdn.agiliza.com.br/estabelecimentos/1/interior.jpg"],
    "fidelidade": true,
    "endereco": {
      "rua": "Av. do Contorno",
      "numero": 500,
      "cidade": "Belo Horizonte",
      "uf": "MG",
      "cep": "30110-100",
      "latitude": -19.920382,
      "longitude": -43.938004
    },
    "horario_abertura": "09:00",
    "horario_fechamento": "20:00",
    "servicos": [
      {
        "id": 1,
        "nome": "Corte Clássico",
        "preco": 45.0,
        "duracao": 40,
        "ponto_fidelidade": 1
      }
    ],
    "profissionais": [
      { "id": 1, "nome": "Kelven Rodrigues", "foto_perfil": "..." }
    ]
  }
  ```
- **Erro (`404 Not Found`)**:
  ```json
  {
    "status": 404,
    "error": "Estabelecimento não encontrado.",
    "message": "Not Found"
  }
  ```

#### Endpoint: `/api/v1/estabelecimentos/{id}` (Edição de estabelecimento)
- **Método**: `PUT`
- **Autenticação**: `admin`
- **Payload de Requisição**: mesmo formato do `POST` "Criação de estabelecimento", com campos atualizáveis.
- **Resposta Sucesso (`200 OK`)**:
  ```json
  { "id": 1, "nome": "Barbearia Clássica", "status": "ativo" }
  ```
- **Erro (`400 Bad Request` - parâmetro ausente ou inválido)**:
  ```json
  {
    "status": 400,
    "errors": [
      "Nome não pode ficar em branco",
      "..."
    ],
    "message": "Bad Request"
  }
  ```
- **Erro (`404 Not Found`)**:
  ```json
  {
    "status": 404,
    "error": "Estabelecimento não encontrado.",
    "message": "Not Found"
  }
  ```

#### Endpoint: `/api/v1/estabelecimentos/{id}` (Exclusão do estabelecimento)
- **Método**: `DELETE`
- **Autenticação**: Sim
- **Resposta Sucesso (`204 No Content`)**: corpo vazio.
- **Erro (`404 Not Found`)**:
  ```json
  {
    "status": 404,
    "error": "Estabelecimento não encontrado.",
    "message": "Not Found"
  }
  ```

</details>

---

<details>

<summary><b>3.2.3. Profissionais</b></summary>

### 3.2.3. Profissionais

#### Endpoint: `/api/v1/estabelecimentos/{estabelecimentoId}/profissionais` (Lista de profissionais do estabelecimento)
- **Método**: `GET`
- **Autenticação**: Sim
- **Parâmetros de Consulta**:
  - `servico` (string, opcional)
- **Resposta Sucesso (`200 OK`)**:
  ```json
  {
    "total": 2,
    "profissionais": [
      {
        "id": 1,
        "nome": "Kelven Rodrigues",
        "foto_perfil": "https://cdn.agiliza.com.br/profissionais/1/perfil.jpg",
        "servicos": [{ "id": 1, "nome": "Corte Clássico" }]
      }
    ]
  }
  ```

#### Endpoint: `/api/v1/estabelecimentos/{estabelecimentoId}/profissionais` (Criação de profissional)
- **Método**: `POST`
- **Autenticação**: Sim
- **Payload de Requisição**:
  ```json
  {
    "cpf": "123.456.789-00",
    "nome": "Kelven Rodrigues",
    "email": "kelven@clasica.com.br",
    "foto_perfil": "https://cdn.agiliza.com.br/profissionais/1/perfil.jpg",
    "telefone": "(31) 99888-1122",
    "horarios": [
      { "dia_semana": 2, "inicio": "09:00", "fim": "18:00" },
      { "dia_semana": 3, "inicio": "09:00", "fim": "18:00" }
    ],
    "servicos": [1, 3]
  }
  ```
- **Resposta Sucesso (`201 Created`)**:
  ```json
  {
    "id": 1,
    "nome": "Kelven Rodrigues",
    "estabelecimento_id": 1
  }
  ```
- **Erro (`400 Bad Request` - parâmetro ausente ou inválido)**:
  ```json
  {
    "status": 400,
    "errors": [
      "CPF não pode ficar em branco",
      "..."
    ],
    "message": "Bad Request"
  }
  ```

#### Endpoint: `/api/v1/estabelecimentos/{estabelecimentoId}/profissionais/{id}` (Detalhes do profissional)
- **Método**: `GET`
- **Autenticação**: Sim
- **Resposta Sucesso (`200 OK`)**:
  ```json
  {
    "id": 1,
    "cpf": "123.456.789-00",
    "nome": "Kelven Rodrigues",
    "email": "kelven@clasica.com.br",
    "foto_perfil": "https://cdn.agiliza.com.br/profissionais/1/perfil.jpg",
    "telefone": "(31) 99888-1122",
    "estabelecimento": { "id": 1, "nome": "Barbearia Clássica" },
    "horarios": [
      { "dia_semana": 2, "inicio": "09:00", "fim": "18:00" }
    ],
    "servicos": [
      { "id": 1, "nome": "Corte Clássico", "preco": 45.0, "duracao": 40 }
    ]
  }
  ```
- **Erro (`404 Not Found`)**:
  ```json
  {
    "status": 404,
    "error": "Profissional não encontrado.",
    "message": "Not Found"
  }
  ```

#### Endpoint: `/api/v1/estabelecimentos/{estabelecimentoId}/profissionais/{id}` (Edição de profissional)
- **Método**: `PUT`
- **Autenticação**: Sim
- **Payload de Requisição**: mesmo formato do `POST`, com campos atualizáveis.
- **Resposta Sucesso (`200 OK`)**:
  ```json
  { "id": 1, "nome": "Kelven Rodrigues", "estabelecimento_id": 1 }
  ```
- **Erro (`400 Bad Request` - parâmetro ausente ou inválido)**:
  ```json
  {
    "status": 400,
    "errors": [
      "CPF não pode ficar em branco",
      "..."
    ],
    "message": "Bad Request"
  }
  ```
- **Erro (`404 Not Found`)**:
  ```json
  {
    "status": 404,
    "error": "Profissional não encontrado.",
    "message": "Not Found"
  }
  ```

#### Endpoint: `/api/v1/estabelecimentos/{estabelecimentoId}/profissionais/{id}` (Exclusão do profissional)
- **Método**: `DELETE`
- **Autenticação**: Sim
- **Resposta Sucesso (`204 No Content`)**: corpo vazio.
- **Erro (`404 Not Found`)**:
  ```json
  {
    "status": 404,
    "error": "Profissional não encontrado.",
    "message": "Not Found"
  }
  ```

#### Endpoint: `/api/v1/estabelecimentos/{estabelecimentoId}/profissionais/{id}/agendamentos` (Lista de agendamentos do profissional)
- **Método**: `GET`
- **Autenticação**: Sim
- **Parâmetros de Consulta**:
  - `data_inicio` (obrigatório)
  - `data_fim` (obrigatório)
- **Resposta Sucesso (`200 OK`)**:
  ```json
  {
    "profissional_id": 1,
    "agendamentos": [
      { "id": 10, "cliente": "Usuário Um", "servico": "Corte Clássico", "dataHora": "2026-09-08T14:00:00-03:00", "status": "confirmado" }
    ]
  }
  ```
- **Erro (`404 Not Found`)**:
  ```json
  {
    "status": 404,
    "error": "Profissional não encontrado.",
    "message": "Not Found"
  }
  ```

</details>

---

<details>

<summary><b>3.2.4. Serviços</b></summary>

### 3.2.4. Serviços

#### Endpoint: `/api/v1/estabelecimentos/{estabelecimentoId}/servicos` (Lista de serviços do estabelecimento)
- **Método**: `GET`
- **Autenticação**: Não
- **Resposta Sucesso (`200 OK`)**:
  ```json
  {
    "total": 2,
    "servicos": [
      {
        "id": 1,
        "nome": "Corte Clássico",
        "preco": 45.0,
        "duracao": 40,
        "descricao": "Corte na tesoura ou máquina com acabamento.",
        "ponto_fidelidade": 1
      }
    ]
  }
  ```

#### Endpoint: `/api/v1/estabelecimentos/{estabelecimentoId}/servicos` (Criação de serviço)
- **Método**: `POST`
- **Autenticação**: Sim
- **Payload de Requisição**:
  ```json
  {
    "nome": "Corte Clássico",
    "preco": 45.0,
    "descricao": "Corte na tesoura ou máquina com acabamento.",
    "duracao": 40,
    "ponto_fidelidade": 1
  }
  ```
- **Resposta Sucesso (`201 Created`)**:
  ```json
  {
    "id": 1,
    "nome": "Corte Clássico",
    "estabelecimento_id": 1
  }
  ```
- **Erro (`400 Bad Request` - parâmetro ausente ou inválido)**:
  ```json
  {
    "status": 400,
    "errors": [
      "Duração não pode ficar em branco",
      "..."
    ],
    "message": "Bad Request"
  }
  ```

#### Endpoint: `/api/v1/estabelecimentos/{estabelecimentoId}/servicos/{id}` (Detalhes do serviço)
- **Método**: `GET`
- **Autenticação**: Não
- **Resposta Sucesso (`200 OK`)**:
  ```json
  {
    "id": 1,
    "nome": "Corte Clássico",
    "preco": 45.0,
    "descricao": "Corte na tesoura ou máquina com acabamento.",
    "duracao": 40,
    "ponto_fidelidade": 1,
    "estabelecimento": { "id": 1, "nome": "Barbearia Clássica" }
  }
  ```
- **Erro (`404 Not Found`)**:
  ```json
  {
    "status": 404,
    "error": "Serviço não encontrado.",
    "message": "Not Found"
  }
  ```

#### Endpoint: `/api/v1/estabelecimentos/{estabelecimentoId}/servicos/{id}` (Edição de serviço)
- **Método**: `PUT`
- **Autenticação**: Sim
- **Payload de Requisição**: mesmo formato do `POST`, com campos atualizáveis.
- **Resposta Sucesso (`200 OK`)**:
  ```json
  { "id": 1, "nome": "Corte Clássico Premium", "preco": 55.0 }
  ```
- **Erro (`400 Bad Request` - parâmetro ausente ou inválido)**:
  ```json
  {
    "status": 400,
    "errors": [
      "Duração não pode ficar em branco",
      "..."
    ],
    "message": "Bad Request"
  }
  ```
- **Erro (`404 Not Found`)**:
  ```json
  {
    "status": 404,
    "error": "Serviço não encontrado.",
    "message": "Not Found"
  }
  ```

#### Endpoint: `/api/v1/estabelecimentos/{estabelecimentoId}/servicos/{id}` (Exclusão de serviço)
- **Método**: `DELETE`
- **Autenticação**: Sim
- **Resposta Sucesso (`204 No Content`)**: corpo vazio.
- **Erro (`404 Not Found`)**:
  ```json
  {
    "status": 404,
    "error": "Serviço não encontrado.",
    "message": "Not Found"
  }
  ```

</details>

---

<details>

<summary><b>3.2.5. Clientes</b></summary>

### 3.2.5. Clientes

#### Endpoint: `/api/v1/clientes/{id}` (Perfil do cliente)
- **Método**: `GET`
- **Autenticação**: Sim
- **Resposta Sucesso (`200 OK`)**:
  ```json
  {
    "id": 123,
    "nome": "Usuário Um",
    "email": "usuario.um@pucminas.br",
    "telefone": "(31) 99888-7766",
    "foto_perfil": "https://cdn.agiliza.com.br/clientes/123/perfil.jpg"
  }
  ```

#### Endpoint: `/api/v1/clientes/{id}` (Edição de cliente)
- **Método**: `PUT`
- **Autenticação**: Sim
- **Payload de Requisição**: campos atualizáveis (`nome`, `email`, `telefone`, `foto_perfil`).
- **Resposta Sucesso (`200 OK`)**:
  ```json
  { "id": 123, "nome": "Usuário Um", "email": "usuario.um@pucminas.br" }
  ```
- **Erro (`400 Bad Request` - parâmetro ausente ou inválido)**:
  ```json
  {
    "status": 400,
    "errors": [
      "Email não pode ficar em branco",
      "..."
    ],
    "message": "Bad Request"
  }
  ```
- **Erro (`404 Not Found`)**:
  ```json
  {
    "status": 404,
    "error": "Usuário não encontrado.",
    "message": "Not Found"
  }
  ```

#### Endpoint: `/api/v1/clientes/{id}/agendamentos` (Lista de agendamentos do cliente)
- **Método**: `GET`
- **Autenticação**: Sim
- **Parâmetros de Consulta**:
  - `status` (opcional)
- **Resposta Sucesso (`200 OK`)**:
  ```json
  {
    "total": 2,
    "agendamentos": [
      {
        "id": 10,
        "estabelecimento": "Barbearia Clássica",
        "profissional": "Kelven Rodrigues",
        "servico": "Corte Clássico",
        "dataHora": "2026-09-08T14:00:00-03:00",
        "status": "confirmado"
      }
    ]
  }
  ```

</details>

---

<details>

<summary><b>3.2.6. Agendamentos</b></summary>

### 3.2.6. Agendamentos

#### Endpoint: `/api/v1/agendamentos/disponibilidade`
- **Método**: `GET`
- **Autenticação**: Sim
- **Parâmetros de Consulta**:
  - `estabelecimento_id` (obrigatório)
  - `servico_id` (obrigatório)
  - `data` (obrigatório)
- **Resposta Sucesso (`200 OK`)**:
  ```json
  {
    "estabelecimento_id": 1,
    "servico_id": 1,
    "data": "2026-09-08",
    "slots": [
      { "profissional_id": 1, "profissional": "Kelven Rodrigues", "horario": "2026-09-08T09:00:00-03:00" },
      { "profissional_id": 1, "profissional": "Kelven Rodrigues", "horario": "2026-09-08T09:40:00-03:00" },
      { "profissional_id": 2, "profissional": "Sônia Ferreira", "horario": "2026-09-08T10:20:00-03:00" }
    ]
  }
  ```

#### Endpoint: `/api/v1/agendamentos` (Criação de agendamento)
- **Método**: `POST`
- **Autenticação**: Sim
- **Payload de Requisição**:
  ```json
  {
    "id_cliente": 123,
    "id_profissional": 1,
    "id_servico": 1,
    "status": "pendente",
    "dataHora": "2026-09-08T14:00:00-03:00"
  }
  ```
- **Resposta Sucesso (`201 Created`)**:
  ```json
  {
    "id": 10,
    "id_cliente": 123,
    "id_profissional": 1,
    "id_servico": 1,
    "status": "pendente",
    "dataHora": "2026-09-08T14:00:00-03:00"
  }
  ```
- **Erro (`409 Conflict`)**:
  ```json
  {
    "status": 409,
    "error": "O horário selecionado não está mais disponível.",
    "message": "Conflict"
  }
  ```

#### Endpoint: `/api/v1/agendamentos`
- **Método**: `GET`
- **Autenticação**: Sim
- **Parâmetros de Consulta**: `estabelecimento_id`, `profissional_id`, `cliente_id`, `status` (todos opcionais)
- **Resposta Sucesso (`200 OK`)**:
  ```json
  {
    "total": 3,
    "agendamentos": [
      {
        "id": 10,
        "cliente": "Usuário Um",
        "profissional": "Kelven Rodrigues",
        "servico": "Corte Clássico",
        "dataHora": "2026-09-08T14:00:00-03:00",
        "status": "pendente"
      }
    ]
  }
  ```

#### Endpoint: `/api/v1/agendamentos/{id}` (Detalhes do agendamento)
- **Método**: `GET`
- **Autenticação**: Sim
- **Resposta Sucesso (`200 OK`)**:
  ```json
  {
    "id": 10,
    "id_cliente": 123,
    "id_profissional": 1,
    "id_servico": 1,
    "status": "pendente",
    "dataHora": "2026-09-08T14:00:00-03:00"
  }
  ```
- **Erro (`404 Not Found`)**:
  ```json
  {
    "status": 404,
    "error": "Agendamento não encontrado.",
    "message": "Not Found"
  }
  ```

#### Endpoint: `/api/v1/agendamentos/{id}` (Alteração de status do agendamento)
- **Método**: `PATCH`
- **Autenticação**: Sim
- **Payload de Requisição**:
  ```json
  { "status": "confirmado" }
  ```
- **Resposta Sucesso (`200 OK`)**:
  ```json
  {
    "id": 10,
    "status": "confirmado",
    "dataHora": "2026-09-08T14:00:00-03:00"
  }
  ```
- **Erro (`404 Not Found`)**:
  ```json
  {
    "status": 404,
    "error": "Agendamento não encontrado.",
    "message": "Not Found"
  }
  ```

#### Endpoint: `/api/v1/agendamentos/{id}` (Cancelamento definitivo do agendamento)
- **Método**: `DELETE`
- **Autenticação**: Sim
- **Resposta Sucesso (`204 No Content`)**: corpo vazio.
- **Erro (`404 Not Found`)**:
  ```json
  {
    "status": 404,
    "error": "Agendamento não encontrado.",
    "message": "Not Found"
  }
  ```

</details>

---

### 3.3. Segurança e Autorização

#### Autenticação (JWT)

A autenticação é gerenciada pelo módulo `auth` da API (NestJS com `@nestjs/jwt` e `bcrypt`). Todas as rotas exigem um token JWT válido por padrão, exceto as que estiverem marcadas com o decorator `@Public()` (ex.: `POST /api/v1/auth/login`).

- **Fluxo de Login**: `POST /api/v1/auth/login` recebe `email` e `senha`; a senha é conferida com `bcrypt` e, em caso de sucesso, é retornado um JWT no formato `{ "access_token": "<jwt>" }`.
- **Geração do token**: A assinatura usa o algoritmo **HS256** (simétrico), com chave secreta `JWT_SECRET` definida em variável de ambiente.
- **Expiração**: o token expira em **600 segundos (10 minutos)**.
- **Envio**: o cliente autentica enviando o header `Authorization: Bearer <access_token>`.

#### Autorização (RBAC)

O controle de acesso será baseado em papéis (RBAC), com os perfis definidos na coluna `perfil` da tabela `usuarios`:

| Perfil | Descrição |
| --- | --- |
| `dono` | Administrador/gerente do estabelecimento (acesso ao painel de gestão) |
| `profissional` | Profissional vinculado ao estabelecimento (consulta da própria agenda) |
| `cliente` | Cliente final (busca, agendamento e histórico) |

A verificação de papéis será implementada com **decorators e guards** do NestJS:

- Decorator `@Roles('dono')` aplicado a controllers/rotas, gravando os papéis permitidos como metadados via `Reflector`;
- Um `RolesGuard` que lê esses metadados e compara com `request.user.perfil` (extraído do JWT), devolvendo `403 Forbidden` em caso de perfil não autorizado;

---

# 4. Estratégia e Relatório de Testes Automatizados

*(Esta seção atende diretamente à rubrica H36c)*

### Estratégia de Testes

A equipe adota a abordagem da pirâmide de testes, com três níveis complementares:

1. **Testes unitários:** validam services, guards e utilitários de forma isolada. As dependências externas (repositórios/ORM, `JwtService`, `bcrypt`) são substituídas por mocks (`jest.fn()`), de modo que o teste falha somente por erro na regra de negócio testada.
2. **Testes de integração/E2E das rotas:** sobem a aplicação NestJS em memória com `Test.createTestingModule` e disparam requisições HTTP contra os controllers usando Supertest. Verificam o contrato descrito na seção 3: status HTTP, formato do payload, validação de entrada, autenticação (JWT) e autorização (RBAC). O banco de dados é [mockado / um banco de teste isolado].
3. **Testes de regras críticas:** cenários de maior risco, como o cálculo de disponibilidade e a prevenção de conflito de horários, recebem cobertura reforçada.

**Critérios de priorização:** foram priorizados os módulos que concentram regra de negócio ou segurança (Autenticação/RBAC e Agendamentos), seguidos dos CRUDs de Estabelecimentos, Profissionais, Serviços e Clientes.

**Padrões adotados:**

- Cada rota é testada com pelo menos um cenário de sucesso e os cenários de erro documentados na seção 3.2 (400, 401, 403, 404, 409).
- Rotas protegidas são testadas com token válido, sem token e com token de perfil não autorizado.
- Os testes são independentes entre si (dados criados no `beforeEach` e limpos no `afterEach`).
- Testes unitários ficam ao lado do código, em arquivos `*.spec.ts`. Testes E2E ficam na pasta `test/`, em arquivos `*.e2e-spec.ts`.

### Como executar os testes localmente


### Exemplo de Quadro de Cobertura de Testes:

```bash
# Instalar dependências
npm install

# Testes unitários
npm run test

# Testes unitários com relatório de cobertura
npm run test:cov

# Testes de integração/E2E
npm run test:e2e
```

Pré-requisitos: [Node.js 24.0.0], arquivo `.env.test` com `JWT_SECRET` e [variáveis do banco quando definidas]. O relatório HTML de cobertura é gerado em `coverage/lcov-report/index.html`.

- **Ferramenta de Asserção Utilizada:** Jest (com `@nestjs/testing` e Supertest para as rotas HTTP)
- **Método de Execução do Comando de Teste:** `npm run test:cov`
- **Cobertura Esperada/Alcançada:** esperada de no mínimo [80]% de linhas e branches em services e guards, imposta por `coverageThreshold` no `package.json`. Alcançada: [a preencher após a implementação].

### Quadro de Cobertura de Testes

| Módulo do Sistema | Tipo de Teste (Unitário/Integração) | Cenários Avaliados | Status da Suíte |
|---|---|---|---|
| Autenticação (`/auth`) | Unitário + Integração | Registro com sucesso (201), e-mail duplicado (409), login válido com emissão de JWT, senha incorreta e usuário inexistente (401), expiração do token | ⏳ Pendente |
| Autorização (RBAC) | Unitário (guards) + Integração | Rota protegida sem token (401), perfil não autorizado (403), rotas `@Public()` acessíveis sem token, `RolesGuard` lendo metadados de `@Roles()` | ⏳ Pendente |
| Estabelecimentos | Integração (com DB mockado) | Listagem paginada com filtros (`nome`, `distancia`, `servico`), criação com payload válido e inválido (400), detalhes e 404, edição restrita ao dono, exclusão (204) | ⏳ Pendente |
| Profissionais | Integração (com DB mockado) | CRUD dentro de um estabelecimento, filtro por `servico`, agenda exigindo `data_inicio` e `data_fim`, 404 para profissional inexistente | ⏳ Pendente |
| Serviços | Integração (com DB mockado) | Listagem pública, criação e edição autenticadas, validação de duração e preço, 404 | ⏳ Pendente |
| Clientes | Integração (com DB mockado) | Perfil e edição do próprio cliente, listagem de agendamentos filtrada por `status`, 404 | ⏳ Pendente |
| Agendamentos | Unitário + Integração | Cálculo de disponibilidade (respeita horário do profissional e duração do serviço), criação com sucesso, conflito de horário (409), alteração de status via PATCH, cancelamento (204), listagem filtrada | ⏳ Pendente |
---

# 5. Instruções de Implantação e DevOps

*(Esta seção atende diretamente à rubrica **H35c**)*

Abaixo detalhe como a aplicação backend é empacotada de forma portável e como seria o processo ideal de implantação/hospedagem em nuvem (proposta teórica). **Nota:** Não há cobrança de deploy prático em nuvem nesta disciplina; a avaliação consiste na demonstração teórica da arquitetura física proposta e nas automações de build/testes locais.

## 5.1. Conteinerização de Serviços

Nesta etapa do projeto, optou-se pela **execução local direta** dos serviços sem a utilização de conteinerização via Docker, priorizando a agilidade no fluxo de desenvolvimento, debugging e a validação integrada dos módulos desenvolvidos em **NestJS** e **MySQL** utilizando *NodeJS*. 

Abaixo estão detalhados os caminhos dos diretórios do projeto e a forma como a aplicação se conecta e se comunica localmente:

### 1. Caminho e Estrutura do Backend
O código-fonte da API, contendo os módulos de autenticação, regras de negócios e controladores, está centralizado na estrutura padrão do NestJS:
* **Caminho do Backend:** [`src/backend/`](src/backend/agiliza-api)
* **Instruções de Inicialização Local:** O projeto gerencia suas dependências via `npm`. O ambiente é configurado localmente através dos comandos descritos no [README do Backend](../src/backend/README.md), utilizando variáveis de ambiente mapeadas via arquivo `.env` para apontar para a instância do banco de dados relacional.

### 2. Comunicação Local entre a API (NestJS) e o Banco de Dados (MySQL)
Diferente de um ambiente conteinerizado onde a comunicação ocorre via nomes de serviços em uma rede virtual Docker (`bridge`), nesta fase o ecossistema opera da seguinte forma:
* **Servidor MySQL:** Executado localmente na máquina do desenvolvedor (ou via instância isolada de SGBD na porta padrão `3306`).
* **String de Conexão:** O módulo de persistência do NestJS estabelece a conexão com o banco de dados relacional utilizando parâmetros locais configurados nas variáveis de ambiente:
  ```env
  DB_HOST=localhost
  DB_PORT=3306
  DB_USER=root
  DB_PASSWORD=sua_senha
  DB_NAME=agiliza_db

---

## 5.2. Proposta de Infraestrutura de Deploy e Ambiente em Produção

A infraestrutura de produção proposta para o AGILIZA será baseada em serviços de nuvem, mantendo a separação entre as diferentes camadas definidas na arquitetura do sistema.

A aplicação Web, desenvolvida em React, será hospedada em um serviço de hospedagem para aplicações Web, como a Vercel. A aplicação móvel, desenvolvida em React Native, realizará a comunicação com os serviços de back-end por meio de requisições HTTPS e, quando necessário, conexões WebSocket.

A API principal, desenvolvida utilizando Node.js e NestJS, será hospedada em um serviço de nuvem, como o Render, ficando responsável pela execução das regras de negócio, comunicação com os bancos de dados e integração com serviços externos.

O processo de integração e entrega contínua será realizado utilizando GitHub Actions, permitindo validar automaticamente as alterações realizadas no código-fonte e automatizar o processo de implantação das novas versões do sistema.

### Modelo de CI/CD Planejado

O processo de CI/CD será integrado ao repositório do projeto por meio do GitHub Actions.

A cada `push` ou abertura de `pull request`, será iniciado automaticamente um pipeline de validação do código.

Esse pipeline deverá executar as seguintes etapas:

1. Obter a versão mais recente do código-fonte;
2. Configurar a versão do Node.js utilizada pelo projeto;
3. Instalar as dependências da aplicação;
4. Executar verificações de padronização e qualidade do código;
5. Executar os testes automatizados;
6. Realizar o build das aplicações;
7. Verificar se existem erros que impeçam a aplicação de ser executada em produção.

Caso alguma dessas etapas apresente erro, o pipeline será interrompido e a alteração deverá ser corrigida antes de ser incorporada à versão principal do sistema.

Para alterações aprovadas e integradas à branch `main`, será executada a etapa de entrega contínua.

No caso da aplicação Web, uma nova versão poderá ser automaticamente publicada no ambiente de produção hospedado na Vercel.

Para a API NestJS, a atualização da branch principal iniciará a implantação da nova versão no serviço responsável pela hospedagem da API, como o Render.

A aplicação React Native também passará pelas etapas de validação, testes e build. Entretanto, sua distribuição em produção dependerá da geração das versões destinadas às plataformas móveis e de sua disponibilização por meio das respectivas lojas de aplicativos.

Dessa forma, o fluxo de desenvolvimento planejado pode ser representado da seguinte maneira:

    Desenvolvedor
         |
         | Push / Pull Request
         v
       GitHub
         |
         v
    GitHub Actions
         |
         +-- Instalação de dependências
         |
         +-- Verificação de código
         |
         +-- Testes automatizados
         |
         +-- Build
         |
         v
     Validação concluída
         |
         v
      Branch main
         |
         +---------------------+
         |                     |
         v                     v
    Deploy Web              Deploy API
      Vercel                  Render

### Arquitetura Física Proposta

A infraestrutura de produção seguirá a arquitetura distribuída definida para o AGILIZA.

A camada de interface será composta pela aplicação Web desenvolvida em React e pela aplicação móvel desenvolvida utilizando React Native.

A aplicação Web poderá ser hospedada na Vercel, permitindo o acesso ao sistema por meio de navegadores utilizando conexão HTTPS.

A aplicação React Native será instalada nos dispositivos móveis dos usuários e realizará a comunicação com o back-end através da Internet utilizando HTTPS e, quando necessário, WebSocket.

As aplicações clientes não possuirão acesso direto aos bancos de dados.

Toda comunicação será realizada através dos serviços de back-end, garantindo que autenticação, autorização, validações e regras de negócio sejam processadas antes do acesso aos dados.

A autenticação será realizada utilizando o mecanismo definido na arquitetura do sistema, combinando autorização OAuth com tokens JWT. Após a autenticação do usuário, o token será validado antes do acesso às funcionalidades protegidas disponibilizadas pela API.

A API principal será desenvolvida utilizando Node.js e NestJS e hospedada em um serviço de nuvem, como o Render.

A API será responsável por acessar os dois modelos de persistência definidos para a aplicação.

O banco de dados MySQL será utilizado para o armazenamento das informações relacionais do sistema, como usuários, estabelecimentos, profissionais, serviços e agendamentos.

O MongoDB será utilizado para informações que não necessitam seguir o mesmo modelo relacional, como logs, artefatos e documentos gerados pelo sistema.

O serviço MongoDB poderá ser disponibilizado por meio do MongoDB Atlas, enquanto o banco MySQL será hospedado utilizando um serviço de banco de dados gerenciado em nuvem.

Além dos bancos de dados, a API também realizará integração com serviços externos. Para o envio de mensagens de e-mail, será utilizado o SendGrid, conforme previsto na arquitetura do sistema.

A arquitetura física de produção pode ser representada de forma simplificada da seguinte maneira:

                         Internet
                            |
              +-------------+-------------+
              |                           |
              v                           v
         Aplicação Web              Aplicação Mobile
            React                    React Native
           Vercel
              |                           |
              +-------------+-------------+
                            |
                     HTTPS / WSS
                            |
                            v
                 Autenticação / OAuth
                            |
                    Validação JWT
                            |
                            v
                     API Principal
                  Node.js / NestJS
                        Render
                            |
              +-------------+-------------+
              |             |             |
              v             v             v
            MySQL        MongoDB        SendGrid
         Banco relacional  Atlas       Serviço de
                                      envio de e-mail

### Gerenciamento de Variáveis de Ambiente e Secrets

Informações sensíveis da aplicação não serão armazenadas diretamente no código-fonte ou enviadas para o repositório GitHub.

Essas informações serão configuradas por meio de variáveis de ambiente e mecanismos de gerenciamento de secrets disponibilizados pelas plataformas utilizadas na infraestrutura.

Entre as principais configurações previstas estão:

- `DATABASE_URL` ou credenciais equivalentes para conexão com o MySQL;
- `MONGODB_URI` para conexão com o MongoDB;
- `JWT_SECRET` para assinatura e validação dos tokens JWT;
- credenciais utilizadas pelo provedor OAuth;
- `SENDGRID_API_KEY` para integração com o serviço de envio de e-mails;
- URLs utilizadas pelas aplicações Web e Mobile para comunicação com a API;
- configurações específicas dos ambientes de desenvolvimento e produção.

No GitHub Actions, credenciais necessárias durante os processos de build e deploy serão armazenadas utilizando o GitHub Secrets.

Nos serviços de hospedagem, as credenciais serão configuradas diretamente como variáveis de ambiente do ambiente de produção.

Essa estratégia evita a exposição de informações sensíveis no repositório e permite manter configurações diferentes para desenvolvimento, testes e produção.


---

# 6. Referências Acadêmicas e de Engenharia

[Registre as referências que deram suporte técnico para a modelagem lógica, banco de dados ou metodologias de automação do backend das APIs.]

1. **DATE, C. J**. *Introdução a Sistemas de Bancos de Dados*. Rio de Janeiro: Elsevier, 2004.
2. **RICHARDSON, Leonard; RUBY, Sam**. *RESTful Web Services*. O'Reilly Media, 2007.
3. **JSON WEB TOKENS.** *JWT.IO - Introduction to JSON Web Tokens*. Auth0 by Okta, 2026. Disponível em: <https://jwt.io/introduction/>. Acesso em: 16 set. 2026.
4. **MYSQL.** *MySQL 8.0 Reference Manual*. Oracle Corporation, 2026. Disponível em: <https://dev.mysql.com/doc/>. Acesso em: 16 set. 2026.
5. **NESTJS.** *NestJS: A progressive Node.js framework*. NestJS, 2026. Disponível em: <https://docs.nestjs.com/>. Acesso em: 16 set. 2026.
6. **NODE.JS.** *Node.js v20 LTS Documentation*. OpenJS Foundation, 2026. Disponível em: <https://nodejs.org/docs/>. Acesso em: 16 set. 2026

