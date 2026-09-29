# 📦 Módulo de Backend (APIs)

Este diretório deve conter todo o código-fonte da API central e serviços distribuídos do projeto.

---

## 🚀 Orientações de Desenvolvimento

Para manter a organização e a qualidade do projeto, garanta que:
1. Os códigos estejam organizados em camadas limpas (ex: Controllers, Services, Models, Repositories).
2. Não sejam utilizados dados estáticos ou JSONs simulados ("mocado") nas lógicas de resposta, as requisições devem persistir e consultar em seu Banco de Dados distribuído.
3. Seus arquivos de testes unitários ou de integração residam nesta pasta.

## 🛠️ Como Executar a Aplicação (Preencher)

1. **Requisitos Prévios:** Node v26.8.1, mysql/mariadb
2. **Setup do Projeto:** `npm install`
3. **Setup do Banco (com variáveis de ambiente configuradas):** `nest build` -> `npm run db:create` -> `npm run migration:run`
4. **Execução:** `npm run start:dev`
5. **Testes**: `npm run test`
