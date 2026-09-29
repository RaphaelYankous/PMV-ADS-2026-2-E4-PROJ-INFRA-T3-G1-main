# 📊 Feedback da Etapa 1: Etapa 1: Contexto e Planejamento da Solução Distribuída

- **Última Avaliação**: `2026-09-07`

---

## 🌟 Pontos Fortes da Equipe
- Introdução clara e bem delimitada: o problema (gestão manual de agenda em barbearias/salões) é específico, o objetivo geral decorre diretamente dele e a justificativa usa dados de mercado concretos (Sebrae) — não é um texto genérico.
- Arquitetura distribuída coerente de ponta a ponta: o diagrama de componentes (4.1), a stack tecnológica (4.2) e o catálogo de serviços com SLA (3.0) contam a mesma história e foram mantidos sincronizados conforme a stack evoluiu (ex.: migração de Express/Postgres/Redis para NestJS/MySQL/MongoDB refletida nos três lugares).
- Especificação de contratos de API completa e aplicável: os 11 endpoints da Seção 5 cobrem os principais fluxos do sistema, com payload, resposta de sucesso e um padrão único de erro — pronta para orientar a Etapa 2.
- Wireframes mobile (texto, tabela de navegação, diagrama Mermaid e 14 telas com leitura de usabilidade) e wireframes web (14 telas) entregues de forma completa, com trabalho bem distribuído ao longo de várias sessões, não concentrado na véspera.

## ⚠️ Oportunidades de Melhoria
- A tabela de Requisitos Não Funcionais tem problemas de conteúdo: RNF-001 e RNF-002 têm texto idêntico em categorias diferentes (aparente erro de cópia), e RNF-003 (RBAC) e RNF-006 (criptografia) estão classificados como "Disponibilidade"/"Desempenho" quando são, na prática, requisitos de Segurança.
- RF-009 e RF-010 têm a mesma descrição para canais diferentes (Backend e Web) — falta diferenciar o que muda entre eles.
- A Seção 6 (Frontend Web) não tem um fluxograma de navegação equivalente ao diagrama Mermaid da Seção 7 (Mobile), apesar de a tarefa (H37a) pedir explicitamente "Wireframes... e Fluxograma de Navegação".
- Participação desigual na qualidade da entrega: enquanto a maior parte da equipe entregou conteúdo tecnicamente coerente e revisado, a atividade de requisitos concentrou a maioria das inconsistências apontadas nesta rodada.

---

## 👥 Quadro de Participação da Equipe

| Aluno | Nome | GitHub | Commits | % Participação |
| :---: | :--- | :--- | :---: | :---: |
| 1 | João Pedro Lopes da Silva | `JoaoLopes994` | 16 | `97%` |
| 2 | Raphael Yankous Machado Clemente | `RaphaelYankous` | 8 | `97%` |
| 3 | Kelven Rodrigues da Silva | `puckelvensilva` | 24 | `98%` |
| 4 | Leticia Beatriz da Silva | `leticiabeatrizs` | 25 | `97%` |
| 5 | Pedro Ivo Dias Ferreira da Silva | `PedroD98` | 40 | `98%` |
| 6 | Vinícius Claret Nunes | `viniciusclaretnuns` | 12 | `82%` |
| 7 | Julio de Oliveira Nascimento | `xSC4Rx` | 8 | `73%` |

---

## 🔍 Avaliação Individual por Atividades Entregues

### 👤 Aluno 1: João Pedro Lopes da Silva
- **✔️ Entregue**: Problema, Objetivos e Justificativa (T1.1) — commit `3e85c87`; refinamento extra da seção de Tecnologias e Hospedagem — commits `dfc793b`, `e3b09cb`.
- **❌ Pendente/Incompleto**: nenhuma pendência na sua tarefa oficial.
- **Parecer**: Entrega principal clara e bem fundamentada, com engajamento adicional fora do próprio escopo para manter a coerência técnica do documento.

---

### 👤 Aluno 2: Raphael Yankous Machado Clemente
- **✔️ Entregue**: Catálogo de Serviços Web e SLA (T1.4) — commit `90c4028`; conteúdo textual da Seção 6 (Frontend Web) — commit `5fb9143`.
- **❌ Pendente/Incompleto**: nenhuma pendência na sua tarefa oficial.
- **Parecer**: Cumpriu bem sua tarefa e ainda assumiu a redação do frontend web, ampliando sua contribuição real à equipe.

---

### 👤 Aluno 3: Kelven Rodrigues da Silva
- **✔️ Entregue**: Tecnologias e Hospedagem (T1.6) — commit `7480256`; Contratos de API (T1.7) — commits `3cf8815`, `3b86775`, `5c89762`, `68c2d8f`, `e4b0a70`.
- **❌ Pendente/Incompleto**: nenhuma pendência nas suas duas tarefas.
- **Parecer**: Duas entregas técnicas sólidas e detalhadas, com evolução incremental visível nos commits ao longo de toda a etapa.

---

### 👤 Aluno 4: Leticia Beatriz da Silva
- **✔️ Entregue**: Wireframes Móveis e Fluxo de Gestos (T1.9) — texto/tabela/diagrama no commit `9286e49`; imagens nos commits `db7f506`, `a8543f2`, `8c2ad21`.
- **❌ Pendente/Incompleto**: nenhuma pendência na sua tarefa oficial.
- **Parecer**: A entrega mais completa e detalhada da etapa, com boa distribuição de trabalho em múltiplas sessões.

---

### 👤 Aluno 5: Pedro Ivo Dias Ferreira da Silva
- **✔️ Entregue**: Personas e Stakeholders (T1.2) — commit `89930f8`; Diagrama de Arquitetura (T1.5) — commits `9fc8df7`, `4b05fef`.
- **❌ Pendente/Incompleto**: nenhuma pendência nas suas duas tarefas.
- **Parecer**: Entregas coerentes entre si e com o restante do documento, além de forte atuação na integração de contribuições de outros colegas.

---

### 👤 Aluno 6: Vinícius Claret Nunes
- **✔️ Entregue**: Wireframes do Frontend Web (T1.8) — commits `c410c86`, `61f12cc`.
- **❌ Pendente/Incompleto**: falta o fluxograma de navegação web exigido pela própria tarefa (H37a) — hoje só há lista de telas e imagens, sem diagrama de fluxo.
- **Parecer**: Wireframes entregues com qualidade, mas a tarefa está parcialmente concluída até que o fluxograma de navegação seja adicionado.

---

### 👤 Aluno 7: Julio de Oliveira Nascimento
- **✔️ Entregue**: Requisitos Funcionais e Não Funcionais (T1.3) — commit `285b354`.
- **❌ Pendente/Incompleto**: corrigir a duplicidade de texto entre RF-009/RF-010 e entre RNF-001/RNF-002, e reclassificar a categoria de RNF-003 e RNF-006 (são requisitos de Segurança, não de Disponibilidade/Desempenho).
- **Parecer**: Tarefa entregue com volume relevante, mas com inconsistências de classificação e duplicidade que precisam de revisão antes de considerar o requisito fechado.

